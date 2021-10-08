import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "../App/ProjectItem"
interface Props {
  editable?: boolean
}

const Dash_Projects: FC<PropsWithChildren<Props>> = ({ editable = false }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectItem buttonText="Edit" editable={editable} />
      <ProjectItem buttonText="Edit" editable={editable} />
    </div>
  )
}

export default Dash_Projects
