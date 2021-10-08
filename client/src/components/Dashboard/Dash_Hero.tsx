import React, { FC, PropsWithChildren, useState } from "react"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Input from "../../components/UI/Input"
import Button from "../../components/UI/Button"
interface Props {}
const queryImage = graphql`
  query {
    f1: file(name: { eq: "Add-project" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    f2: file(name: { eq: "Tablet" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

const Dash_Hero: FC<PropsWithChildren<Props>> = props => {
  const { f1, f2 } = useStaticQuery(queryImage)
  const [newProjectName, setNewProjectName] = useState<string>("")
  const image1 = getImage(f1.childImageSharp.gatsbyImageData)
  const image2 = getImage(f2.childImageSharp.gatsbyImageData)
  const bgImage1 = convertToBgImage(image1)
  const bgImage2 = convertToBgImage(image2)
  const getNewProjectName = (v: string) => {
    setNewProjectName(v)
  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <BackgroundImage
        style={{ width: "100%", height: "100%" }}
        Tag="div"
        {...bgImage1}
      >
        <div className="text-center py-10 bg-palatte-500 w-full h-full bg-opacity-90">
          <h1 className="text-palatte-100 text-sm.6 font-bold">
            Add New Project
          </h1>
          <div className="flex mt-5 w-1/2 dark mx-auto items-center justify-center gap-1">
            <Input
              style={{
                padding: "4px 10px",
                fontSize: "16px",
                backgroundColor: "transparent",
              }}
              getValue={getNewProjectName}
              id="new-project-name"
              textColor="100"
              containerClasses="flex-grow self-center"
              placeholder="Name Of The New Project"
              className="border border-palatte-100"
              color="transparent"
              value={newProjectName}
            />
            <Button
              normal
              color="100"
              style={{ padding: "3.5px 10px" }}
              textColor="500"
            >
              Add
            </Button>
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage
        style={{
          width: "100%",
          height: "100%",
          backgroundPosition: "top",
        }}
        Tag="div"
        {...bgImage2}
      >
        <div className="py-10 text-center bg-palatte-500 w-full h-full bg-opacity-90">
          <h1 className="text-palatte-100 text-sm.6 font-bold">
            Edit About Me Page
          </h1>
          <div className="mt-5">
            <Button
              className="w-2/3 text-center"
              normal
              color="100"
              textColor="500"
            >
              Edit
            </Button>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Dash_Hero
