import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react"
import { Delete, DropDown } from "../../icons/iconsJSX"
import SmallPipe from "../UI/SmallPipe"
import gsap from "gsap"
import Confirm from "../UI/Confirm"
import Editable, { QAndAEditTypes } from "../Dashboard/Editable"
import Markdown from "../utility/Markdown"
import { setQAndA } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
interface Props {
  editable?: boolean
  data: GatsbyTypes.Portfolio_Question
}

const QAndA: FC<PropsWithChildren<Props>> = ({ data, editable = false }) => {
  console.log(data)
  const dispatch = useTheDispatch()
  const dropdownRef = useRef<HTMLButtonElement>()
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
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
    dispatch(setQAndA({ question: v.question, answer: v.answer, id: data.id }))
    console.log("updating the Q&A ... \n", v)
  }
  const deleteQAndA = (v: boolean) => {
    console.log(v ? "deleting Q&A" : "didn't delete")
  }
  return (
    <>
      {editable ? (
        <div className="flex gap-0 justify-start">
          <div className="flex-col mr-20">
            <SmallPipe pipeStyle={{ width: 28 }}>
              <button
                onClick={controlDropDown}
                className="flex py-2 relative items-center pr-6 text-left justify-between"
              >
                <p className="ml-3 mt-0 mr-0 mb-0 font-semibold">
                  {data.question}
                </p>
                <div
                  ref={dropdownRef as any}
                  className="absolute transform origin-center top-4 right-0"
                >
                  {DropDown}
                </div>
              </button>
            </SmallPipe>
            {isAnswerOpen && (
              <div className="p-5 ml-6 mt-0 mr-0 bg-palatte-200 overflow-hidden mb-3">
                <Markdown>
                  {data.answer.answer ? data.answer.answer : data.answer}
                </Markdown>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="absolute top-2 right-0 flex gap-5 items-center">
              <Editable
                editButtonStyle={{
                  position: "initial",
                }}
                mode="MODAL"
                title={`Editing Question With ID ${data.id}`}
                onSave={v => updateQAndA(v)}
                value={data.question}
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
              className="flex py-2 relative items-center pr-6 text-left justify-between"
            >
              <p className="ml-3 mt-0 mr-0 mb-0 font-semibold">
                {data.question}
              </p>
              <div
                ref={dropdownRef as any}
                className="absolute transform origin-center  top-3 right-0"
              >
                {DropDown}
              </div>
            </button>
          </SmallPipe>
          {isAnswerOpen && (
            <div className="p-5 ml-6 mt-0 mr-0 bg-palatte-200 overflow-hidden mb-3">
              <Markdown>
                {data.answer.answer ? data.answer.answer : data.answer}
              </Markdown>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default QAndA
