import React, { FC, PropsWithChildren, useEffect, useState } from "react"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Input from "../UI/Input"
import SmallPipe from "../UI/SmallPipe"
import { addNewTechCategoryReducer } from "../../store/editProject"
import { getErrorMessage } from "../../util/getErrorMessage"
import { setTechCategoryReducer } from "../../store/newProjectSlice"
import { useAlert } from "../../util/useAlert"
import { useCreateTechCategoryMutation } from "../../types/graphql-types"
import { useTheDispatch } from "../../store/store"

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
  const [
    mutateNewTechCategory,
    { error: createTechCategoryError, loading: createTechCategoryLoading },
  ] = useCreateTechCategoryMutation()
  const dispatch = useTheDispatch()
  
  useEffect(() => {
    if (createTechCategoryError && !createTechCategoryLoading) {
      setAlert({
        title: "Error",
        isOpen: true,
        message:
          createTechCategoryError && getErrorMessage(createTechCategoryError),
      })
    }
  }, [createTechCategoryError, createTechCategoryLoading])

  const addNewTechCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTechCategory) {
      if (mode === "ADD") {
        dispatch(setTechCategoryReducer({ name: newTechCategory }))
        setAlert({
          title: "Success",
          message: "Added but not saved yet a new tech category.",
          isOpen: true,
        })
        setNewTechCategory("")
      } else {
        mutateNewTechCategory({
          variables: {
            name: newTechCategory,
            projectId: projectId!,
          },
        })
          .then(res => {
            if (res.data) {
              dispatchEditProjectStore(
                addNewTechCategoryReducer({
                  id: res.data?.createTechCategory.id,
                  name: res.data?.createTechCategory.name,
                })
              )
              setAlert({
                title: "Success",
                message: "Added a new tech category successfully.",
                isOpen: true,
              })
              setNewTechCategory("")
            } else {
              setAlert({
                title: "Error",
                isOpen: true,
                message: "Unknown Error: Couldn't create new tech category.",
              })
            }
          })
          .catch(e => {
            setAlert({
              title: "Error",
              message: e.errors
                ? getErrorMessage(e)
                : "Something went wrong, couldn't add the new category.",
              isOpen: true,
            })
          })
      }
    } else {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Tech category name is required, please provide a value.",
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
        <form
          className="flex gap-0 w-full"
          onSubmit={e => addNewTechCategory(e)}
        >
          <div className="flex-grow">
            <Input
              color="200"
              textColor="500"
              required
              placeholder="Enter Tech Category Name"
              id="add-new-tech-category"
              name="add-new-tech-category"
              style={{ padding: "5px 15px" }}
              value={newTechCategory}
              getValue={v => setNewTechCategory(v)}
            />
          </div>
          <Button type="submit" normal outline>
            Add
          </Button>
        </form>
      </SmallPipe>
    </>
  )
}
export default AddTechCategory
