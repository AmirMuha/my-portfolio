import React, { FC, PropsWithChildren, useState } from "react"
import { setTechCategoryReducer } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import Button from "../UI/Button"
import Input from "../UI/Input"
import SmallPipe from "../UI/SmallPipe"

interface Props {}

const AddTechCategory: FC<PropsWithChildren<Props>> = () => {
  const [newTechCategory, setNewTechCategory] = useState<string>("")
  const dispatch = useTheDispatch()

  const addNewTechCategory = () => {
    dispatch(setTechCategoryReducer({ name: newTechCategory }))
  }
  return (
    <>
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
