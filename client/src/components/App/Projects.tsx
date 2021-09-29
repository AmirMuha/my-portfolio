import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "./ProjectItem"

interface Props {}

const Projects: FC<PropsWithChildren<Props>> = props => {
  return (
    <>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </>
  )
}

export default Projects
