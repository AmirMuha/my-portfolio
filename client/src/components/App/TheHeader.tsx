import {
  Header,
  Header_Border,
  Header_Container,
  Header_Menu,
  Header_Resume,
} from "./styles/Header.module.css"
import React, { FC, PropsWithChildren, useRef, useState } from "react"

import Button from "../UI/Button"
import { Download } from "../../icons/iconsJSX"
import NavLink from "../UI/NavLink"
import {
  useResumesQuery
} from "../../types/graphql-types"
import { useServerUrl } from '../../util/useServerUrl';

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
  const SERVER_API = useServerUrl()
  const {data} = useResumesQuery()
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
            className="text-sm font-bold"
          >
            <span className="uppercase">{brand}</span>.
            <span className="font-normal lowercase text-tiny">{page}</span>
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
                  className="fixed top-0 left-0 w-full h-full"
                ></div>
              )}
              <div
                onClick={openDropdown}
                style={{ overflow: "visible", padding: "3px 20px" }}
                className={`${Header_Resume} cursor-pointer bg-palatte-500 text-palatte-100 relative`}
              >
                Resume
                <div
                  className={`absolute border-r-5 border-b-5 top-full  bg-palatte-100 left-0 w-full  border-palatte-500 ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                >
                {
                  data && data.me && data.me.resumes &&
                  <div
                    className="flex-col mt-1 mb-1 mr-1"
                    style={{ fontSize: "12px" }}
                  >
                    { data.me.resumes[0] &&
                    <Button
                      iconAnimation="TtB"
                      color="300"
                      toUrl={`${SERVER_API}/${data.me.resumes[0]}`}
                      target="_blank"
                      style={{
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: 4,
                      }}
                      icon={Download}
                    >
                      .{data.me.resumes[0].split(/\.(pdf|ppt|docx)/i)[1].toUpperCase()}
                    </Button>
                    }
                    { data.me.resumes[1] &&
                    <Button
                      iconAnimation="TtB"
                      toUrl={`${SERVER_API}/${data.me.resumes[1]}`}
                      target="_blank"
                      color="300"
                      style={{ justifyContent: "space-between", width: "100%" }}
                      icon={Download}
                    >
                    .{data.me.resumes[1].split(/\.(pdf|ppt|docx)/i)[1].toUpperCase()}
                    </Button>
                    }
                  </div>
                }
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default TheHeader
