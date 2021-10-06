import React, { FC, PropsWithChildren, useRef, useState } from "react"
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
  brand?: string
  page?: string
}

const TheHeader: FC<PropsWithChildren<Props>> = ({
  nav,
  brand = "AMIRMUHA",
  page = "portfolio",
}) => {
  const navRef = useRef<HTMLElement>()
  const headerClasses = `${Header}  ${Header_Border}`
  const navClasses = `${Header_Container}`
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }
  const openDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown()
    } else {
      setIsDropdownOpen(true)
    }
  }
  return (
    <>
      <header className={headerClasses}>
        <nav ref={navRef as any} className={navClasses}>
          <NavLink
            to="/"
            style={{ padding: 0, margin: `0 ${!nav ? "auto" : "0"}` }}
            className="font-bold text-sm"
          >
            <span className="uppercase">{brand}</span>.
            <span className="text-tiny font-normal lowercase">{page}</span>
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
              {isDropdownOpen && (
                <div
                  onClick={closeDropdown}
                  className="fixed  top-0 left-0 w-full h-full"
                ></div>
              )}
              <Button
                iconAnimation="TtB"
                color="500"
                normal
                onClick={openDropdown}
                style={{ overflow: "visible", padding: "3px 20px" }}
                className={Header_Resume}
              >
                Resume
                <div
                  className={`absolute border-r-5 border-b-5 top-full  bg-palatte-100 left-0 w-full  border-palatte-500 ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                >
                  <div
                    className="flex-col mr-1 mb-1 mt-1"
                    style={{ fontSize: "12px" }}
                  >
                    <Button
                      iconAnimation="TtB"
                      color="300"
                      normal
                      style={{
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: 4,
                      }}
                      icon={Download}
                    >
                      .PDF
                    </Button>
                    <Button
                      iconAnimation="TtB"
                      color="300"
                      normal
                      style={{ justifyContent: "space-between", width: "100%" }}
                      icon={Download}
                    >
                      .DOCX
                    </Button>
                  </div>
                </div>
              </Button>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default TheHeader
