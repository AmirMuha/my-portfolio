import { StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren } from "react"
import Button from "../UI/Button"
import SmallPipe from "../UI/SmallPipe"
import { ProjectItem as ProjectItemClass } from "./styles/ProjectItem.module.css"
import TechItem from "./TechItem"
interface Props {
  type?: "1" | "2"
}
const ProjectItem: FC<PropsWithChildren<Props>> = ({ type }) => {
  return (
    <div className="ProjectItems">
      {type === "2" ? (
        <div className="flex-col gap-0 items-start mb-5 pl-6 pt-5">
          <div
            style={{ minHeight: 200, maxHeight: 300 }}
            className="border-palatte-500 border-5 md:border-10 relative"
          >
            <StaticImage src="../../images/image-2.png" alt="Project Image" />
            <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
          </div>
          <div className="ml-7 relative pt-5 border-l-5 md:border-l-10 border-palatte-500">
            <SmallPipe w="16" pipes="left">
              <h1 className="font-bold text-sm.2 mx-2">About The Project</h1>
            </SmallPipe>
            <p className="px-5 pt-4 pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              aliquid eius, cumque cupiditate numquam necessitatibus assumenda
              itaque alias ex. Iusto quis consequuntur sequi rem nulla velit
              ratione beatae sint eos?
            </p>
            <SmallPipe w="16" pipes="left">
              <h1 className="font-bold text-sm.2 mx-2">Techs Used</h1>
            </SmallPipe>
            <TechItem style={{ border: "none", marginLeft: 0 }} data={{}} />
            <TechItem style={{ border: "none", marginLeft: 0 }} data={{}} />
            <TechItem style={{ border: "none", marginLeft: 0 }} data={{}} />
            <div className="mt-5 relative">
              <SmallPipe>
                <Button
                  className="w-full text-center"
                  outline
                  borderColor="500"
                  color="100"
                  textColor="500"
                  to="/"
                >
                  Read More
                </Button>
              </SmallPipe>
              <div className="ProjectItem_Hide__Border_Type_2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex-col gap-0 items-start mb-5 pt-5`}>
          <div className="flex pl-5">
            <div className="ProjectImage_Border relative">
              <StaticImage src="../../images/image-1.png" alt="Project Image" />
              <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
            </div>
            <div className="pl-3 text-sm">
              <p>PROJECT_NAME</p>
              <p>TYPE_OF_THE_PROJECT</p>
            </div>
          </div>
          <TechItem data={{}} />
          <TechItem data={{}} />
          <TechItem data={{}} />
          <div className={ProjectItemClass}>
            <div className="flex pt-3 items-center gap-0 relative">
              <div className="h-pipe-sm md:h-pipe-lg w-6 bg-palatte-500"></div>
              <Button
                normal
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
      )}
    </div>
  )
}

export default ProjectItem
