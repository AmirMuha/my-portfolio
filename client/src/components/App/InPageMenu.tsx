import React, { CSSProperties, FC, PropsWithChildren } from "react"
import Button from "../UI/Button"
import SmallPipe from "../UI/SmallPipe"

interface Props {
  style?: CSSProperties
  className?: string
  pipes?: "both-side" | "left" | "right"
}

const InPageMenu: FC<PropsWithChildren<Props>> = ({
  style,
  pipes = "both-side",
  className,
}) => {
  return (
    <>
      <SmallPipe pipes={pipes} style={style} className={`${className}`}>
        <Button
          toUrl="#projects"
          className="text-center mr-2"
          style={{ padding: "7px 0 7px 0", flexGrow: 1 }}
        >
          Projects
        </Button>
        <Button
          toUrl="#about"
          className="text-center mr-2"
          style={{ padding: "7px 0 7px 0", flexGrow: 1 }}
        >
          About
        </Button>
        <Button
          toUrl="#footer"
          className="text-center mr-2"
          style={{ padding: "7px 0 7px 0", flexGrow: 1 }}
        >
          Contact Me
        </Button>
        <Button
          toUrl="#stack"
          className="text-center "
          style={{ padding: "7px 0 7px 0", flexGrow: 1 }}
        >
          stack
        </Button>
      </SmallPipe>
    </>
  )
}

export default InPageMenu
