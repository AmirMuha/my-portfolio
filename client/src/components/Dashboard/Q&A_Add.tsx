import React, { FC, PropsWithChildren, useState } from "react"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Input from "../UI/Input"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import TextArea from "../UI/TextArea"
import { addNewQuestionReducer } from "../../store/editProject"
import { setQAndA } from "../../store/newProjectSlice"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from '../../util/useAlertGraphqlError'
import {
  useCreateQuestionMutation
} from "../../types/graphql-types"
import { useTheDispatch } from "../../store/store"

interface Props {
  mode?: "ADD" | "EDIT"
  projectId?: string
}

const QAndA: FC<PropsWithChildren<Props>> = ({ projectId, mode = "EDIT" }) => {
  const dispatch = useTheDispatch()
  const {
    isOpen: isAlertOpen,
    message: alertMessage,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const [mutateNewQuestion, {error: createQuestionError, loading: createQuestionLoading}] =useCreateQuestionMutation()
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false)
  const [newQuestion, setNewQuestion] = useState<string>("")
  const [newAnswer, setNewAnswer] = useState<string>("")
  useAlertGraphqlError(createQuestionError, createQuestionLoading, setAlert)

  const closeModal = () => {
    setIsBoxOpen(prev => !prev)
  }
  const createSuccessMessage = () => {
    setAlert({
      isOpen: true,
      title: "Success",
      message: "Added new Q&A successfully."
    })
    setNewQuestion("")
    setNewAnswer("")
  }

  const saveQuestion = () => {
    if(!newQuestion || !newAnswer) {
      setAlert({
        isOpen: true,
        title: "Error",
        message:"Question and Answer fields are required."
      })
      return
    }
    if (mode === "ADD") {
      dispatch(setQAndA({ question: newQuestion, answer: newAnswer }))
      createSuccessMessage ()
    } else {
      mutateNewQuestion({
        variables: {
          projectId: projectId!,
          question: newQuestion,
          answer: newAnswer,
        },
      })
        .then(res => {
          if(res.data) {
            dispatch(
              addNewQuestionReducer({
                id: res.data.createQuestion.id,
                question: res.data.createQuestion.question,
                answer: res.data.createQuestion.answer,
              })
            )
            createSuccessMessage ()
          } else {
            setAlert({
              isOpen:true,
              title: "Error",
              message: "Unknow Error: Something went wrong."
            })
          }
        })
        .catch(() => {
        })
    }
  }

  return (
    <>
      {isAlertOpen && (
        <Alert
          header
          title={alertTitle}
          onClose={() => setAlert({ isOpen: false })}
          message={alertMessage}
          backdrop
          position="TOP"
          autoClose={5}
        />
      )}
      {isBoxOpen && (
        <Modal onClose={closeModal} header title="Add New Question AND Answer">
        <form onSubmit={e => {
          e.preventDefault();
          saveQuestion()
          closeModal()
        }}>
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
              type="submit"
              borderColor="500"
              color="100"
              textColor="500"
            >
              Close
            </Button>
            <Button type="submit" normal >
              Save
            </Button>
          </div>
          </form>
        </Modal>
      )}
      <SmallPipe className="mb-3">
        <Button
          onClick={() => setIsBoxOpen(prev => !prev)}
          normal
          className="w-full"
          outline
        >
          Add New Q&A
        </Button>
      </SmallPipe>
    </>
  )
}

export default QAndA
