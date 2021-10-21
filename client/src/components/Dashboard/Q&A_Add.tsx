import React, { FC, PropsWithChildren, useState } from "react"
import { setQAndA } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import Button from "../UI/Button"
import Input from "../UI/Input"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import TextArea from "../UI/TextArea"

interface Props {
  /**
   * Choose either you want to add a new Q&A or you want to edit one
   * @property optional
   * @default "EDIT" is the default value for mode property
   */
  mode?: "ADD" | "EDIT"
}

const QAndA: FC<PropsWithChildren<Props>> = ({ mode = "EDIT" }) => {
  const dispatch = useTheDispatch()
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false)
  const [newQuestion, setNewQuestion] = useState<string>("")
  const [newAnswer, setNewAnswer] = useState<string>("")
  const closeModal = () => {
    setIsBoxOpen(prev => !prev)
  }
  const saveQuestion = () => {
    if (mode === "ADD") {
      dispatch(setQAndA({ question: newQuestion, answer: newAnswer }))
      console.log({ answer: newAnswer, question: newQuestion })
    } else {
      console.log({ answer: newAnswer, question: newQuestion })
    }
  }
  return (
    <>
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
