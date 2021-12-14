import Input, { File } from "../UI/Input"
import React, { FC, PropsWithChildren, useCallback, useState } from "react"
import {
  useCreateMessageMutation,
  useUploadFilesToZipMutation,
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
  whatsappNumber: string
  skypeUrl: string
  linkedInUrl: string
  instagramUrl: string
  className?: string
  id?: string
  adminEmail: string
}

const ContactMe: FC<PropsWithChildren<Props>> = ({
  adminEmail,
  whatsappNumber,
  instagramUrl,
  skypeUrl,
  linkedInUrl,
}) => {
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
  ] = useUploadFilesToZipMutation()
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
      if (files) {
        mutateUploadFiles({
          variables: {
            files,
          },
        }).then(res => {
          if (res.data && res.data.uploadFilesToZip) {
            mutateNewMessage({
              variables: {
                adminEmail: adminEmail,
                files: res.data.uploadFilesToZip,
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
                setMessage("")
                setSubject("")
                setEmail("")
                setFiles(undefined)
                setFileName("")
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
            files: "",
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
      <div className="mb-3 grid lg:grid-cols-2">
        <div className="ml-5 lg:mx-10">
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
              className="w-full py-2 my-2"
            >
              Send
            </Button>
          </form>
        </div>
        <div className="mx-10 mt-5">
          <h2 className="font-bold text-md">Me On Social Media</h2>
          <div
            style={{ maxHeight: "min-content" }}
            className="items-start justify-center grid-cols-1 sm:grid-cols-2 grid gap-1 lg:grid-cols-1"
          >
            <Button
              toUrl={`https://wa.me/${whatsappNumber}`}
              style={{ padding: "6px 8px" }}
              className="w-full overflow-hidden"
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
                <span>WhatsApp</span>
              </span>
            </Button>
            <Button
              toUrl={skypeUrl}
              style={{ padding: "6px 8px" }}
              className="w-full overflow-hidden"
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
                <span>Skype</span>
              </span>
            </Button>
            <Button
              toUrl={instagramUrl}
              style={{ padding: "6px 8px" }}
              className="w-full overflow-hidden"
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
              toUrl={linkedInUrl}
              style={{ padding: "6px 8px" }}
              className="w-full overflow-hidden"
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
              <h2 className="font-bold text-md">Not Happy Yet ?</h2>
              <p>
                <span className="font-bold">Email: </span>
                <span className="inline text-center underline">
                  <a
                    href={`mailto:me@mail.amirmuha.com`}
                    className="mx-4 font-extra-light"
                  >
                    me@mail.amirmuha.com
                  </a>
                </span>
                <span className="inline text-center underline">
                  <a
                    href={`mailto:${adminEmail}`}
                    className="mx-4 font-extra-light"
                  >
                    {adminEmail}
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
