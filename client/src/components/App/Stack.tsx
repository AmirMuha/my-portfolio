import React, { FC, PropsWithChildren, useState } from "react"
import { JS, NodeJS, ReactJS, TS, VueJS } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import Confirm from "../UI/Confirm"
import Input, { File } from "../UI/Input"
import SmallPipe from "../UI/SmallPipe"

interface Props {
  style?: React.CSSProperties
  className?: string
  editable?: boolean
}

const Stack: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  editable = false,
}) => {
  const [newStackImageUrl, setNewStackImageUrl] = useState<string>("")
  const [newStackImageFile, setNewStackImageFile] = useState<File>()
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState({
    isOpen: false,
    id: "",
  })
  const deleteStackItem = (d: boolean, id: string) => {
    if (d) {
      console.log("Deleting the stack item with id %s", id)
    }
  }
  return (
    <>
      {editable ? (
        <div>
          <SmallPipe className="flex w-full items-center mb-3">
            <div className="flex-grow">
              <Input
                color="200"
                value={newStackImageUrl}
                id="new-stack"
                name="new-stack"
                type="url"
                placeholder="Enter The Image Url"
                getValue={v => setNewStackImageUrl(v)}
              />
            </div>
            <Button normal className="text-sm.2" outline>
              save
            </Button>
          </SmallPipe>
          <SmallPipe className="flex w-full items-center my-3">
            <div className="flex-grow">
              <Input
                color="200"
                value={newStackImageFile}
                id="new-stack"
                name="new-stack"
                type="file"
                buttonTitle="Choose New Stack Image"
                getValue={v => setNewStackImageFile(v)}
              />
            </div>
            <Button normal className="text-sm.2" outline>
              save
            </Button>
          </SmallPipe>
          <div
            style={{ width: "100vw" }}
            className="bg-palatte-500 w-full pb-2 pt-3"
          >
            <ul className="flex stack px-3 items-center gap-2">
              <li title="Delete TypeScript">
                <button
                  onClick={() =>
                    setIsConfirmDeleteOpen({ isOpen: true, id: "1" })
                  }
                >
                  {TS}
                </button>
              </li>
              <li title="Delete JavaScript">
                <button
                  onClick={() =>
                    setIsConfirmDeleteOpen({ isOpen: true, id: "2" })
                  }
                >
                  {JS}
                </button>
              </li>
              <li title="Delete NodeJS">
                <button
                  onClick={() =>
                    setIsConfirmDeleteOpen({ isOpen: true, id: "4" })
                  }
                >
                  {NodeJS}
                </button>
              </li>
              <li title="Delete ReactJS">
                <button
                  onClick={() =>
                    setIsConfirmDeleteOpen({ isOpen: true, id: "5" })
                  }
                >
                  {ReactJS}
                </button>
              </li>
              <li title="Delete VueJS">
                <button
                  onClick={() =>
                    setIsConfirmDeleteOpen({ isOpen: true, id: "6" })
                  }
                >
                  {VueJS}
                </button>
              </li>
            </ul>
            {isConfirmDeleteOpen.isOpen && (
              <Confirm
                header
                title={`Deleting Stack Item`}
                text="Are you sure you want to delete NodeJS Stack Item ?"
                getValue={v => deleteStackItem(v, isConfirmDeleteOpen.id)}
                onClose={() =>
                  setIsConfirmDeleteOpen({ isOpen: false, id: "" })
                }
              ></Confirm>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{ width: "100vw" }}
          className="bg-palatte-500 w-full pb-2 pt-3"
        >
          <ul className="flex px-3 stack items-center gap-2">
            <li title="TypeScript">{TS}</li>
            <li title="JavaScript">{JS}</li>
            <li title="NodeJS">{NodeJS}</li>
            <li title="ReactJS">{ReactJS}</li>
            <li title="VueJS">{VueJS}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Stack
