import Input, { File } from "../UI/Input"
import React, { FC, PropsWithChildren, useCallback, useState } from "react"
import {
  useCreateMessageMutation,
  useUploadFilesMutation
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import TextArea from "../UI/TextArea"
import insta from "../../images/Instagram.png"
import linkedin from "../../images/LinkedIn.png"
import skype from "../../images/Skype.png"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"
import whatsapp from "../../images/WhatsApp.png"

interface Props {
  className?: string
  id?: string
  adminEmail: string
}

const ContactMe: FC<PropsWithChildren<Props>> = ({ adminEmail }) => {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [files, setFiles] = useState<File[]>()
  const [fileName, setFileName] = useState<string>("")
  const {
    isOpen: isAlertOpen,
    message: alertMessage,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const [
    mutateUploadFiles,
    { error: uploadFilesError, loading: uploadFilesLoading },
  ] = useUploadFilesMutation()
  const [
    mutateNewMessage,
    { error: createMessageError, loading: createMessageLoading },
  ] = useCreateMessageMutation()
  useAlertGraphqlError(createMessageError, createMessageLoading, setAlert)
  useAlertGraphqlError(uploadFilesError, uploadFilesLoading, setAlert)

  const unknownError = () => {
    setAlert({
      isOpen: true,
      title: "Error",
      message: "Unknown Error: Something went wrong, please try again later.",
    })
  }

  const sendTheMessage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!email || !message || !subject) {
        setAlert({
          isOpen: true,
          message: `${
            !email ? "Email" : !message ? "Message" : "Subject"
          } is required, please fill in.`,
        })
        return
      }
      console.log({
        email,
        message,
        subject,
        files,
      })
      if (files) {
        mutateUploadFiles({
          variables: {
            files,
          },
        }).then(res => {
          if (res.data && res.data.uploadMultipleFiles) {
            mutateNewMessage({
              variables: {
                adminEmail: adminEmail,
                files: res.data.uploadMultipleFiles,
                body: message,
                subject: subject,
                from: email,
              },
            })
              .then(() => {
                setAlert({
                  isOpen: true,
                  title: "Success",
                  message:
                    "Message sent successfully. I'll catch up as soon as I read the email.",
                })
              })
              .catch(() => {})
          } else {
            unknownError()
          }
        })
      } else {
        mutateNewMessage({
          variables: {
            adminEmail: adminEmail,
            body: message,
            subject: subject,
            from: email,
          },
        })
          .then(() => {
            setAlert({
              isOpen: true,
              title: "Success",
              message:
                "Message sent successfully. I'll catch up as soon as I read the email.",
            })
          })
          .catch(() => {})
      }
    },
    [email, message, files]
  )

  return (
    <>
      {isAlertOpen && (
        <Alert
          backdrop
          title={alertTitle}
          message={alertMessage}
          header
          onClose={() => setAlert({ isOpen: false })}
          position="TOP"
        />
      )}
      <div className="grid lg:grid-cols-2 mb-3">
        <div className="mx-10">
          <form onSubmit={sendTheMessage}>
            <Input
              required
              color="200"
              textColor="500"
              id="subject"
              name="subject"
              label="Subject*"
              value={subject}
              getValue={v => setSubject(v)}
            />
            <Input
              color="200"
              textColor="500"
              id="email"
              required
              name="email"
              label="Email*"
              value={email}
              getValue={v => setEmail(v)}
            />
            <TextArea
              label="Message*"
              color="200"
              textColor="500"
              id="message"
              rows={8}
              name="message"
              value={message}
              required
              getValue={v => setMessage(v)}
            />
            <Input
              type="file"
              multiple
              label="Attach Some Files"
              buttonTitle="Choose Files"
              id="files"
              name="files"
              getValue={(v, f) => {
                setFiles(f)
                setFileName(v)
              }}
              value={fileName}
            />
            <Button
              color="500"
              normal
              type="submit"
              textColor="100"
              style={{ padding: "8px 0 8px 0" }}
              className="my-2 py-2 w-full"
            >
              Send
            </Button>
          </form>
        </div>
        <div className="mx-10 mt-5">
          <h2 className="text-md font-bold">Me On Social Media</h2>
          <div
            style={{ maxHeight: "min-content" }}
            className="grid-cols-1 sm:grid-cols-2 grid items-start justify-center gap-1 lg:grid-cols-1"
          >
            <Button
              toUrl="https://google.com"
              style={{ padding: "6px 8px" }}
              className="w-full"
              color="100"
              borderColor="500"
              textColor="500"
              outline
              fill
            >
              <span className="flex items-center">
                <img
                  placeholder="none"
                  className="mx-3"
                  src={whatsapp}
                  alt="WhatsApp Icon"
                />
                <span>+98-9158964046</span>
              </span>
            </Button>
            <Button
              toUrl="https://google.com"
              style={{ padding: "6px 8px" }}
              className="w-full"
              color="100"
              borderColor="500"
              textColor="500"
              outline
              fill
            >
              <span className="flex items-center ">
                <img
                  placeholder="none"
                  className="mx-3"
                  src={skype}
                  alt="Skype Icon"
                />
                <span>mirzaii4046@gmail.com</span>
              </span>
            </Button>
            <Button
              toUrl="https://google.com"
              style={{ padding: "6px 8px" }}
              className="w-full"
              color="100"
              borderColor="500"
              textColor="500"
              outline
              fill
            >
              <span className="flex items-center ">
                <img
                  placeholder="none"
                  className="mx-3"
                  src={insta}
                  alt="Instagram Icon"
                />
                <span>Instagram</span>
              </span>
            </Button>
            <Button
              toUrl="https://google.com"
              style={{ padding: "6px 8px" }}
              className=" w-full"
              color="100"
              borderColor="500"
              textColor="500"
              outline
              fill
            >
              <span className="flex items-center ">
                <img
                  placeholder="none"
                  className="mx-3"
                  src={linkedin}
                  alt="LinkedIn Icon"
                />
                <span>LinkedIn</span>
              </span>
            </Button>
            <div className="mt-5">
              <h2 className="text-md font-bold">Not Happy Yet ?</h2>
              <p>
                <span className="font-bold">Email #1:</span>
                <span className="underline text-center inline">
                  <a
                    href="mailto:mirzaii4046@gmail.com"
                    className="font-extra-light mx-4"
                  >
                    mirzaii4046@gmail.com
                  </a>
                </span>
              </p>
              <p>
                <span className="font-bold">Email #2:</span>
                <span className="underline text-center inline">
                  <a
                    href="mailto:mirzaii4046@gmail.com"
                    className="font-extra-light mx-4"
                  >
                    am.mirzaeirad@yahoo.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(ContactMe)
