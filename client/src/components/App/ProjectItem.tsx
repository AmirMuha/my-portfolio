import { StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren } from "react"
import Button from "../UI/Button"
import TechItem from "./TechItem"
interface Props {}
import {
  ProjectItem as ProjectItemClass,
  ProjectItem_Border__Bottom,
} from "./styles/ProjectItem.module.css"
import SmallPipe from "../UI/SmallPipe"
const ProjectItem: FC<PropsWithChildren<Props>> = props => {
  return (
    <div className="ProjectItems">
      <div className={`flex-col gap-0 items-start mb-5`}>
        <SmallPipe>
          <div className="ProjectImage_Border relative">
            <StaticImage src="../../images/image-1.png" alt="Project Image" />
            <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
          </div>
          <div className="pl-3 text-sm">
            <p>PROJECT_NAME</p>
            <p>TYPE_OF_THE_PROJECT</p>
          </div>
        </SmallPipe>
        <TechItem data={{}} />
        <TechItem data={{}} />
        <TechItem data={{}} />
        <div className={ProjectItemClass}>
          <div className="flex pt-3 items-center gap-0 relative">
            <div className="h-pipe-sm md:h-pipe-lg w-6 bg-palatte-500"></div>
            <Button
              color="100"
              textColor="500"
              borderColor="500"
              className="text-sm w-full"
              style={{ gap: 0, textAlign: "center" }}
              outline
              fill
            >
              Read More
            </Button>
            <div className="ProjectItem_Hide__Border"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
