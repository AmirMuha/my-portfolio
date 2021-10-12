import React, { CSSProperties, FC, useState } from "react"
import { Delete } from "../../icons/iconsJSX"
import Editable, { TechState } from "../Dashboard/Editable"
import Confirm from "../UI/Confirm"
import SmallPipe from "../UI/SmallPipe"
interface Props {
  data: TechDataObject
  className?: string
  style?: CSSProperties
  border?: boolean
  editable?: boolean
}
interface TechDataObject {}
const TechItem: FC<Props> = ({
  editable = false,
  border = true,
  style,
  className,
}) => {
  const [techItem, setTechItem] = useState<string>("")
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(true)

  const updateTechItem = () => {
    console.log("updating the tech item")
  }
  const getTechItem = (v: string) => {
    setTechItem(v)
  }
  const openConfirm = () => {
    setIsConfirmOpen(true)
  }
  const deleteTechCategory = (v: boolean) => {
    if (v) {
      console.log("deleting tech category ...")
    }
  }
  const deleteTech = (id: string) => {
    console.log("deleting tech item with id " + id)
  }
  const updateTech = (v: TechState) => {
    console.log(v)
  }
  return (
    <div
      style={style}
      className={`flex-col justify-start gap-0 ml-14 ${
        border && " border-l-5 md:border-l-10 border-palatte-500 "
      } ${className}`}
    >
      {/* {isAlertOpen && (
        <Alert
          message="Something went wrong during the operation."
          title="Error"
          onClose={() => setIsAlertOpen(false)}
        />
      )} */}
      <SmallPipe className="pt-3">
        <div className="pl-2 pr-5 w-full text-sm flex items-center justify-between font-semibold relative">
          <span>FrontEnd</span>
          {editable && (
            <div className="flex gap-5 items-center">
              <Editable
                techCategory
                title="FronEnd"
                editButtonStyle={{ position: "initial" }}
                techOnSave={v => updateTech(v)}
                mode="MODAL"
                deleteTech={id => deleteTech(id)}
                onSave={updateTechItem}
                getValue={getTechItem}
                value={techItem}
              />
              <span className="cursor-pointer" onClick={openConfirm}>
                {Delete}
              </span>
              {isConfirmOpen && (
                <Confirm
                  text="Do your realy want to delete TECH_CATEGORY_ITEM ?"
                  getValue={deleteTechCategory}
                  confirmButtonText="Delete"
                  title="Deleting FrontEnd"
                  onClose={() => setIsConfirmOpen(false)}
                />
              )}
            </div>
          )}
        </div>
      </SmallPipe>
      <ul className="ml-3">
        <li className="inline-flex bg-palatte-200 px-2 m-1">React</li>
        <li className="inline-flex bg-palatte-200 px-2 m-1">Redux</li>
      </ul>
    </div>
  )
}

export default TechItem
