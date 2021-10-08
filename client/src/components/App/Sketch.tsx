import BackgroundImage from "gatsby-background-image"
import React, { FC, PropsWithChildren } from "react"
import { convertToBgImage } from "gbimage-bridge"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Button from "../UI/Button"
interface Props {
  editable?: boolean
}

const Sketch: FC<PropsWithChildren<Props>> = ({ editable = false }) => {
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
    <div className="grid grid-cols-1 pl-5 pb-7 relative sm:grid-cols-2 lg:grid-cols-1">
      <div className="relative">
        <BackgroundImage
          style={{
            maxHeight: 300,
            minHeight: 200,
          }}
          Tag="div"
          className="w-full"
          {...bgImage}
        ></BackgroundImage>
        <div className="p-1.5 absolute border-5 md:border-10 border-palatte-500 bg-palatte-200 bg-opacity-50 top-0 left-0 right-0 bottom-0">
          <div className="flex items-center justify-between">
            <Button
              toUrl="/"
              outline
              borderColor="100"
              textColor="100"
              color="500"
            >
              Download
            </Button>
            <Button
              toUrl="/"
              outline
              borderColor="100"
              textColor="100"
              color="500"
            >
              Preview
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <p className="px-5 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
          fuga quaerat iure aspernatur! Consequatur blanditiis nemo eveniet!
          Eius expedita ab libero eveniet sapiente tempore quo dicta quae
          doloribus! Magni!
        </p>
      </div>
    </div>
  )
}

export default Sketch
