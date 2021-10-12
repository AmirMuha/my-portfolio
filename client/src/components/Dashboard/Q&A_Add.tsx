import React, { FC, PropsWithChildren, useState } from "react"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"

interface Props {}

const QAndA: FC<PropsWithChildren<Props>> = props => {
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false)

  return (
    <>
      {isBoxOpen && (
        <Modal
          onClose={() => setIsBoxOpen(prev => !prev)}
          header
          title="Add New Question AND Answer"
        ></Modal>
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
