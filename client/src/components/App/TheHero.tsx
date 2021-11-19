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
    <div className="pt-5 flex items-end border-l-5 h-auto md:border-l-10 sm:border-r-5 md:border-r-10 border-palatte-500">
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
      <div className="hidden lg:block flex-1">
        <div className="bg-palatte-300 flex-col mx-6">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <InPageMenu className="text-xs" style={{ padding: 0 }} />
      </div>
      <div className="hidden sm:block  flex-1">
        <div className="block">
          <SmallPipe rtl className="mb-10 mr-0 ml-10 mt-12 h-full">
            <div className="w-full flex-grow">
              <div className="text-center">
                <p className="flex text-sm.4 items-center">
                  <span className="flex-1 h-0.5 bg-palatte-500"></span>
                  <span className="px-1">Resume</span>
                  <span className="flex-1 h-0.5 bg-palatte-500"></span>
                </p>
              </div>
              <div className="border-5 text-sm.4 text-palatte-100 p-2 md:border-10 border-palatte-500">
                <div className="resume-background-image flex">
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
                  <a
                    target="_blank"
                    href={`${SERVER_API}/${
                      data?.resumes[1]
                    }`}
                    className="w-1/2 py-14 text-center place-self-center bg-palatte-300 opacity-70"
                  >
                    <span className="uppercase">
                      .{data?.resumes[1].split(/\.(pdf|ppt|docx)/i)[1].toUpperCase()}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SmallPipe>
          <div className="w-full flex items-center justify-between">
            <Button
              className="text-center flex-1"
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
              className="text-center flex-1"
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
              className="text-center flex-1"
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
              className="text-center flex-1"
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
