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
import { createPortal } from "react-dom"
import { Close, Done, Edit } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import Input from "../UI/Input"

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
  file?: boolean
  techCategory?: boolean
  value: any
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
  onSave: () => void
  techOnSave?: (v: TechState) => void
  onClose?: () => void
  getValue: (v: any) => void
  getTechCategoryValue?: (v: any) => void
  deleteTech?: (id: string) => void
}
const Editable: FC<PropsWithChildren<Props>> = ({
  text = false,
  mode = "IN_POSITION",
  file = false,
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
  style,
  deleteTech,
}) => {
  const [isEnable, setIsEnable] = useState<boolean>(false)
  const [isInputEditable, setIsInputEditable] = useState<boolean>(true)
  const [techState, dispatchTech] = useReducer(techReducer, techInitialState)
  const fileRef = useRef<HTMLInputElement>()
  const inputRef = useRef<HTMLInputElement>()
  const techInputRef = useRef<HTMLInputElement>()
  const sendBackTechValues = () => {
    techOnSave && techOnSave(techState)
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
                onChange={e => getValue(e.currentTarget.value)}
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
                  getValue(e.currentTarget.files)
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
      {mode === "MODAL" &&
        isEnable &&
        !techCategory &&
        createPortal(
          <div>
            <div
              onClick={() => setIsEnable(prev => !prev)}
              className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
            ></div>
            <dialog
              open={isEnable}
              style={{ maxHeight: "80vh", maxWidth: "900px", padding: 0 }}
              className="bg-palatte-100 fixed overflow-scroll top-1/2 w-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-palatte-500"
            >
              <header className="bg-palatte-500 px-5 py-3 font-bold text-palatte-100">
                {title}
              </header>
              <div className="py-3 px-5 flex items-center gap-1">
                <Input
                  id={title as string}
                  name={title}
                  type={inputType}
                  color="200"
                  style={{ fontSize: "0.80rem" }}
                  ref={inputRef as any}
                  placeholder={`Enter the ${title}`}
                  getValue={v => getValue(v)}
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
              </div>
            </dialog>
          </div>,
          document.body
        )}
      {mode === "MODAL" && isEnable && techCategory && (
        <>
          {createPortal(
            <div>
              <div
                onClick={() => setIsEnable(prev => !prev)}
                className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
              ></div>
              <dialog
                open={isEnable}
                style={{ maxHeight: "80vh", maxWidth: "900px", padding: 0 }}
                className="bg-palatte-100 fixed overflow-scroll top-1/2 w-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-palatte-500"
              >
                <header className="bg-palatte-500 px-5 py-3 font-bold text-palatte-100">
                  Editing {title} Tech Category
                </header>
                <div className="py-3 px-5">
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
                    <ul className="py-3">
                      <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
                        ReactJS
                        <span
                          onClick={() => deleteTech && deleteTech("")}
                          className="cursor-pointer icon-s-1"
                        >
                          {Close}
                        </span>
                      </li>
                      <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
                        VueJS
                        <span
                          onClick={() => deleteTech && deleteTech("")}
                          className="cursor-pointer icon-s-1"
                        >
                          {Close}
                        </span>
                      </li>
                      <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
                        Socket.IO
                        <span
                          onClick={() => deleteTech && deleteTech("")}
                          className="cursor-pointer icon-s-1"
                        >
                          {Close}
                        </span>
                      </li>
                      <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
                        TS
                        <span
                          onClick={() => deleteTech && deleteTech("")}
                          className="cursor-pointer icon-s-1"
                        >
                          {Close}
                        </span>
                      </li>
                      <li className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1">
                        PostgresQL
                        <span
                          onClick={() => deleteTech && deleteTech("")}
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
                </div>
              </dialog>
            </div>,

            document.body
          )}
        </>
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
