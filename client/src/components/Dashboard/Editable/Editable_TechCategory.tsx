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
  type: "CATEGORY_NAME" | "TECH" | "TECH_CATEGORY" | "DELETE_TECH"
  value: string | string[] | { name: string; techs: string[] }
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
    case "DELETE_TECH":
      const techIndex = state.techs.findIndex(t => t === action.value)
      state.techs.splice(techIndex, 1)
      return state
    case "TECH_CATEGORY":
      return {
        name: (action.value as any).name,
        techs: (action.value as any).techs,
      }
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
  mode?: "ADD" | "EDIT"
  onClose: () => void
  onSave: (v?: any) => void
  onDeleteTech: (id: string) => void
  title: string
  buttonStyle?: CSSProperties
  buttonClassName?: string
  data:
    | GatsbyTypes.Portfolio_TechCategory
    | { name: string; techs: { name: string }[] }
  editButtonStyle?: CSSProperties
}

const Editable_TechCategory: FC<PropsWithChildren<Props>> = ({
  onDeleteTech,
  onClose,
  mode = "EDIT",
  data,
  onSave,
  title,
  buttonStyle,
  buttonClassName,
  editButtonStyle,
}) => {
  const [_, rerender] = useState({})
  const [confirmBox, setConfirmBox] = useState<{
    open: boolean
    id: string | number
    name: string
  }>({ open: false, id: "", name: "" })
  const [isInputEditable, setIsInputEditable] = useState<boolean>(true)
  const techInputRef = useRef<HTMLInputElement>()
  const inputRef = useRef<HTMLInputElement>()
  const [techState, dispatchTech] = useReducer(techReducer, techInitialState)
  console.log(techState)
  const deleteTechItem = (i: string | number, name: string) => {
    if (typeof i === "string" && mode === "EDIT") {
      onDeleteTech(i)
      setConfirmBox({ open: true, id: i, name })
    } else {
      dispatchTech({
        type: "DELETE_TECH",
        value: name,
      })
      setConfirmBox({ open: false, id: "", name: "" })
    }
  }
  const sendBackTechValues = () => {
    onSave(techState)
    onClose()
  }
  useEffect(() => {
    dispatchTech({
      type: "TECH_CATEGORY",
      value: {
        name: data.name,
        techs: data.techs.map(t => t.name),
      },
    })
  }, [])
  return (
    <Modal
      header
      title={`Editing ${techState.name} Tech Category`}
      onClose={onClose}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="font-bold">{techState.name} :</span>
          <Input
            id={techState.name as string}
            name={techState.name}
            type="text"
            placeholder={techState.name}
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
            onClick={() => {
              dispatchTech({
                value: techInputRef.current?.value! || "",
                type: "TECH",
              })
              rerender({})
            }}
            className="border-palatte-500 border px-3 p-0.5"
          >
            Add
          </button>
        </div>
        {confirmBox.open && (
          <Confirm
            text={
              `Do your realy want to delete ${confirmBox.name} with id of ` +
              confirmBox.id
            }
            getValue={v => {
              if (v) {
                deleteTechItem(confirmBox.id, confirmBox.name)
              }
            }}
            confirmButtonText="Delete"
            title="Deleting Tech Item"
            onClose={() => setConfirmBox({ open: false, id: "", name: "" })}
          />
        )}
        <ul className="py-3">
          {techState.techs.length > 0 &&
            techState.techs.map((t, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1"
              >
                {t}
                <span
                  onClick={() => setConfirmBox({ open: true, id: i, name: t })}
                  className="cursor-pointer icon-s-1"
                >
                  {Close}
                </span>
              </li>
            ))}
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
