import { StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren } from "react"
import { GitHub } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import SmallPipe from "../UI/SmallPipe"
import InPageMenu from "./InPageMenu"
interface Props {}

const TheHero: FC<PropsWithChildren<Props>> = props => {
  return (
    <div className="pt-5 flex items-center border-l-5 h-auto md:border-l-10 sm:border-r-5 md:border-r-10 border-palatte-500">
      <div className="block self-end w-full sm:flex-1">
        <div className="p-3 mx-auto">
          <StaticImage
            className="w-full"
            src="../../images/Hero.svg"
            alt="Hero Image"
            placeholder="none"
            imgStyle={{
              backgroundSize: "cover",
              objectFit: "contain",
              width: "100%",
            }}
          />
        </div>
        <Button
          toUrl="https://github.com/AmirMuha"
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
      <div className="hidden lg:block justify-self-end self-end flex-1">
        <div className="bg-palatte-300 flex-col mx-6">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <InPageMenu style={{ padding: 0 }} />
      </div>
      <div className="hidden sm:block justify-self-end self-end flex-1">
        <div className="block">
          <SmallPipe rtl className="mb-8 ml-auto max-w-xs">
            <div className="w-full">
              <div className="text-center">
                <p className="flex text-sm.4 items-center">
                  <span className="flex-1 h-0.5 bg-palatte-500"></span>
                  <span className="px-1">Resume</span>
                  <span className="flex-1 h-0.5 bg-palatte-500"></span>
                </p>
              </div>
              <div className="border-5 text-sm.4 text-palatte-100 md:border-10 border-palatte-500">
                <div className="flex p-2">
                  <button className="w-1/2 text-center py-14 place-self-center bg-palatte-400 opacity-70">
                    <p>.PDF</p>
                  </button>
                  <button className="w-1/2 py-14 text-center place-self-center bg-palatte-300 opacity-70">
                    <p>.DOCX</p>
                  </button>
                </div>
              </div>
            </div>
          </SmallPipe>
          <div className="w-full flex items-center justify-between">
            <Button
              className="text-center flex-1"
              fill
              target="_top"
              borderColor="500"
              textColor="500"
              color="100"
              outline
              toUrl="https://google.com"
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <StaticImage
                width={24}
                placeholder="none"
                src="../../images/WhatsApp.png"
                alt="WhatsApp Icon"
              />
            </Button>
            <Button
              className="text-center flex-1"
              fill
              borderColor="500"
              textColor="500"
              color="100"
              outline
              target="_blank"
              toUrl="https://google.com"
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <StaticImage
                width={24}
                placeholder="none"
                src="../../images/Skype.png"
                alt="Skype Icon"
              />
            </Button>
            <Button
              className="text-center flex-1"
              fill
              borderColor="500"
              textColor="500"
              color="100"
              outline
              target="_blank"
              toUrl="https://google.com"
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <StaticImage
                width={24}
                placeholder="none"
                src="../../images/Instagram.png"
                alt="Instagram Icon"
              />
            </Button>
            <Button
              className="text-center flex-1"
              fill
              borderColor="500"
              textColor="500"
              color="100"
              outline
              target="_blank"
              toUrl="https://google.com"
              style={{
                alignItems: "center",
                padding: "6px 8px",
                borderRight: 0,
              }}
            >
              <StaticImage
                width={24}
                placeholder="none"
                src="../../images/LinkedIn.png"
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