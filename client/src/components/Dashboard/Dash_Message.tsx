import React, { FC, PropsWithChildren, useState } from "react"
import Button from "../UI/Button"

interface Props {}

const Dash_Message: FC<PropsWithChildren<Props>> = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRead, setIsRead] = useState<boolean>(false)
  const openMessage = () => {
    setIsOpen(prev => !prev)
    setIsRead(true) // also change it on the database
  }
  return (
    <div
      className="flex gap-0 ml-5 mb-10 messages--item"
      style={{ height: "fit-content" }}
    >
      <div className="flex-col w-full border-r-5 md:border-r-10 border-l-5 md:border-l-10 border-palatte-500 pt-5 relative">
        {!isRead && (
          <div
            style={{ fontSize: 12 }}
            title="unread"
            className="bg-palatte-300 text-palatte-500 border-palatte-500 border inline float-right mr-2 px-2"
          >
            unread
          </div>
        )}
        <div className="h-pipe-sm md:h-pipe-lg bg-palatte-500 w-full absolute top-0 left-0"></div>
        <div className="ml-2 flex items-center">
          <span className="font-bold text-sm">Subject</span>
          <span className="ml-2 text-palatte-400 text-xs">EMAIL_SUBJECT</span>
        </div>
        <div className="ml-2 flex items-center">
          <span className="font-bold text-sm">From</span>
          <span className="ml-2 text-palatte-400 text-xs">
            sfdsdmirzaii@gmail.com
          </span>
        </div>
        <div className="ml-2 flex items-center mb-3">
          <span className="font-bold text-sm">Date</span>
          <span className="ml-2 text-palatte-400 text-xs">20 Aug 2021</span>
        </div>
        {isOpen && (
          <>
            <div className="flex items-center">
              <div className="flex h-pipe-sm md:h-pipe-lg bg-palatte-500 w-1/2"></div>
              <h3 className="font-bold ml-2 text-sm">Message</h3>
            </div>
            <p className="p-5 text-palatte-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, necessitatibus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Maiores eos illo eligendi
              cupiditate, aliquid consequatur obcaecati nam nesciunt.
            </p>
          </>
        )}
        <div className="flex items-end">
          <div className="flex h-pipe-sm md:h-pipe-lg bg-palatte-500 w-6"></div>
          <Button
            outline
            normal
            borderColor="500"
            textColor="500"
            color="100"
            fill
            onClick={openMessage}
            className="w-full flex-1 text-center -mb-3.5"
          >
            {!isOpen ? "Read" : "Close"}
          </Button>
          <Button
            normal
            outline
            borderColor="500"
            textColor="100"
            color="500"
            className={`${
              isOpen ? "" : "hidden"
            } w-full text-center flex-1 -mb-3.5`}
          >
            Answer
          </Button>
          <div className="flex h-pipe-sm md:h-pipe-lg bg-palatte-500 w-7"></div>
        </div>
      </div>
    </div>
  )
}

export default Dash_Message
