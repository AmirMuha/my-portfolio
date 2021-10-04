import { graphql, useStaticQuery } from "gatsby"
import BackGroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React, { FC, PropsWithChildren } from "react"
import audio from "../../04 Future.mp3"
import { GitHub } from "../../icons/iconsJSX"
import Audio from "../UI/Audio"
import Button from "../UI/Button"
import SmallPipe from "../UI/SmallPipe"
import TheSection from "./TheSection"
interface Props {}

const AboutTheProject: FC<PropsWithChildren<Props>> = props => {
  const { file } = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
    query MyQuery {
      file(name: { eq: "pexels-pixabay-355952" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  let image
  if (file && file.childImageSharp) {
    image = getImage(file.childImageSharp.gatsbyImageData)
  }
  const bgImage = convertToBgImage(image)
  return (
    <div>
      <div className="flex flex-col md:flex-row mb-6 ml-5 ">
        <BackGroundImage
          style={{
            maxHeight: 400,
            minHeight: 300,
            minWidth: 300,
          }}
          className="w-full border-5 overflow-hidden border-palatte-500 relative md:border-10"
          Tag="div"
          {...bgImage}
        >
          <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
          <div className="flex justify-between m-2 items-center">
            <Button
              outline
              toUrl="https://github.com/AmirMuha"
              borderColor="100"
              textColor="100"
              color="500"
              className="text-center"
              style={{ padding: "5px 20px", gap: 0 }}
              icon={GitHub}
              fill
            ></Button>
            <Button
              outline
              toUrl="https://github.com/AmirMuha"
              borderColor="100"
              textColor="100"
              color="500"
              style={{ padding: "3px 20px" }}
              fill
            >
              Visit The App
            </Button>
          </div>
        </BackGroundImage>
        <div className="flex-col ml-7 border-l-5 border-palatte-500 relative md:border-l-0 md:ml-0 pt-5 md:pt-0 md:mt-5">
          <SmallPipe
            style={{
              display: "block",
            }}
            pipeStyle={{ width: 50 }}
            pipes="left"
          >
            <h2 className="text-sm.4 font-bold mx-2">Summary Of The Project</h2>
          </SmallPipe>
          <p className="px-5 py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            provident cum, cumque exercitationem eaque vero placeat, delectus
            temporibus eius debitis, voluptas est! Numquam, quod fugiat! Nemo
            beatae aspernatur voluptatibus consectetur!
          </p>
          <div className="">
            <SmallPipe pipeClassName="hidden md:flex">
              <Audio src={audio} />
            </SmallPipe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTheProject
