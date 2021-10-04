import React, { CSSProperties, FC } from "react"
import SmallPipe from "../UI/SmallPipe"

interface Props {
  data: TechDataObject
  className?: string
  style?: CSSProperties
}
interface TechDataObject {}
const TechItem: FC<Props> = ({ style, className }) => {
  return (
    <div
      style={style}
      className={`flex-col border-l-5 md:border-l-10 border-palatte-500 justify-start gap-0 ml-14 ${className}`}
    >
      <SmallPipe className="pt-3">
        <div className="pl-2 text-sm font-semibold">FronEnd</div>
      </SmallPipe>
      <ul className="ml-3">
        <li className="inline-flex bg-palatte-200 px-2 m-1">React</li>
        <li className="inline-flex bg-palatte-200 px-2 m-1">Redux</li>
      </ul>
    </div>
  )
}

export default TechItem
