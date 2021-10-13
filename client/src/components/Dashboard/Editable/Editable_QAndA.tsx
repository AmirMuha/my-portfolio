import React, { FC, PropsWithChildren, useState } from "react"
import Button from "../../UI/Button"
import Input from "../../UI/Input"
import Modal from "../../UI/Modal"
import TextArea from "../../UI/TextArea"
import Markdown from "../../utility/Markdown"

interface Props {
  title: string
  onSave: (v: any) => void
  onClose: () => void
}

const Editable_QAndA: FC<PropsWithChildren<Props>> = ({
  title,
  onSave,
  onClose,
}) => {
  // const [newAnswer, setNewAnswer] = useState<string>("")
  const [newQuestion, setNewQuestion] = useState<string>("")
  const [isTextOpen, setIsTextOpen] = useState<boolean>(true)

  const [newAnswer, setNewAnswer] = useState<string>(
    "## Enjoy using Markdown :)"
  )
  const getAnswer = (v: string) => {
    setNewAnswer(v)
  }
  const sendBackQAndA = () => {
    onSave({ question: newQuestion, answer: newAnswer })
    onClose()
  }

  return (
    <Modal title={title} onClose={onClose} header>
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
      <p className="mt-3 text-palatte-500">Answer</p>
      <div className="flex sticky top-0 items-center gap-0">
        <Button
          normal
          outline
          onClick={() => setIsTextOpen(true)}
          color={isTextOpen ? "500" : "100"}
          borderColor="500"
          textColor={isTextOpen ? "100" : "500"}
          className="flex-1 text-center"
        >
          Text
        </Button>
        <Button
          normal
          outline
          onClick={() => setIsTextOpen(false)}
          color={isTextOpen ? "100" : "500"}
          borderColor="500"
          textColor={isTextOpen ? "500" : "100"}
          className="flex-1 text-center"
        >
          Preview
        </Button>
      </div>
      <div className="mb-3">
        {isTextOpen ? (
          <TextArea
            id="answer"
            name="answer"
            outline
            rows={5}
            borderColor="500"
            textColor="500"
            getValue={getAnswer}
            value={newAnswer}
          />
        ) : (
          <div
            style={{ minHeight: 150 }}
            className="px-5 py-3 border-palatte-500 border"
          >
            <Markdown>{newAnswer}</Markdown>
          </div>
        )}
      </div>
      {/* <TextArea
        id="new-answer"
        label="Answer"
        color="200"
        required
        rows={10}
        style={{ resize: "none" }}
        textColor="500"
        value={newAnswer}
        getValue={v => setNewAnswer(v)}
      /> */}
      <div className="flex items-center gap-2 justify-end">
        <Button
          normal
          outline
          borderColor="500"
          color="100"
          textColor="500"
          onClick={onClose}
        >
          Close
        </Button>
        <Button normal onClick={sendBackQAndA}>
          Save
        </Button>
      </div>
    </Modal>
  )
}

export default Editable_QAndA
