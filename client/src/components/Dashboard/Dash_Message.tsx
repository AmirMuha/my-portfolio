import React, { FC, PropsWithChildren, useEffect, useState } from "react"
import {
  useAnswerMessageMutation,
  useDeleteMessageMutation,
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Confirm from "../UI/Confirm"
import { Delete } from "../../icons/iconsJSX"
import InBoxLoading from "../UI/InBoxLoading"
import Input from "../UI/Input"
import Markdown from "../utility/Markdown"
import { MessageCreateInput } from "../../types/graphql-types"
import Modal from "../UI/Modal"
import TextArea from "../UI/TextArea"
import { createPortal } from "react-dom"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"

interface Props {
  data: MessageCreateInput
  refetch: () => void
  adminEmail: string
}

const Dash_Message: FC<PropsWithChildren<Props>> = ({
  adminEmail,
  data,
  refetch,
}) => {
  const [
    mutateAnswer,
    { error: answerMessageError, loading: answerMessageLoading },
  ] = useAnswerMessageMutation()
  const [
    mutateMessageDelete,
    {
      data: deleteMessageData,
      error: deleteMessageError,
      loading: deleteMessageLoading,
    },
  ] = useDeleteMessageMutation()
  const {
    isOpen: isAlertOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const [isConfirmBoxOpen, setIsConfirmBoxOpen] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isAnswerBoxOpen, setIsAnswerBoxOpen] = useState<boolean>(false)
  const [theSubject, setTheSubject] = useState<string>("")
  const [isAnswered, setIsAnswered] = useState<boolean>(
    data.answer_status || false
  )
  const [isTextOpen, setIsTextOpen] = useState<boolean>(true)
  const [theAnswer, setTheAnswer] = useState<string>(
    data.body || "## Enjoy using Markdown :)"
  )
  useAlertGraphqlError(deleteMessageError, deleteMessageLoading, setAlert)
  useAlertGraphqlError(answerMessageError, answerMessageLoading, setAlert)

  useEffect(() => {
    if (data && data.answer_status) {
      setIsAnswered(data.answer_status)
    }
  }, [data])

  const sendAnswer = () => {
    mutateAnswer({
      variables: {
        from: adminEmail,
        to: data.from,
        message: theAnswer,
        subject: theSubject,
        messageId: data.id!,
      },
    })
      .then(() => {
        setAlert({
          isOpen: true,
          title: "Success",
          message: "Answer successfully sent.",
        })
        setTheAnswer("")
        setTheSubject("")
        setIsAnswerBoxOpen(false)
        setIsOpen(false)
      })
      .catch(() => {})
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

  const deleteMessage = (v: boolean) => {
    if (v) {
      if (data.id) {
        mutateMessageDelete({
          variables: {
            id: data.id,
          },
        })
          .then(() => {
            setIsOpen(false)
            setAlert({
              isOpen: true,
              title: "Success",
              message: "Deleted the message successfully.",
            })
          })
          .catch(() => {})
      } else {
        setAlert({
          isOpen: true,
          title: "Error",
          message:
            "No id provided, please provide an id to delete the message.",
        })
      }
    }
  }

  return (
    <>
      {isAlertOpen && (
        <Alert
          backdrop
          cb={() => {
            if (deleteMessageData) {
              refetch()
            }
          }}
          header
          title={alertTitle}
          message={alertMessage}
          onClose={() => setAlert({ isOpen: false })}
        />
      )}
      {isConfirmBoxOpen && (
        <Confirm
          onClose={() => setIsConfirmBoxOpen(false)}
          header
          title={`Delete Message`}
          confirmButtonText="Delete"
          getValue={deleteMessage}
          text={`Are you sure you want to delete message With Subject: ${data.subject} and id of ${data.id} ?`}
        />
      )}
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
            <span className="ml-2 text-palatte-400 text-xs">
              {data.subject}
            </span>
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
                      <div className="ml-2 flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-bold text-sm ">Subject</span>
                          <span className="ml-2 text-palatte-400 text-xs">
                            {data.subject}
                          </span>
                        </div>
                        <div>
                          <button onClick={() => setIsConfirmBoxOpen(true)}>
                            {Delete}
                          </button>
                        </div>
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
                          {new Date(data.createdAd).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="ml-2 flex items-center">
                        <span className="font-bold text-sm">Status</span>
                        <span className="ml-2 bg-palatte-300 text-palatte-500 px-1 border-palatte-500 border text-xs">
                          {`${!isAnswered ? "not answered!" : "answered"}`}
                        </span>
                      </div>
                      {isAnswered && (
                        <div className="ml-2 flex items-center">
                          <span className="font-bold text-sm">Answered At</span>
                          <span className="ml-2 text-palatte-400 text-xs">
                            {new Date(data.answeredAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      )}
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
                    {answerMessageLoading && <InBoxLoading />}
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        sendAnswer()
                      }}
                    >
                      <div className="mb-3">
                        <Input
                          label="Subject"
                          color="200"
                          textColor="500"
                          getValue={v => setTheSubject(v)}
                          value={theSubject}
                          required
                          placeholder="Enter the subject of your email"
                          id="subject"
                          name="subject"
                        />
                      </div>
                      <span>Message</span>
                      <div className="flex sticky top-0 items-center gap-0">
                        <Button
                          normal
                          outline
                          type="button"
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
                          type="button"
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
                          required
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
                            type="submit"
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
                    </form>
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
    </>
  )
}

export default Dash_Message
