import { StaticImage } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren } from "react"
import { GitHub } from "../../icons/iconsJSX"
import Button from "../UI/Button"

interface Props {}

const TheHero: FC<PropsWithChildren<Props>> = props => {
  return (
    <div className="px-14 pt-5 relative">
      <span
        style={{ height: "100Vh" }}
        className="top-0 absolute z-20 hidden xs:block left-0 w-pipe-sm md:w-pipe-lg bg-palatte-500"
      ></span>
      <div className="inline-block">
        <StaticImage
          src="../../images/Hero.svg"
          alt="Hero Image"
          placeholder="none"
        />
        <Button
          toUrl="https://github.com/AmirMuha"
          pulse
          icon={GitHub}
          style={{
            gap: 0,
            marginLeft: 5,
            paddingTop: 5,
            paddingBottom: 5,
            marginTop: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Button>
      </div>
    </div>
  )
}

export default TheHero
