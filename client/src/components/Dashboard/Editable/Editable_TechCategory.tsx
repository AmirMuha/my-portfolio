import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
  Reducer,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import { Close, Edit } from "../../../icons/iconsJSX"
import Button from "../../UI/Button"
import Confirm from "../../UI/Confirm"
import Input from "../../UI/Input"
import Modal from "../../UI/Modal"

interface TechAction {
  type: "CATEGORY_NAME" | "TECH"
  value: string | string[]
}
export interface TechState {
  name: string
  techs: string[]
}
const techInitialState: TechState = {
  name: "",
  techs: [],
}
const techReducer: Reducer<TechState, TechAction> = (state, action) => {
  switch (action.type) {
    case "TECH":
      if (typeof action.value === "string") {
        state.techs.push(action.value)
      }
      return state
    case "CATEGORY_NAME":
      return {
        name: action.value as string,
        techs: state.techs,
      }
    default:
      return state
  }
}

interface Props {
  onClose: () => void
  onSave: (v?: any) => void
  onDeleteTech: (id: string) => void
  title: string
  buttonStyle?: CSSProperties
  buttonClassName?: string
  editButtonStyle?: CSSProperties
}

const Editable_TechCategory: FC<PropsWithChildren<Props>> = ({
  onDeleteTech,
  onClose,
  onSave,
  title,
  buttonStyle,
  buttonClassName,
  editButtonStyle,
}) => {
  const [confirmBox, setConfirmBox] = useState({ open: false, id: "" })
  const [isInputEditable, setIsInputEditable] = useState<boolean>(true)
  const techInputRef = useRef<HTMLInputElement>()
  const inputRef = useRef<HTMLInputElement>()
  const [techState, dispatchTech] = useReducer(techReducer, techInitialState)
  const deleteTechItem = () => {}
  const sendBackTechValues = () => {
    onSave(techState)
    onClose()
  }
  useEffect(() => {
    dispatchTech({
      type: "TECH",
      value: [],
    })
  }, [])
  return (
    <Modal header title={`Editing ${title} Tech Category`} onClose={onClose}>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-bold">{title} :</span>
          <Input
            id={title as string}
            name={title}
            type="text"
            placeholder={title}
            getValue={v => dispatchTech({ value: v, type: "CATEGORY_NAME" })}
            ref={inputRef as any}
            color={isInputEditable ? "100" : "200"}
            style={{ padding: "4px 15px" }}
            value={techState.name}
            readOnly={isInputEditable}
          />
          {!isInputEditable ? (
            <Button
              outline
              borderColor="400"
              color="100"
              normal
              onClick={() => setIsInputEditable(prev => !prev)}
              style={{ ...buttonStyle, padding: "6px" }}
              className={`${buttonClassName} rounded-full`}
            >
              <span className="icon-s-1">{Close}</span>
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIsInputEditable(prev => !prev)
                inputRef.current?.focus()
              }}
              outline
              borderColor="400"
              color="100"
              normal
              style={{ padding: "6px", ...editButtonStyle }}
              className="rounded-full"
            >
              {Edit}
            </Button>
          )}
        </div>
        <hr className="bg-palatte-500 my-3" />
        <div className="flex items-center  gap-2">
          <span className="font-bold">Techs :</span>
          <input
            id={`${title as string}-new-tech`}
            name={`${title as string}-new-tech`}
            type="text"
            placeholder="New Tech Name"
            className="px-3 text-palatte-500 py-1 bg-palatte-200"
            ref={techInputRef as any}
          />
          <button
            onClick={() =>
              dispatchTech({
                value: techInputRef.current?.value! || "",
                type: "TECH",
              })
            }
            className="border-palatte-500 border px-3 p-0.5"
          >
            Add
          </button>
        </div>
        {confirmBox.open && (
          <Confirm
            text={
              "Do your realy want to delete TECH_ITEM with id of " +
              confirmBox.id
            }
            getValue={deleteTechItem}
            confirmButtonText="Delete"
            title="Deleting Tech Item"
            onClose={() => setConfirmBox({ open: false, id: "" })}
          />
        )}
        <ul className="py-3">
          <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
            ReactJS
            <span
              onClick={() => {
                onDeleteTech("1")
                setConfirmBox({ open: true, id: "1" })
              }}
              className="cursor-pointer icon-s-1"
            >
              {Close}
            </span>
          </li>
          <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
            VueJS
            <span
              onClick={() => {
                onDeleteTech("2")
                setConfirmBox({ open: true, id: "2" })
              }}
              className="cursor-pointer icon-s-1"
            >
              {Close}
            </span>
          </li>
          <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
            Socket.IO
            <span
              onClick={() => {
                onDeleteTech("3")
                setConfirmBox({ open: true, id: "3" })
              }}
              className="cursor-pointer icon-s-1"
            >
              {Close}
            </span>
          </li>
          <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
            TS
            <span
              onClick={() => {
                onDeleteTech("4")
                setConfirmBox({ open: true, id: "4" })
              }}
              className="cursor-pointer icon-s-1"
            >
              {Close}
            </span>
          </li>
          <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
            PostgresQL
            <span
              onClick={() => {
                onDeleteTech("5")
                setConfirmBox({ open: true, id: "5" })
              }}
              className="cursor-pointer icon-s-1"
            >
              {Close}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <Button onClick={onClose} normal outline color="100" textColor="500">
          Close
        </Button>
        <Button
          onClick={() => {
            sendBackTechValues()
            setIsInputEditable(prev => !prev)
          }}
          normal
          outline
        >
          Save
        </Button>
      </div>
    </Modal>
  )
}

export default Editable_TechCategory
