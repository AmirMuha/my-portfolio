import { Delete, DropDown } from "../../icons/iconsJSX"
import Editable, { QAndAEditTypes } from "../Dashboard/Editable"
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react"
import {
  deleteQuestionReducer,
  updateQuestionReducer,
} from "../../store/editProject"
import { deleteReducer, setQAndA } from "../../store/newProjectSlice"
import {
  useDeleteQuestionMutation,
  useUpdateQuestionMutation,
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Confirm from "../UI/Confirm"
import Markdown from "../utility/Markdown"
import SmallPipe from "../UI/SmallPipe"
import gsap from "gsap"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"
import { useTheDispatch } from "../../store/store"

interface Props {
  editable?: boolean
  data: GatsbyTypes.Portfolio_Question
  mode?: "ADD" | "EDIT"
}

const QAndA: FC<PropsWithChildren<Props>> = ({
  data,
  editable = false,
  mode = "EDIT",
}) => {
  const dispatch = useTheDispatch()
  const {
    isOpen: isAlertOpen,
    message: alertMessage,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const dropdownRef = useRef<HTMLButtonElement>()
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const [
    mutateUpdate,
    { error: updateQuestionError, loading: updateQuestionLoading },
  ] = useUpdateQuestionMutation()
  const [
    mutateDelete,
    { error: deleteQuestionError, loading: deleteQuestionLoading },
  ] = useDeleteQuestionMutation()
  useAlertGraphqlError(updateQuestionError, updateQuestionLoading, setAlert)
  useAlertGraphqlError(deleteQuestionError, deleteQuestionLoading, setAlert)

  const controlDropDown = useCallback(() => {
    if (dropdownRef.current) {
      if (!isAnswerOpen) {
        gsap.fromTo(
          dropdownRef.current,
          {
            rotateZ: 0,
          },
          {
            rotateZ: 180,
          }
        )
      } else {
        gsap.fromTo(
          dropdownRef.current,
          { rotateZ: 180 },
          {
            rotateZ: 0,
          }
        )
      }
    }
    setIsAnswerOpen(prev => !prev)
  }, [isAnswerOpen])

  const updateQAndA = (v: QAndAEditTypes) => {
    if (!v.question || !v.answer) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: `${v.answer ? "Answer" : "Question"} is required.`,
      })
      return
    }
    if (mode === "ADD") {
      dispatch(
        setQAndA({ question: v.question, answer: v.answer, id: data.id })
      )
    } else {
      mutateUpdate({
        variables: {
          id: data.id,
          question: v.question,
          answer: v.answer,
        },
      })
        .then(() => {
          dispatch(
            updateQuestionReducer({
              id: data.id,
              question: v.question,
              answer: v.answer,
            })
          )
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Updated the question successfully.",
          })
        })
        .catch(() => {})
    }
  }

  const deleteQAndA = (v: boolean) => {
    if (v) {
      if (mode === "ADD") {
        dispatch(deleteReducer({ id: data.id, field: "questions" }))
      } else {
        mutateDelete({
          variables: {
            id: data.id,
          },
        })
          .then(() => {
            setAlert({
              isOpen: true,
              title: "Success",
              message: "Deleted the question successfully.",
            })
            dispatch(
              deleteQuestionReducer({
                id: data.id,
              })
            )
          })
          .catch(() => {})
      }
    }
  }
  return (
    <>
      {isAlertOpen && (
        <Alert
          backdrop
          header
          title={alertTitle}
          message={alertMessage}
          position="TOP"
          onClose={() =>
            setAlert({
              isOpen: false,
            })
          }
          autoClose={5}
        />
      )}
      {editable ? (
        <div className="flex justify-start gap-0">
          <div className="flex-col mr-20">
            <SmallPipe pipeStyle={{ width: 28 }}>
              <button
                onClick={controlDropDown}
                className="relative flex items-center justify-between py-2 pr-6 text-left"
              >
                <p className="mt-0 mb-0 ml-3 mr-0 font-semibold">
                  {data.question}
                </p>
                <div
                  ref={dropdownRef as any}
                  className="absolute right-0 transform origin-center top-4"
                >
                  {DropDown}
                </div>
              </button>
            </SmallPipe>
            {isAnswerOpen && (
              <div className="p-5 mt-0 mb-3 ml-6 mr-0 overflow-hidden bg-palatte-200">
                <Markdown>{data.answer}</Markdown>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="absolute right-0 flex items-center top-2 gap-5">
              <Editable
                editButtonStyle={{
                  position: "initial",
                }}
                mode="MODAL"
                title={`Editing Question With ID ${data.id}`}
                onSave={v => updateQAndA(v)}
                value={data}
                QAndA
              />
              <span
                className="cursor-pointer"
                onClick={() => setIsConfirmOpen(true)}
              >
                {Delete}
              </span>
            </div>
            {isConfirmOpen && (
              <Confirm
                text={`Do your realy want to delete this question with id of ${data.id} ?`}
                getValue={deleteQAndA}
                confirmButtonText="Delete"
                title="Deleting FrontEnd"
                onClose={() => setIsConfirmOpen(false)}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex-col mr-5">
          <SmallPipe pipeStyle={{ width: 28 }}>
            <button
              onClick={controlDropDown}
              className="relative flex items-center justify-between py-2 pr-6 text-left"
            >
              <p className="mt-0 mb-0 ml-3 mr-0 font-semibold">
                {data.question}
              </p>
              <div
                ref={dropdownRef as any}
                className="absolute transform origin-center top-4.5 right-0"
              >
                {DropDown}
              </div>
            </button>
          </SmallPipe>
          {isAnswerOpen && (
            <div className="p-5 mt-0 mb-3 ml-6 mr-0 overflow-hidden bg-palatte-200">
              <Markdown>{data.answer}</Markdown>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default QAndA
