import { useMutation } from "@apollo/client"
import React, { FC, PropsWithChildren, useState } from "react"
import { addNewQuestionReducer } from "../../store/editProject"
import { setQAndA } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import { CreateQuestionMutation } from "../../util/mutations"
import { useAlert } from "../../util/useAlert"
import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Input from "../UI/Input"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import TextArea from "../UI/TextArea"

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
  const [mutateNewQuestion] = useMutation(CreateQuestionMutation)
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false)
  const [newQuestion, setNewQuestion] = useState<string>("")
  const [newAnswer, setNewAnswer] = useState<string>("")
  const closeModal = () => {
    setIsBoxOpen(prev => !prev)
  }
  const saveQuestion = () => {
    if (mode === "ADD") {
      dispatch(setQAndA({ question: newQuestion, answer: newAnswer }))
    } else {
      mutateNewQuestion({
        variables: {
          projectId: projectId,
          question: newQuestion,
          answer: newAnswer,
        },
      })
        .then(res => {
          dispatch(
            addNewQuestionReducer({
              id: res.data.createQuestion.id,
              question: res.data.createQuestion.question,
              answer: res.data.createQuestion.answer.answer,
              answerId: res.data.createQuestion.answer.id,
            })
          )
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Created a new Q&A successfully.",
          })
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            message: e.errors
              ? e.errors[0].message
              : e.message || "Couldn't create a new Q&A.",
            title: "Error",
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
          onClose={() => setAlert({ isOpen: false })}
          message={alertMessage}
          backdrop
          position="TOP"
          autoClose={5}
        />
      )}
      {isBoxOpen && (
        <Modal onClose={closeModal} header title="Add New Question AND Answer">
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
              onClick={closeModal}
            >
              Close
            </Button>
            <Button normal onClick={saveQuestion}>
              Save
            </Button>
          </div>
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
