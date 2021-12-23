import React, { FC, PropsWithChildren } from "react"

import Button from "../UI/Button"
import { GitHub } from "../../icons/iconsJSX"
import InPageMenu from "./InPageMenu"
import SmallPipe from "../UI/SmallPipe"
import insta from "../../images/Instagram.png"
import linkedin from "../../images/LinkedIn.png"
import skype from "../../images/Skype.png"
import { useServerUrl } from '../../util/useServerUrl'
import whatsapp from "../../images/WhatsApp.png"

interface Props {
  data: GatsbyTypes.Portfolio_Admin | null
}

const TheHero: FC<PropsWithChildren<Props>> = ({ data }) => {
  const SERVER_API = useServerUrl()
  return (
    <div className="flex items-end h-auto pt-5 border-l-5 md:border-l-10 sm:border-r-5 md:border-r-10 border-palatte-500">
      <div className="block w-full sm:flex-1">
        <div className="p-3 mx-auto">
          <img
            className="w-full px-5"
            src={`${SERVER_API}/${data ? data.heroImage:"default-project.jpeg"}`}
            placeholder="none"
            alt="Hero Image"
            style={{
              backgroundSize: "cover",
              objectFit: "contain",
              width: "100%",
              maxWidth: "400px"
            }}
          />
        </div>
        <Button
          toUrl={data?.github }
          iconAnimation="BtT"
          target="_blank"
          icon={GitHub}
          style={{
            gap: 0,
            marginTop: 25,
            padding: "8px 0",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Button>
      </div>
      <div className="flex-1 hidden lg:block">
        <div className="flex-col mx-6 bg-palatte-300">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <InPageMenu className="text-xs" style={{ padding: 0 }} />
      </div>
      <div className="flex-1 hidden sm:block">
        <div className="block">
          <SmallPipe rtl className="h-full mt-12 mb-10 ml-10 mr-0">
            <div className="flex-grow w-full">
              <div className="text-center">
                <p className="flex text-sm.4 items-center">
                  <span className="flex-1 h-0.5 bg-palatte-500"></span>
                  <span className="px-1">Resume</span>
                  <span className="flex-1 h-0.5 bg-palatte-500"></span>
                </p>
              </div>
              <div className="border-5 text-sm.4 text-palatte-100 p-2 md:border-10 border-palatte-500">
                <div className="flex resume-background-image">
                  {
                    data?.resumes[1] &&
                  <a
                    target="_blank"
                    href={`${SERVER_API}/${
                      data?.resumes[0]
                    }`}
                    className="w-1/2 text-center py-14 place-self-center bg-palatte-400 opacity-70"
                  >
                    <span className="uppercase">
                      .{data?.resumes[0].split(/\.(pdf|ppt|docx)/i)[1].toUpperCase()}
                    </span>
                  </a>
                  }
                  {
                    data?.resumes[1] &&
                  <a
                    target="_blank"
                    href={`${SERVER_API}/${
                      data?.resumes[1]
                    }`}
                    className="w-1/2 text-center py-14 place-self-center bg-palatte-300 opacity-70"
                  >
                    <span className="uppercase">
                      .{data?.resumes[1].split(/\.(pdf|ppt|docx)/i)[1].toUpperCase()}
                    </span>
                  </a>
                  }
                </div>
              </div>
            </div>
          </SmallPipe>
          <div className="flex items-center justify-between w-full">
            <Button
              className="flex-1 text-center"
              target="_top"
              borderColor="500"
              textColor="500"
              color="100"
              outline
              toUrl={`https://wa.me/${data?.whatsapp}`}
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <img
                className="mx-auto"
                width={26}
                src={whatsapp}
                alt="WhatsApp Icon"
              />
            </Button>
            <Button
              className="flex-1 text-center"
              borderColor="500"
              textColor="500"
              color="100"
              outline
              target="_blank"
              toUrl={data?.skype}
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <img
                className="mx-auto"
                width={26}
                src={skype}
                alt="Skype Icon"
              />
            </Button>
            <Button
              className="flex-1 text-center"
              borderColor="500"
              textColor="500"
              color="100"
              outline
              target="_blank"
              toUrl={data?.instagram}
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <img
                className="mx-auto"
                width={26}
                src={insta}
                alt="Instagram Icon"
              />
            </Button>
            <Button
              className="flex-1 text-center"
              borderColor="500"
              textColor="500"
              color="100"
              outline
              target="_blank"
              toUrl={data?.linkedIn}
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <img
                className="mx-auto"
                width={26}
                src={linkedin}
                alt="LinkedIn Icon"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheHero
