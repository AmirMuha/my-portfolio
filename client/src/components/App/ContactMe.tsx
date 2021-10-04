import { gql, useMutation } from "@apollo/client"
import { StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren, useCallback, useState } from "react"
import Button from "../UI/Button"
import Input, { File, GetValue } from "../UI/Input"
import TextArea from "../UI/TextArea"

interface Props {
  className?: string
  id?: string
}

// const uploadSingleFile = gql`
//   mutation ($file: Upload!) {
//     uploadSingleFile(file: $file)
//   }
// `
// const uploadMultipleFiles = gql`
//   mutation ($files: [Upload!]!) {
//     uploadMultipleFiles(files: $files)
//   }
// `

const ContactMe: FC<PropsWithChildren<Props>> = props => {
  // const [uploadFile] = useMutation(uploadSingleFile)
  // const [uploadFiles] = useMutation(uploadMultipleFiles)
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [files, setFile] = useState<File[]>()
  const [fileName, setFileName] = useState<string>("")
  const getEmail: GetValue<string, File> = useCallback((v: string) => {
    console.log(v)
    setEmail(v)
  }, [])
  const getMessage: GetValue<string, File> = useCallback((v: string) => {
    console.log(v)
    setMessage(v)
  }, [])
  const getFile: GetValue<string, File[]> = useCallback(
    (v: string, files) => {
      setFileName(v)
      setFile(files)
    },
    [fileName, files]
  )
  const sendTheMessage = useCallback(() => {
    if (!email || !message) {
      alert("Both email and message fields are necessary.")
    }
    console.log({
      email,
      message,
      files,
    })
    // if (files) {
    //   if (files.length > 1) {
    //     uploadFiles({ variables: { files: files } })
    //   } else {
    //     uploadFile({ variables: { file: files[0] } })
    //   }
    // }
  }, [email, message, files])
  return (
    <div className="grid lg:grid-cols-2 mb-3">
      <div className="mx-10">
        <Input
          color="200"
          textColor="500"
          id="email"
          name="email"
          label="Email*"
          value={email}
          getValue={getEmail}
        />
        <TextArea
          label="Message*"
          color="200"
          textColor="500"
          id="message"
          rows={8}
          name="message"
          value={message}
          getValue={getMessage}
        />
        <Input
          type="file"
          label="Attach Some Files"
          buttonTitle="Select Files"
          id="file"
          name="file"
          getValue={getFile}
          value={fileName}
        />
        <Button
          color="500"
          normal
          onClick={sendTheMessage}
          textColor="100"
          style={{ padding: "8px 0 8px 0" }}
          className="my-2 py-2 w-full"
        >
          Send
        </Button>
      </div>
      <div className="mx-10 mt-5">
        <h2 className="text-md font-bold">Me On Social Media</h2>
        <div
          style={{ maxHeight: "min-content" }}
          className="grid-cols-2 grid items-start justify-center gap-1 lg:grid-cols-1"
        >
          <Button
            toUrl="https://google.com"
            style={{ padding: "6px 8px" }}
            className="flex items-center w-full"
            color="100"
            borderColor="500"
            textColor="500"
            outline
            fill
          >
            <StaticImage
              placeholder="none"
              className="mx-3"
              src="../../images/WhatsApp.png"
              alt="WhatsApp Icon"
            />
            <span>+98-9158964046</span>
          </Button>
          <Button
            toUrl="https://google.com"
            style={{ padding: "6px 8px" }}
            className="flex items-center w-full"
            color="100"
            borderColor="500"
            textColor="500"
            outline
            fill
          >
            <StaticImage
              placeholder="none"
              className="mx-3"
              src="../../images/Skype.png"
              alt="Skype Icon"
            />
            <span>mirzaii4046@gmail.com</span>
          </Button>
          <Button
            toUrl="https://google.com"
            style={{ padding: "6px 8px" }}
            className="flex items-center w-full"
            color="100"
            borderColor="500"
            textColor="500"
            outline
            fill
          >
            <StaticImage
              placeholder="none"
              className="mx-3"
              src="../../images/Instagram.png"
              alt="Instagram Icon"
            />
            <span>Instagram</span>
          </Button>
          <Button
            toUrl="https://google.com"
            style={{ padding: "6px 8px" }}
            className="flex items-center w-full"
            color="100"
            borderColor="500"
            textColor="500"
            outline
            fill
          >
            <StaticImage
              placeholder="none"
              className="mx-3"
              src="../../images/LinkedIn.png"
              alt="LinkedIn Icon"
            />
            <span>LinkedIn</span>
          </Button>
          <div className="mt-5">
            <h2 className="text-md font-bold">Not Happy Yet ?</h2>
            <p>
              <span className="font-bold">Email #1:</span>
              <div className="underline text-center inline">
                <a
                  href="mailto:mirzaii4046@gmail.com"
                  className="font-extra-light mx-4"
                >
                  mirzaii4046@gmail.com
                </a>
              </div>
            </p>
            <p>
              <span className="font-bold">Email #2:</span>
              <div className="underline text-center inline">
                <a
                  href="mailto:mirzaii4046@gmail.com"
                  className="font-extra-light mx-4"
                >
                  mirzaei2334@gmail.com
                </a>
              </div>
            </p>
            <p>
              <span className="font-bold">Email #3:</span>
              <div className="underline text-center inline">
                <a
                  href="mailto:mirzaii4046@gmail.com"
                  className="font-extra-light mx-4"
                >
                  am.mirzaeirad@yahoo.com
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ContactMe)
