import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "../App/ProjectItem"
interface Props {}

const Dash_Projects: FC<PropsWithChildren<Props>> = props => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectItem editable type="2" />
      <ProjectItem editable type="2" />
    </div>
  )
}

export default Dash_Projects
