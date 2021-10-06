import React, { FC, PropsWithChildren } from "react"
import Sketch from "./Sketch"
interface Props {}

const Sketches: FC<PropsWithChildren<Props>> = props => {
  return (
    <div>
      <Sketch />
    </div>
  )
}

export default Sketches
