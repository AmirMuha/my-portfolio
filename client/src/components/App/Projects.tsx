import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "./ProjectItem"

interface Props {
  type?: "1" | "2"
}

const Projects: FC<PropsWithChildren<Props>> = ({ type = "1" }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-3">
        <div className="flex-1">
          <ProjectItem type={type} />
        </div>
        <div className="flex-1">
          <ProjectItem type={type} />
        </div>
        <div className="flex-1">
          <ProjectItem type={type} />
        </div>
        <div className="flex-1">
          <ProjectItem type={type} />
        </div>
        <div className="flex-1">
          <ProjectItem type={type} />
        </div>
        <div className="flex-1">
          <ProjectItem type={type} />
        </div>
      </div>
    </>
  )
}

export default Projects
