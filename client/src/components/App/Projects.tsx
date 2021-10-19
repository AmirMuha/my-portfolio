import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "./ProjectItem"

interface Props {
  type?: "1" | "2"
  data: GatsbyTypes.Portfolio_Project[]
}

const Projects: FC<PropsWithChildren<Props>> = ({ type = "1", data }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-3">
        {data?.length > 0 &&
          data.map(p => (
            <div key={p.id} className="flex-1">
              <ProjectItem data={p} type={type} />
            </div>
          ))}
      </div>
    </>
  )
}

export default Projects
