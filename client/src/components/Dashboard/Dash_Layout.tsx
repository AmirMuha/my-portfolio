import React, { CSSProperties, FC, PropsWithChildren, useState } from "react"

import Dash_Aside from "./Dash_Aside"
import Dash_Header from "./Dash_Header"
import Dash_Menu from "./Dash_Menu"
import {Project} from "../../types/graphql-types"
import { createPortal } from "react-dom"

interface Props {
  projects?: Project[]
  className?: string
  style?: CSSProperties
}

const Dash_Layout: FC<PropsWithChildren<Props>> = ({
  children,
  projects = [],
  className = "",
  style,
}): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isMessagesOpen, setIsMessagesOpen] = useState<boolean>(false)
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
    <div className={`${className}`} style={style}>
      <Dash_Header onMenuClick={openMenu} onMessagesClick={openMessages} />
      {(isMenuOpen || isMessagesOpen) &&
        createPortal(
          <div
            onClick={close}
            className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
          ></div>,
          document.body
        )}
      {isMenuOpen && (
        <>
          <Dash_Aside
            left
            className={`${
              isMenuOpen ? "onshowMenu" : "onhideMenu"
            } fixed top-0 left-0 h-full z-50 bg-palatte-500`}
          >
            <Dash_Menu projects={projects} onClose={close} />
          </Dash_Aside>
        </>
      )}
      <Dash_Aside
        right
        className={`${
          isMessagesOpen ? "onshowMessages" : "onhideMessages"
        } fixed top-0 right-0 h-full z-50 bg-palatte-500`}
      ></Dash_Aside>
      <main className="px-5 md:px-10 mx-auto container w-full">{children}</main>
    </div>
  )
}

export default Dash_Layout
