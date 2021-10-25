import { useMutation } from "@apollo/client"
import React, { CSSProperties, FC, useState } from "react"
import { Delete } from "../../icons/iconsJSX"
import {
  deleteTechCategoryReducer,
  deleteTechReducer,
  updateTechCategoryReducer,
} from "../../store/editProject"
import { setTechReducer } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import {
  DeleteTechCategoryMutation,
  DeleteTechMutation,
  UpdateTechCategoryMutation,
} from "../../util/mutations"
import { useAlert } from "../../util/useAlert"
import Editable from "../Dashboard/Editable"
import { TechState } from "../Dashboard/Editable/Editable_TechCategory"
import Alert from "../UI/Alert"
import Confirm from "../UI/Confirm"
import SmallPipe from "../UI/SmallPipe"
interface Props {
  data: GatsbyTypes.Portfolio_TechCategory
  className?: string
  style?: CSSProperties
  border?: boolean
  editable?: boolean
  mode?: "ADD" | "EDIT"
}
const TechItem: FC<Props> = ({
  editable = false,
  border = true,
  style,
  data,
  className = "",
  mode = "EDIT",
}) => {
  const dispatch = useTheDispatch()
  const {
    message: alertMessage,
    isOpen: alertIsOpen,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const dispatchTechCategory = useTheDispatch()
  const [mutateDeleteTechCategory] = useMutation(DeleteTechCategoryMutation)
  const [mutateDeleteTech] = useMutation(DeleteTechMutation)
  const [mutateUpdate] = useMutation(UpdateTechCategoryMutation)
  const openConfirm = () => {
    setIsConfirmOpen(true)
  }
  const deleteTechCategory = (v: boolean) => {
    if (v) {
      mutateDeleteTechCategory({
        variables: {
          id: data.id,
        },
      })
        .then(res => {
          dispatchTechCategory(
            deleteTechCategoryReducer({
              id: data.id,
            })
          )
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Something went wrong, Couldn't delete tech category.",
          })
        })
    }
  }
  const deleteTech = (id: string) => {
    mutateDeleteTech({
      variables: {
        id,
      },
    })
      .then(res => {
        dispatchTechCategory(
          deleteTechReducer({
            techCategoryId: data.id,
            techId: id,
          })
        )
        setAlert({
          isOpen: true,
          title: "Success",
          message: "Deleted tech successfully.",
        })
      })
      .catch(e => {
        setAlert({
          isOpen: true,
          title: "Error",
          message: e.errors
            ? e.errors[0].message
            : e.message ||
              "Something went wrong, Couldn't delete tech category.",
        })
      })
  }
  const updateTech = (v: TechState) => {
    if (mode === "ADD") {
      dispatch(setTechReducer(v))
    } else if (mode === "EDIT") {
      mutateUpdate({
        variables: {
          techCategoryId: data.id,
          name: v.name,
        },
      })
        .then(res => {
          dispatchTechCategory(
            updateTechCategoryReducer({
              id: res.data.updateTechCategory.id,
              name: v.name,
            })
          )
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Updated tech category successfully.",
          })
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Something went wrong, Couldn't update tech category.",
          })
        })
    }
  }
  return (
    <>
      {alertIsOpen && (
        <Alert
          header
          backdrop
          title={alertTitle}
          message={alertMessage}
          onClose={() => setAlert({ isOpen: false })}
          autoClose={5}
        />
      )}
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
                  type={mode}
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
            data.techs.map((t, i) => (
              <li
                key={t.id ? t.id : i}
                className="inline-flex bg-palatte-200 px-2 m-1"
              >
                {t.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default TechItem
