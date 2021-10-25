import { useMutation } from "@apollo/client"
import React, { FC, PropsWithChildren, useState } from "react"
import {
  addNewTechCategoryReducer,
  updateProjectFieldReducer,
} from "../../store/editProject"
import { setTechCategoryReducer } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import { CreateTechCategoryMutation } from "../../util/mutations"
import { useAlert } from "../../util/useAlert"
import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Input from "../UI/Input"
import SmallPipe from "../UI/SmallPipe"

interface Props {
  mode?: "ADD" | "EDIT"
  projectId?: string
}

const AddTechCategory: FC<PropsWithChildren<Props>> = ({
  mode = "EDIT",
  projectId,
}) => {
  const dispatchEditProjectStore = useTheDispatch()
  const { isOpen, message, title, setAlert } = useAlert()
  const [newTechCategory, setNewTechCategory] = useState<string>("")
  const [mutateNewTechCategory] = useMutation(CreateTechCategoryMutation)
  const dispatch = useTheDispatch()

  const addNewTechCategory = () => {
    if (mode === "ADD") {
      dispatch(setTechCategoryReducer({ name: newTechCategory }))
      setAlert({
        title: "Success",
        message: "Added but not saved yet a new tech category.",
        isOpen: true,
      })
    } else {
      mutateNewTechCategory({
        variables: {
          name: newTechCategory,
          projectId: projectId,
        },
      })
        .then(res => {
          dispatchEditProjectStore(
            addNewTechCategoryReducer({
              id: res.data.createTechCategory.id,
              name: res.data.createTechCategory.name,
            })
          )
          setAlert({
            title: "Success",
            message: "Added a new tech category successfully.",
            isOpen: true,
          })
        })
        .catch(e => {
          setAlert({
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Something went wrong, couldn't add the new category.",
            isOpen: true,
          })
        })
    }
  }
  return (
    <>
      {isOpen && (
        <Alert
          title={title}
          autoClose={5}
          header
          message={message}
          backdrop
          position="TOP"
          onClose={() => setAlert({ isOpen: false })}
        />
      )}
      <SmallPipe className="mr-5 mb-2">
        <div className="flex-grow">
          <Input
            color="200"
            textColor="500"
            placeholder="Enter Tech Category Name"
            id="add-new-tech-category"
            name="add-new-tech-category"
            style={{ padding: "5px 15px" }}
            value={newTechCategory}
            getValue={v => setNewTechCategory(v)}
          />
        </div>
        <Button normal outline onClick={addNewTechCategory}>
          Add
        </Button>
      </SmallPipe>
    </>
  )
}

export default AddTechCategory
