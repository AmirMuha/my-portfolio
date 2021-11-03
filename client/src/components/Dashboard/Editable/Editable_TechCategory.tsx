import { Close, Edit } from "../../../icons/iconsJSX"
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

import Alert from "../../UI/Alert"
import Button from "../../UI/Button"
import Confirm from "../../UI/Confirm"
import { CreateTechMutation } from "../../../util/mutations"
import Input from "../../UI/Input"
import Modal from "../../UI/Modal"
import { addNewTechReducer } from "../../../store/editProject"
import { useAlert } from "../../../util/useAlert"
import { useMutation } from "@apollo/client"
import { useTheDispatch } from "../../../store/store"

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
  const {
    isOpen: isAlertOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const [_, rerender] = useState({})
  const [confirmBox, setConfirmBox] = useState<{
    open: boolean
    id: string | number
    name: string
  }>({ open: false, id: "", name: "" })
  const [isInputEditable, setIsInputEditable] = useState<boolean>(true)
  const techInputRef = useRef<HTMLInputElement>()
  const inputRef = useRef<HTMLInputElement>()
  const editTechDispatch = useTheDispatch()
  const [mutateNewTech] = useMutation(CreateTechMutation)
  const [techState, dispatchTech] = useReducer(techReducer, techInitialState)
  const deleteTechItem = (i: string | number, name: string) => {
    if (typeof i === "string" && mode === "EDIT") {
      onDeleteTech(i)
      setConfirmBox({ open: false, id: i, name })
    } else {
      dispatchTech({
        type: "DELETE_TECH",
        value: name,
      })
      setConfirmBox({ open: false, id: "", name: "" })
    }
  }
  const sendBackTechValues = () => {
    if(!techState.name){
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Please make sure category name is not empty."
      })
      return
    }
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

  const addNewTech = () => {
    if (techInputRef.current) {
      if(!techInputRef.current.value) {
        setAlert({ isOpen: true, title: "Error", message: "Tech name field is required, you should provide a value."})
        return
      }
    }
    if (mode === "ADD") {
      if (techInputRef.current) {
        dispatchTech({
          value: techInputRef.current?.value! || "",
          type: "TECH",
        })
        techInputRef.current.value = ""
        techInputRef.current.focus()
        rerender({})
      }
    } else {
      mutateNewTech({
        variables: {
          name: techInputRef.current?.value,
          techCategoryId: (data as GatsbyTypes.Portfolio_TechCategory).id,
        },
      })
        .then(res => {
          editTechDispatch(
            addNewTechReducer({
              id: res.data.createTech.id,
              name: res.data.createTech.name,
              techCategoryId: (data as GatsbyTypes.Portfolio_TechCategory).id,
            })
          )
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Added a new tech Successfully.",
          })
          if (techInputRef.current) {
            techInputRef.current.value = ""
            techInputRef.current.focus()
          }
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message || "Couldn't add a new tech.",
          })
        })
    }
  }

  return (
    <>
      {isAlertOpen && (
        <Alert
          header
          title={alertTitle}
          message={alertMessage}
          onClose={() => setAlert({ isOpen: false })}
          autoClose={5}
          backdrop
        />
      )}
      <Modal
        header
        maxWidth="500px"
        title={`Editing ${
          mode === "ADD" ? techState.name : data.name
        } Tech Category`}
        onClose={onClose}
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold">
              Category Name :
            </span>
            <Input
              id={
                mode === "ADD"
                  ? (techState.name as string)
                  : (data as GatsbyTypes.Portfolio_TechCategory).id
              }
              name={mode === "ADD" ? techState.name : data.name}
              type="text"
              placeholder={mode === "ADD" ? techState.name : data.name}
              getValue={v => dispatchTech({ value: v, type: "CATEGORY_NAME" })}
              ref={inputRef as any}
              color={isInputEditable ? "100" : "200"}
              style={{ padding: "4px 15px" }}
              value={techState.name}
              containerClasses="flex-grow"
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
          <div className="flex items-center gap-4">
            <form
              className="w-full"
              onSubmit={e => {
                e.preventDefault()
                addNewTech()
              }}
            >
              <label
                className="font-bold mr-4 block sm:inline"
                htmlFor={`${title as string}-new-tech`}
              >
                Techs :
              </label>
              <div className="flex">
                <input
                  id={`${title as string}-new-tech`}
                  name={`${title as string}-new-tech`}
                  type="text"
                  placeholder="New Tech Name"
                  className="px-3 flex-grow text-palatte-500 py-1 bg-palatte-200"
                  ref={techInputRef as any}
                />
                <button
                  className="bg-palatte-500 text-palatte-100 border-palatte-500 border px-3 p-0.5"
                >
                  Add
                </button>
              </div>
            </form>
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
          <ul className="ml-0 py-3">
            {techState.techs.length > 0 &&
              mode === "ADD" &&
              techState.techs.map((t, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1"
                >
                  {t}
                  <span
                    onClick={() =>
                      setConfirmBox({ open: true, id: i, name: t })
                    }
                    className="cursor-pointer icon-s-1"
                  >
                    {Close}
                  </span>
                </li>
              ))}
            {(data as GatsbyTypes.Portfolio_TechCategory).techs.length > 0 &&
              mode === "EDIT" &&
              (data as GatsbyTypes.Portfolio_TechCategory).techs.map(t => (
                <li
                  key={t.id}
                  className="inline-flex items-center gap-2 bg-palatte-300 m-0.5 text-palatte-500 text-xs px-2 py-1"
                >
                  {t.name}
                  <span
                    onClick={() =>
                      setConfirmBox({ open: true, id: t.id, name: t.name })
                    }
                    className="cursor-pointer icon-s-1"
                  >
                    {Close}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:flex items-center gap-2 justify-end">
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
    </>
  )
}

export default Editable_TechCategory
