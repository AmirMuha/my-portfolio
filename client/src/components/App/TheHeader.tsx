import React, { FC, PropsWithChildren, useRef } from "react"
import { Download } from "../../icons/iconsJSX"
import Button from "../UI/Button"
import NavLink from "../UI/NavLink"
import {
  Header,
  Header_Border,
  Header_Container,
  Header_Menu,
  Header_Resume,
} from "./styles/Header.module.css"

interface Props {
  nav?: boolean
}

const TheHeader: FC<PropsWithChildren<Props>> = ({ nav }) => {
  const navRef = useRef<HTMLElement>()
  const headerClasses = `${Header}  ${Header_Border}`
  const navClasses = `${Header_Container}`
  return (
    <header className={headerClasses}>
      <nav ref={navRef as any} className={navClasses}>
        <NavLink
          to="/"
          style={{ padding: 0, margin: `0 ${!nav ? "auto" : "0"}` }}
          className="font-bold text-sm"
        >
          AMIRMUHA.<span className="text-tiny font-normal">portfolio</span>
        </NavLink>
        {nav && (
          <div className="flex items-center gap-5">
            <div className={Header_Menu}>
              <NavLink onHover to="/about-me">
                About Me
              </NavLink>
              <NavLink onHover to="#contact-me">
                Contact Me
              </NavLink>
              <NavLink onHover to="/projects">
                Projects
              </NavLink>
            </div>
            <Button
              iconAnimation="TtB"
              className={Header_Resume}
              icon={Download}
            >
              Resume
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default TheHeader
