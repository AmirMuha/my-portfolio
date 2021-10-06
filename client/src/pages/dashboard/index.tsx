import { PageProps, useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React, { FC, useState } from "react"
import Dash_Aside from "../../components/Dashboard/Dash_Aside"
import Dash_Layout from "../../components/Dashboard/Dash_Layout"
import { SEO } from "../../components/SEO"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import Dash_Menu from "../../components/Dashboard/Dash_Menu"
import Input from "../../components/UI/Input"
import Button from "../../components/UI/Button"

const queryImage = graphql`
  query {
    file(name: { eq: "pexels-pixabay-355952" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
const Dashboard: FC<PageProps> = ({ children, params, data }) => {
  const { file } = useStaticQuery(queryImage)
  const [newProjectName, setNewProjectName] = useState<string>("")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isMessagesOpen, setIsMessagesOpen] = useState<boolean>(false)
  const image = getImage(file.childImageSharp.gatsbyImageData)
  const bgImage = convertToBgImage(image)
  const getNewProjectName = (v: string) => {
    setNewProjectName(v)
  }
  const openMenu = () => {
    if (isMessagesOpen) {
      setIsMessagesOpen(false)
    }
    setIsMenuOpen(true)
  }
  const close = () => {
    setIsMenuOpen(false)
    setIsMessagesOpen(false)
  }
  const openMessages = () => {
    if (isMenuOpen) [setIsMenuOpen(false)]
    setIsMessagesOpen(true)
  }
  return (
    <>
      <SEO title="Dashboard" />
      <div className="flex">
        {(isMenuOpen || isMessagesOpen) && (
          <div
            onClick={close}
            className="bg-palatte-500 w-full opacity-20 h-full fixed"
          ></div>
        )}
        {isMenuOpen && (
          <>
            <Dash_Aside
              left
              className={`${
                isMenuOpen ? "onshowMenu" : "onhideMenu"
              } hidden md:block z-50 bg-palatte-500`}
            >
              <Dash_Menu onClose={close} />
            </Dash_Aside>
            <Dash_Aside
              left
              className={`${
                isMenuOpen ? "onshowMenu" : "onhideMenu"
              } md:hidden fixed top-0 left-0 h-full z-50 bg-palatte-500`}
            >
              <Dash_Menu onClose={close} />
            </Dash_Aside>
          </>
        )}
        <Dash_Layout
          onMessagesClick={openMessages}
          onMenuClick={openMenu}
          className="w-screen"
        >
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <BackgroundImage
                style={{ width: "100%", height: "100%" }}
                Tag="div"
                {...bgImage}
              >
                <div className="text-center py-10 bg-palatte-500 w-full h-full bg-opacity-70">
                  <div className="text-palatte-100 text-sm.6 font-bold">
                    Add New Project
                  </div>
                  <div className="flex dark items-center justify-center gap-1 text-center">
                    <Input
                      style={{
                        padding: "4px 10px",
                        fontSize: "16px",
                        backgroundColor: "transparent",
                      }}
                      getValue={getNewProjectName}
                      id="new-project-name"
                      textColor="100"
                      placeholder="Name Of The New Project"
                      className="border border-palatte-100 flex-grow"
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
                style={{ width: "100%", height: "100%" }}
                Tag="div"
                {...bgImage}
              >
                <div className="py-10 text-center bg-palatte-500 w-full h-full bg-opacity-70">
                  <div className="text-palatte-100 text-sm.6 font-bold">
                    Edit About Me Page
                  </div>
                  <div></div>
                </div>
              </BackgroundImage>
            </div>
          </div>
        </Dash_Layout>
        <Dash_Aside
          right
          className={`${
            isMessagesOpen ? "onshowMessages" : "onhideMessages"
          } hidden md:block z-50 bg-palatte-500`}
        ></Dash_Aside>
        <Dash_Aside
          right
          className={`${
            isMessagesOpen ? "onshowMessages" : "onhideMessages"
          } md:hidden fixed top-0 right-0 h-full z-50 bg-palatte-500`}
        ></Dash_Aside>
      </div>
    </>
  )
}

export default Dashboard
