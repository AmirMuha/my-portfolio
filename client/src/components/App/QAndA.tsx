import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react"
import { DropDown } from "../../icons/iconsJSX"
import SmallPipe from "../UI/SmallPipe"
import gsap from "gsap"
interface Props {
  editable?: boolean
}

const QAndA: FC<PropsWithChildren<Props>> = ({ editable = false }) => {
  const dropdownRef = useRef<HTMLButtonElement>()
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)
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
  return (
    <div className="flex-col mr-5">
      <SmallPipe pipeStyle={{ width: 28 }}>
        <button
          onClick={controlDropDown}
          className="flex py-2 relative items-center pr-6 text-left justify-between"
        >
          <p className="ml-3 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ?
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
        <p className="p-5 ml-6 bg-palatte-200 overflow-hidden mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque
          obcaecati aut ut quas, odit perspiciatis, facere, quaerat excepturi
          maxime assumenda. Perspiciatis provident laudantium aperiam molestiae
          harum eos tempore sint.
        </p>
      )}
    </div>
  )
}

export default QAndA
