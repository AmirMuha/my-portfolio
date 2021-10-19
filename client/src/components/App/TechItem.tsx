import React, { CSSProperties, FC, useState } from "react"
import { Delete } from "../../icons/iconsJSX"
import Editable from "../Dashboard/Editable"
import { TechState } from "../Dashboard/Editable/Editable_TechCategory"
import Confirm from "../UI/Confirm"
import SmallPipe from "../UI/SmallPipe"
interface Props {
  data: GatsbyTypes.Portfolio_TechCategory
  className?: string
  style?: CSSProperties
  border?: boolean
  editable?: boolean
}
const TechItem: FC<Props> = ({
  editable = false,
  border = true,
  style,
  data,
  className = "",
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
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
      className={`flex-col justify-start gap-0 mr-6 ml-14 ${
        border && " border-l-5 md:border-l-10 border-palatte-500 "
      } ${className}`}
    >
      <SmallPipe className="pt-3">
        <div className="pl-2 pr-5 w-full text-sm flex items-center justify-between font-semibold relative">
          <span>{data.name}</span>
          {editable && (
            <div className="flex gap-5 items-center">
              <Editable
                title={data.name}
                techCategory
                editButtonStyle={{ position: "initial" }}
                onSave={(v: TechState) => updateTech(v)}
                mode="MODAL"
                onDeleteTech={id => deleteTech(id)}
                value={data}
              />
              <span className="cursor-pointer" onClick={openConfirm}>
                {Delete}
              </span>
              {isConfirmOpen && (
                <Confirm
                  text={`Do your realy want to delete ${data.name} ?`}
                  getValue={deleteTechCategory}
                  confirmButtonText="Delete"
                  title={`Deleting ${data.name}`}
                  onClose={() => setIsConfirmOpen(false)}
                />
              )}
            </div>
          )}
        </div>
      </SmallPipe>
      <ul className="ml-3">
        {data.techs?.length > 0 &&
          data.techs.map(t => (
            <li key={t.id} className="inline-flex bg-palatte-200 px-2 m-1">
              {t.name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TechItem
