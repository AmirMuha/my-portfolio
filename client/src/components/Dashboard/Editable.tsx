import React, {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  PropsWithChildren,
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import { Close, Done, Edit } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import Confirm from "../UI/Confirm"
import Input from "../UI/Input"
import Modal from "../UI/Modal"
import TextArea from "../UI/TextArea"

export interface QAndAEditTypes {
  question: string
  answer: string
}
interface TechAction {
  type: "CATEGORY_NAME" | "TECH"
  value: string | string[]
}
export interface TechState {
  categoryName: string
  techs: string[]
}
const techInitialState: TechState = {
  categoryName: "",
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
        categoryName: action.value as string,
        techs: state.techs,
      }
    default:
      return state
  }
}
interface Props {
  inputType?: HTMLInputTypeAttribute
  title?: string
  text?: boolean
  custom?: boolean
  file?: boolean
  QAndA?: boolean
  techCategory?: boolean
  value?: any
  mode: "MODAL" | "IN_POSITION"
  position?: "tr" | "br"
  acceptableFileTypes?: string
  positionNum?: "inside" | "outside"
  inputClassName?: string
  inputStyle?: CSSProperties
  editButtonStyle?: CSSProperties
  buttonStyle?: CSSProperties
  style?: CSSProperties
  modalChildren?: ReactNode
  buttonClassName?: string
  className?: string
  techValue?: string
  techCategoryValue?: string
  onSave: (v?: any) => void
  techOnSave?: (v: TechState) => void
  QAndAOnSave?: (v: any) => void
  onClose?: () => void
  getValue?: (v: any) => void
  getTechCategoryValue?: (v: any) => void
  deleteTech?: (id: string) => void
}
const Editable: FC<PropsWithChildren<Props>> = ({
  text = false,
  custom = false,
  mode = "IN_POSITION",
  file = false,
  QAndA = false,
  techCategory = false,
  position = "br",
  positionNum = "outside",
  title,
  onClose,
  inputType,
  acceptableFileTypes,
  onSave,
  getValue,
  value,
  editButtonStyle,
  modalChildren,
  inputClassName,
  inputStyle,
  buttonClassName,
  buttonStyle,
  className,
  techOnSave,
  QAndAOnSave,
  style,
  deleteTech,
}) => {
  const [isEnable, setIsEnable] = useState<boolean>(false)
  const [confirmBox, setConfirmBox] = useState({ open: false, id: "" })
  const [isInputEditable, setIsInputEditable] = useState<boolean>(true)
  const [newQuestion, setNewQuestion] = useState<string>("")
  const [newAnswer, setNewAnswer] = useState<string>("")
  const [techState, dispatchTech] = useReducer(techReducer, techInitialState)
  const fileRef = useRef<HTMLInputElement>()
  const inputRef = useRef<HTMLInputElement>()
  const techInputRef = useRef<HTMLInputElement>()
  const deleteTechItem = () => {}
  const sendBackTechValues = () => {
    techOnSave && techOnSave(techState)
    setIsEnable(false)
  }
  const sendBackQAndA = () => {
    onSave({ question: newQuestion, answer: newAnswer })
    setIsEnable(false)
  }
  useEffect(() => {
    dispatchTech({
      type: "TECH",
      value: [],
    })
  }, [])
  return (
    <>
      {mode === "IN_POSITION" && (
        <>
          {text && (
            <div style={style} className={`${className} relative`}>
              <textarea
                readOnly={!isEnable}
                onChange={e => getValue && getValue(e.currentTarget.value)}
                value={value}
                rows={8}
                style={{ ...inputStyle }}
                className={`${inputClassName} w-full resize-none bg-palatte-100 placeholder-opacity-50 text-palatte-500 placeholder-palatte-500`}
              />
              {isEnable ? (
                <div
                  style={{ ...editButtonStyle }}
                  className={`flex items-center gap-1 absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => {
                      onSave()
                      setIsEnable(prev => !prev)
                    }}
                    style={{ ...buttonStyle, padding: "4px 7px" }}
                    className={`${buttonClassName} rounded-full bg-palatte-500`}
                  >
                    <span className="icon-s-1 text-palatte-100 gap-1 text-tiny flex items-center">
                      Save {Done}
                    </span>
                  </Button>
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => setIsEnable(prev => !prev)}
                    style={{ ...buttonStyle, padding: "6px" }}
                    className={`${buttonClassName} rounded-full`}
                  >
                    <span className="icon-s-1">{Close}</span>
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsEnable(prev => !prev)}
                  outline
                  borderColor="400"
                  color="100"
                  normal
                  style={{ padding: "6px", ...editButtonStyle }}
                  className={`rounded-full absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  {Edit}
                </Button>
              )}
            </div>
          )}
          {file && (
            <>
              <input
                type="file"
                ref={fileRef as any}
                onChange={e => {
                  getValue && getValue(e.currentTarget.files)
                  setIsEnable(prev => !prev)
                }}
                hidden
                accept={acceptableFileTypes}
                // datatype=""
                multiple={false}
                className={`hidden`}
              />
              {isEnable ? (
                <div
                  className={`flex items-center gap-1 absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => {
                      onSave()
                      setIsEnable(prev => !prev)
                    }}
                    style={{ ...buttonStyle, padding: "4px 7px" }}
                    className={`${buttonClassName} rounded-full bg-palatte-500`}
                  >
                    <span className="icon-s-1 text-palatte-100 gap-1 text-tiny flex items-center">
                      Save {Done}
                    </span>
                  </Button>
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => {
                      setIsEnable(prev => !prev)
                    }}
                    style={{ ...buttonStyle, padding: "6px" }}
                    className={`${buttonClassName} rounded-full`}
                  >
                    <span className="icon-s-1">{Close}</span>
                  </Button>
                </div>
              ) : (
                <Button
                  outline
                  borderColor="400"
                  color="100"
                  normal
                  onClick={() => {
                    fileRef.current?.click()
                  }}
                  style={{ padding: "6px", ...editButtonStyle }}
                  className={`rounded-full absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  {Edit}
                </Button>
              )}
            </>
          )}
        </>
      )}
      {mode === "MODAL" && isEnable && !techCategory && custom && (
        <Modal
          header
          title={title}
          onClose={() => setIsEnable(prev => !prev)}
          containerClass="flex items-center gap-1"
        >
          <Input
            id={title as string}
            name={title}
            type={inputType}
            color="200"
            style={{ fontSize: "0.80rem" }}
            ref={inputRef as any}
            placeholder={`Enter the ${title}`}
            getValue={v => getValue && getValue(v)}
            containerClasses="flex-grow"
            value={value}
          />
          <Button
            onClick={() => {
              onSave()
              setIsEnable(prev => !prev)
            }}
            normal
            outline
          >
            Save
          </Button>
        </Modal>
      )}
      {mode === "MODAL" && isEnable && techCategory && (
        <>
          <Modal
            header
            title={`Editing ${title} Tech Category`}
            onClose={() => setIsEnable(prev => !prev)}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">{title} :</span>
                <Input
                  id={title as string}
                  name={title}
                  type={inputType}
                  placeholder={title}
                  getValue={v =>
                    dispatchTech({ value: v, type: "CATEGORY_NAME" })
                  }
                  ref={inputRef as any}
                  containerClasses=""
                  color={isInputEditable ? "100" : "200"}
                  style={{ padding: "4px 15px" }}
                  value={techState.categoryName}
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
                      deleteTech && deleteTech("1")
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
                      deleteTech && deleteTech("2")
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
                      deleteTech && deleteTech("3")
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
                      deleteTech && deleteTech("4")
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
                      deleteTech && deleteTech("5")
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
              <Button
                onClick={() => {
                  setIsEnable(prev => !prev)
                }}
                normal
                outline
                color="100"
                textColor="500"
              >
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
        </>
      )}
      {mode === "MODAL" &&
        isEnable &&
        !techCategory &&
        !custom &&
        !text &&
        QAndA && (
          <Modal
            title={title}
            onClose={() => setIsEnable(prev => !prev)}
            header
          >
            <Input
              id="new-question"
              label="Question"
              textColor="500"
              color="200"
              required
              placeholder="Enter New Question"
              value={newQuestion}
              getValue={v => setNewQuestion(v)}
            />
            <TextArea
              id="new-answer"
              label="Answer"
              color="200"
              required
              rows={10}
              style={{ resize: "none" }}
              textColor="500"
              value={newAnswer}
              getValue={v => setNewAnswer(v)}
            />
            <div className="flex items-center gap-2 justify-end">
              <Button
                normal
                outline
                borderColor="500"
                color="100"
                textColor="500"
                onClick={() => setIsEnable(prev => !prev)}
              >
                Close
              </Button>
              <Button normal onClick={sendBackQAndA}>
                Save
              </Button>
            </div>
          </Modal>
        )}
      {mode === "MODAL" && !isEnable && (
        <Button
          outline
          borderColor="400"
          color="100"
          normal
          onClick={() => setIsEnable(prev => !prev)}
          style={{ padding: "6px", ...editButtonStyle }}
          className={`rounded-full ${
            position === "br"
              ? "absolute -bottom-4 -right-4"
              : "absolute bottom-0 right-0"
          }`}
        >
          {Edit}
        </Button>
      )}
    </>
  )
}

export default Editable
