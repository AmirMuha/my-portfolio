import React, { FC, PropsWithChildren, useState } from "react"
import { Copy } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import Input from "../UI/Input"
import TextArea from "../UI/TextArea"

interface Props {
  className?: string
  id?: string
}

const TheFooter: FC<PropsWithChildren<Props>> = ({ className, id }) => {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const getEmail = (v: string) => {
    console.log(v)
    setEmail(v)
  }
  const getMessage = (v: string) => {
    console.log(v)
    setMessage(v)
  }
  return (
    <footer
      id={id}
      style={{ width: "100vw" }}
      className={`${className} bg-palatte-500 text-center mt-10 py-5`}
    >
      <h1 className="text-palatte-100 text-lg font-bold">Contact Me</h1>
      <div className="block pr-1.5 mx-auto w-2/3 max-w-xs mb-4 md:border-r-10 md:border-b-10 border-r-5 border-b-5 border-palatte-200">
        <Input id="email" label="Email" getValue={getEmail} value={email} />
        <TextArea
          id="message"
          getValue={getMessage}
          label="Message"
          value={message}
        />
        <Button color="400" className="mb-1.5 w-full" textColor="100">
          Send
        </Button>
      </div>
      <div className="mt-5 flex gap-0 justify-center">
        <Button underline style={{ padding: "1px 0" }} borderColor="100">
          mirzaii4046@gmail.com
        </Button>
        <Button
          style={{ padding: "0 10px", paddingRight: 0 }}
          underline
          borderColor="100"
        >
          {Copy}
        </Button>
      </div>
    </footer>
  )
}

export default TheFooter
