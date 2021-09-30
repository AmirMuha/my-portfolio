import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "./ProjectItem"

interface Props {}

const Projects: FC<PropsWithChildren<Props>> = props => {
  return (
    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      <div className="">
        <ProjectItem />
      </div>
      <div className="sm:border-l-5 relative md:border-l-10">
        <div className="Pipe_Hide"></div>
        <ProjectItem />
      </div>
      <div className="relative xl:border-l-10">
        <div className="Pipe_Hide"></div>
        <ProjectItem />
      </div>
    </div>
  )
}

export default Projects
