import React, { FC, PropsWithChildren, useState } from "react"

import Button from "../UI/Button"
import Markdown from "../utility/Markdown"
import {
  MessageCreateInput
} from "../../types/graphql-types"
import Modal from "../UI/Modal"
import TextArea from "../UI/TextArea"
import { createPortal } from "react-dom"

interface Props {
  data: MessageCreateInput
}

const Dash_Message: FC<PropsWithChildren<Props>> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isAnswerBoxOpen, setIsAnswerBoxOpen] = useState<boolean>(false)
  const [isAnswered, setIsAnswered] = useState<boolean>(
    data.answer_status || false
  )
  const [isTextOpen, setIsTextOpen] = useState<boolean>(true)
  const [theAnswer, setTheAnswer] = useState<string>(
    data.body || "## Enjoy using Markdown :)"
  )
  const sendAnswer = () => {
    console.log(theAnswer)
    setIsAnswered(true)
  }
  const getAnswer = (v: string) => {
    setTheAnswer(v)
  }
  const openMessage = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
    setIsAnswerBoxOpen(false)
  }
  const closeAnswerBox = () => {
    setIsAnswerBoxOpen(false)
  }
  const answer = () => {
    setIsAnswerBoxOpen(true)
  }

  return (
    <div
      className="flex gap-0 ml-5 mb-10 messages--item"
      style={{ height: "fit-content" }}
    >
      <div className="flex-col w-full border-r-5 md:border-r-10 border-l-5 md:border-l-10 border-palatte-500 pt-5 relative">
        <div
          style={{ fontSize: 12 }}
          title={isAnswered ? "answered" : "not answered"}
          className={`${
            isAnswered ? "bg-palatte-200" : "bg-palatte-300"
          } text-palatte-500 border-palatte-500 border inline float-right mr-2 px-2`}
        >
          {`${!isAnswered ? "not answered!" : "answered"}`}
        </div>
        <div className="h-pipe-sm md:h-pipe-lg bg-palatte-500 w-full absolute top-0 left-0"></div>
        <div className="ml-2 flex items-center">
          <span className="font-bold text-sm">Subject</span>
          <span className="ml-2 text-palatte-400 text-xs">{data.subject}</span>
        </div>
        <div className="ml-2 flex items-center">
          <span className="font-bold text-sm">From</span>
          <span className="ml-2 text-palatte-400 text-xs">{data.from}</span>
        </div>
        <div className="ml-2 flex items-center mb-3">
          <span className="font-bold text-sm">Date</span>
          <span className="ml-2 text-palatte-400 text-xs">
            {new Date(data.createdAd).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        {isOpen &&
          createPortal(
            <div>
              <Modal
                containerStyle={{ padding: 0 }}
                header
                title="Message"
                onClose={close}
              >
                <div className="grid grid-cols-1 md:divide-x divide-palatte-500 divide-y md:divide-y-0 md:grid-cols-2">
                  <div className="self-start px-5 py-3">
                    <div className="ml-2 flex items-center">
                      <span className="font-bold text-sm">Subject</span>
                      <span className="ml-2 text-palatte-400 text-xs">
                        {data.subject}
                      </span>
                    </div>
                    <div className="ml-2 flex items-center">
                      <span className="font-bold text-sm">From</span>
                      <span className="ml-2 text-palatte-400 text-xs">
                        {data.from}
                      </span>
                    </div>
                    <div className="ml-2 flex items-center">
                      <span className="font-bold text-sm">Date</span>
                      <span className="ml-2 text-palatte-400 text-xs">
                        {new Date(data.createdAd).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="ml-2 flex items-center">
                      <span className="font-bold text-sm">Status</span>
                      <span className="ml-2 bg-palatte-300 text-palatte-500 px-1 border-palatte-500 border text-xs">
                        {`${!isAnswered ? "not answered!" : "answered"}`}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ maxHeight: "80vh" }}
                    className="px-5 py-4 overflow-scroll"
                  >
                    <div>
                      <h3 className="font-bold text-sm.6">Message</h3>
                      <p>{data.body}</p>
                    </div>
                    <div className="flex mt-3 items-center gap-2 justify-end">
                      <Button
                        normal
                        outline
                        borderColor="500"
                        textColor="100"
                        onClick={answer}
                        color="500"
                        className={`text-center`}
                      >
                        Answer
                      </Button>
                      <Button
                        onClick={close}
                        outline
                        normal
                        borderColor="500"
                        textColor="500"
                        color="100"
                        className={`text-center`}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </Modal>
              {isAnswerBoxOpen && (
                <Modal header title="Answer" onClose={closeAnswerBox}>
                  <div className="flex sticky top-0 items-center gap-0">
                    <Button
                      normal
                      outline
                      onClick={() => setIsTextOpen(true)}
                      color={isTextOpen ? "500" : "100"}
                      style={{ borderBottom: 0 }}
                      borderColor="500"
                      textColor={isTextOpen ? "100" : "500"}
                      className="flex-1 text-center"
                    >
                      Text
                    </Button>
                    <Button
                      normal
                      outline
                      style={{ borderBottom: 0 }}
                      onClick={() => setIsTextOpen(false)}
                      color={isTextOpen ? "100" : "500"}
                      borderColor="500"
                      textColor={isTextOpen ? "500" : "100"}
                      className="flex-1 text-center"
                    >
                      Preview
                    </Button>
                  </div>
                  {isTextOpen ? (
                    <TextArea
                      id="answer"
                      name="answer"
                      outline
                      rows={5}
                      borderColor="500"
                      getValue={getAnswer}
                      value={theAnswer}
                    />
                  ) : (
                    <div
                      style={{ minHeight: 150 }}
                      className="px-5 mb-3 py-3 border-palatte-500 border"
                    >
                      <Markdown>{theAnswer}</Markdown>
                    </div>
                  )}
                  <div className="pb-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Button
                        normal
                        outline
                        onClick={sendAnswer}
                        color="500"
                        borderColor="500"
                        textColor="100"
                        className="text-center"
                      >
                        Send
                      </Button>
                      <Button
                        normal
                        outline
                        onClick={() => setIsAnswerBoxOpen(false)}
                        color="100"
                        borderColor="500"
                        textColor="500"
                        className="text-center"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </Modal>
              )}
            </div>,
            document.body
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
            Read
          </Button>
          <div className="flex h-pipe-sm md:h-pipe-lg bg-palatte-500 w-7"></div>
        </div>
      </div>
    </div>
  )
}

export default Dash_Message
