import React, { FC, PropsWithChildren } from "react"
import { JS, NodeJS, ReactJS, TS, VueJS } from "../../icons/iconsJSX"
import SmallPipe from "../UI/SmallPipe"

interface Props {
  style?: React.CSSProperties
  className?: string
  editable?: boolean
}

const Stack: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  editable = false,
}) => {
  return (
    <>
      <div
        style={{ width: "100vw" }}
        className="bg-palatte-500 w-full pb-2 pt-3"
      >
        <ul className="flex px-3 items-center gap-2">
          <li title="TypeScript">{TS}</li>
          <li title="JavaScript">{JS}</li>
          <li title="NodeJS">{NodeJS}</li>
          <li title="ReactJS">{ReactJS}</li>
          <li title="VueJS">{VueJS}</li>
        </ul>
      </div>
    </>
  )
}

export default Stack
