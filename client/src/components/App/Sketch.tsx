import BackgroundImage from "gatsby-background-image"
import React, { FC, PropsWithChildren } from "react"
import { convertToBgImage } from "gbimage-bridge"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Button from "../UI/Button"
interface Props {}

const Sketch: FC<PropsWithChildren<Props>> = props => {
  const { file } = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
    query {
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
    <div className="grid grid-cols-1 pl-5 pb-7 sm:grid-cols-2 lg:grid-cols-1">
      <div className="">
        <BackgroundImage
          style={{
            maxHeight: 300,
            minHeight: 200,
          }}
          Tag="div"
          className="border-5 w-full md:border-10 border-palatte-500"
          {...bgImage}
        ></BackgroundImage>
      </div>
      <div className="">
        <p className="px-5 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
          fuga quaerat iure aspernatur! Consequatur blanditiis nemo eveniet!
          Eius expedita ab libero eveniet sapiente tempore quo dicta quae
          doloribus! Magni!
        </p>
      </div>
      <div className="flex items-center">
        <Button toUrl="/" outline borderColor="500" textColor="500" color="100">
          Download
        </Button>
      </div>
    </div>
  )
}

export default Sketch
