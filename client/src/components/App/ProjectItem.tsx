import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren } from "react"
import { Edit } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import SmallPipe from "../UI/SmallPipe"
import { ProjectItem as ProjectItemClass } from "./styles/ProjectItem.module.css"
import TechItem from "./TechItem"

interface Props {
  type?: "1" | "2"
  editable?: boolean
  buttonText?: string
  data: GatsbyTypes.Portfolio_Project
}
interface ImageQueryType {
  data: {
    allFile: {
      nodes: GatsbyTypes.File[]
    }
  }
}
const ProjectItem: FC<PropsWithChildren<Props>> = ({
  type,
  data,
  buttonText,
  editable = false,
}) => {
  // const [imageEditMode, setImageEditMode] = useState<boolean>(false)
  // const [aboutProjectEditMode, setAboutProjectEditMode] = useState<boolean>(false)
  // const [techsEditMode, setTechsEditMode] = useState<boolean>(false)
  return (
    <>
      <div className="ProjectItems">
        {type === "2" ? (
          <div className="flex-col gap-0 items-start mb-5 pl-6 pt-5">
            <div
              style={{ minHeight: 200, maxHeight: 300 }}
              className="border-palatte-500 border-5 md:border-10 relative"
            >
              <StaticImage
                style={{
                  maxHeight: "150px",
                  maxWidth: "150px",
                }}
                src="../../images/pexels-pixabay-355952.jpg"
                alt={`${data.image} Image`}
              />

              <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
              {editable && (
                <Button
                  outline
                  to={`/dashboard/projects/${data.id}`}
                  borderColor="400"
                  color="100"
                  normal
                  style={{ padding: "6px" }}
                  className="rounded-full absolute -bottom-4 -right-4"
                >
                  {Edit}
                </Button>
              )}
            </div>
            <div className="ml-7 relative pt-5 border-l-5 md:border-l-10 border-palatte-500">
              <SmallPipe w="16" pipes="left">
                <h1 className="font-bold flex gap-1 text-sm.2 mx-2">
                  A Summary About The Project
                  {editable && (
                    <Button
                      color="100"
                      normal
                      to={`/dashboard/projects/${data.id}`}
                      style={{ padding: "6px" }}
                      className="rounded-full"
                    >
                      {Edit}
                    </Button>
                  )}
                </h1>
              </SmallPipe>
              <p className="px-5 pt-4 pb-5">{(data as any).summary}</p>
              <SmallPipe w="16" pipes="left">
                <h1 className="flex gap-1 font-bold text-sm.2 mx-2">
                  Techs Used
                  {editable && (
                    <Button
                      color="100"
                      normal
                      style={{ padding: "6px" }}
                      className="rounded-full"
                    >
                      {Edit}
                    </Button>
                  )}
                </h1>
              </SmallPipe>
              <TechItem
                style={{ border: "none", marginLeft: 0 }}
                data={data.tech_categories}
              />
              <TechItem
                style={{ border: "none", marginLeft: 0 }}
                data={data.tech_categories}
              />
              <TechItem
                style={{ border: "none", marginLeft: 0 }}
                data={data.tech_categories}
              />
              <div className="mt-5 relative">
                <SmallPipe>
                  <Button
                    className="w-full text-center"
                    outline
                    borderColor="500"
                    color="100"
                    textColor="500"
                    to={
                      editable
                        ? `/dashboard/projects/${data.id}`
                        : `/projects/${data.id}`
                    }
                  >
                    {editable ? "Want To Edit ?" : "Read More"}
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
                <GatsbyImage
                  style={{
                    maxHeight: "150px",
                    maxWidth: "150px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  image={{
                    height: 100,
                    width: 100,
                    layout: "constrained",
                    images: { fallback: { src: `/images/${data.image}` } },
                  }}
                  alt={`${data.image} Image`}
                />
                <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
              </div>
              <div className="pl-3 text-sm">
                <p>{data.name}</p>
                <p>{data.type}</p>
              </div>
            </div>
            <TechItem data={data.tech_categories} />
            <TechItem data={data.tech_categories} />
            <TechItem data={data.tech_categories} />
            <div className={ProjectItemClass}>
              <div className="flex pt-3 items-center gap-0 relative">
                <div className="h-pipe-sm md:h-pipe-lg w-6 bg-palatte-500"></div>
                <Button
                  to={`/projects/${data.id}`}
                  color="100"
                  textColor="500"
                  borderColor="500"
                  className="text-sm w-full"
                  style={{ gap: 0, textAlign: "center" }}
                  outline
                  fill
                >
                  {buttonText ? buttonText : "Read More"}
                </Button>
                <div className="ProjectItem_Hide__Border"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectItem
