import React, { FC, PropsWithChildren } from "react"

import Button from "../UI/Button"
import { Edit } from "../../icons/iconsJSX"
import Markdown from "../utility/Markdown"
import { Project } from "../../types/graphql-types"
import { ProjectItem as ProjectItemClass, mobile_width } from "./styles/ProjectItem.module.css"
import SmallPipe from "../UI/SmallPipe"
import TechItem from "./TechItem"
import { useServerUrl } from '../../util/useServerUrl'

interface Props {
  type?: "1" | "2"
  editable?: boolean
  buttonText?: string
  data: Project
}
const ProjectItem: FC<PropsWithChildren<Props>> = ({
  type,
  data,
  buttonText,
  editable = false,
}) => {
  const SERVER_API = useServerUrl()
  return (
    <>
      <div className="ProjectItems">
        {type === "2" ? (
          <div className={`${mobile_width} flex-col gap-0 items-start mb-5 pl-6 pt-5`}>
            <div
              style={{ minHeight: 200, maxHeight: 300 }}
              className="relative overflow-hidden border-palatte-500 border-5 md:border-10"
            >
                <img
                  src={`${SERVER_API}/${data.image}`}
                  alt={`${data.name} Image`}
                />
              <span className="absolute top-0 left-0 w-full h-full opacity-50 bg-palatte-300"></span>
              {editable && (
                <Button
                  outline
                  to={`/dashboard/projects/${data.id}`}
                  borderColor="400"
                  color="100"
                  normal
                  style={{ padding: "6px" }}
                  className="absolute rounded-full -bottom-4 -right-4"
                >
                  {Edit}
                </Button>
              )}
            </div>
            <div className="relative pt-5 ml-7 border-l-5 md:border-l-10 border-palatte-500">
              <SmallPipe w="16" pipes="left">
                <h1 className="font-bold flex gap-1 text-sm.2 mx-2">
                  About The Project
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
              <div className="px-5 pt-4 pb-5">
                <Markdown>{(data as any).summary}</Markdown>
              </div>
              {data.tech_categories?.length > 0 && (
                <>
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
                  <>
                    {data.tech_categories.map(t => (
                      <TechItem
                        key={t.id}
                        style={{ border: "none", marginLeft: 0 }}
                        data={t}
                      />
                    ))}
                  </>
                </>
              )}
              <div className="relative mt-5">
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
              <div style={{
                objectFit: "cover",
                objectPosition: "center",
                width: 150,
                height: 100,
                overflow: "hidden"
              }} className="relative ProjectImage_Border max-w-20">
                  <img
                    src={`${SERVER_API}/${data.image}`}
                    alt={`${data.name} Image`}
                  />
                <span className="absolute top-0 left-0 w-full h-full opacity-50 bg-palatte-300"></span>
              </div>
              <div className="pl-3 text-sm">
                <p style={{ margin: 0 }}>{data.name}</p>
                <p style={{ margin: 0 }}>{data.type}</p>
              </div>
            </div>
            {data.tech_categories?.length > 0 && (
              <>
                {data.tech_categories.map(t => (
                  <TechItem data={t} key={t.id} />
                ))}
              </>
            )}
            <div className={ProjectItemClass}>
              <div className="relative flex items-center pt-3 gap-0">
                <div className="w-6 h-pipe-sm md:h-pipe-lg bg-palatte-500"></div>
                <Button
                  to={
                    editable
                      ? `/dashboard/projects/${data.id}`
                      : `/projects/${data.id}`
                  }
                  color="100"
                  textColor="500"
                  borderColor="500"
                  className="w-full text-sm"
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
