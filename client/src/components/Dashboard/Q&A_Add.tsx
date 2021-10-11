import React, { FC, PropsWithChildren } from "react"
import Button from "../UI/Button"
import SmallPipe from "../UI/SmallPipe"

interface Props {}

const QAndA: FC<PropsWithChildren<Props>> = props => {
  return (
    <>
      <SmallPipe className="mb-3">
        <Button normal className="w-full" outline>
          Add New Q&A
        </Button>
      </SmallPipe>
    </>
  )
}

export default QAndA
