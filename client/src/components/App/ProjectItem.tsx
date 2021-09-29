import { StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren } from "react"
import Button from "../UI/Button"
import TechItem from "./TechItem"
interface Props {}

const ProjectItem: FC<PropsWithChildren<Props>> = props => {
  const techs: any = []
  return (
    <div className="flex-col gap-0 items-start">
      <div className="flex gap-0 items-center">
        <div className="w-6 bg-palatte-500 h-pipe-sm md:h-pipe-lg"></div>
        <div className="ProjectImage_Border">
          <StaticImage src="../../images/image-1.png" alt="Project Image" />
        </div>
        <div className="pl-3 text-sm">
          <p>PROJECT_NAME</p>
          <p>TYPE_OF_THE_PROJECT</p>
        </div>
      </div>
      <TechItem data={{}} />
      <TechItem data={{}} />
      <TechItem data={{}} />
      <div className="flex-col border-l-5 md:border-l-10 border-palatte-500 justify-start gap-0 ml-14">
        <div className="flex pt-3 items-center gap-0 relative">
          <div className="h-pipe-sm md:h-pipe-lg w-6 bg-palatte-500"></div>
          <Button
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
  )
}

export default ProjectItem
