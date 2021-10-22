import { useMutation } from "@apollo/client"
import { navigate } from "gatsby-link"
import React, { FC, PropsWithChildren, useState } from "react"
import { Exit } from "../../icons/iconsJSX"
import { LogoutMutation } from "../../util/mutations"
import { useAuth } from "../../util/useAuth"
import NavLink from "../UI/NavLink"

interface Props {
  page?: string
  onMenuClick?: () => void
  onMessagesClick?: () => void
  brand?: string
}

const newMessagesLength = ["asdf", "Sdfs"]
const Dash_Header: FC<PropsWithChildren<Props>> = ({
  page = "dashboard",
  onMenuClick,
  onMessagesClick,
  brand = "AMIRMUHA",
}) => {
  const [mutate] = useMutation(LogoutMutation)

  const { data: isLoggedIn } = useAuth()
  const logout = () => {
    if (isLoggedIn) {
      mutate()
        .then(() => {
          navigate("/dashboard/auth/")
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
  return (
    <header className="w-full py-1 px-3 border-b border-palatte-500">
      <nav className="container flex items-center justify-between mx-auto py-2">
        <div className="md:hidden">
          <button onClick={onMenuClick}>
            <svg width="20" height="12" viewBox="0 0 20 12">
              <path
                d="M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"
                fill="#1E0B00"
              />
            </svg>
          </button>
        </div>
        <div>
          <NavLink to="/dashboard" className="">
            <span className="text-sm font-bold uppercase">{brand}.</span>
            <span className="text-tiny lowercase">{page}</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-4">
            <NavLink onHover to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink onHover to="/dashboard/messages">
              Messages
            </NavLink>
            <NavLink onHover to="/dashboard/about-me">
              About Me
            </NavLink>
            {isLoggedIn && (
              <button
                onClick={logout}
                className="flex border-b border-palatte-500 gap-2 items-center"
              >
                <span>Logout</span>
                <span>{Exit}</span>
              </button>
            )}
          </div>
          <button onClick={onMessagesClick} className="relative">
            <svg width="26" height="19" viewBox="0 0 27 22">
              <path
                d="M24.3 0H2.7C1.215 0 0.0135 1.2375 0.0135 2.75L0 19.25C0 20.7625 1.215 22 2.7 22H24.3C25.785 22 27 20.7625 27 19.25V2.75C27 1.2375 25.785 0 24.3 0ZM24.3 19.25H2.7V5.5L13.5 12.375L24.3 5.5V19.25ZM13.5 9.625L2.7 2.75H24.3L13.5 9.625Z"
                fill="#1E0B00"
              />
            </svg>
            {newMessagesLength.length !== 0 && (
              <div className="rounded-full bg-palatte-300 w-2 h-2 absolute -top-0.5 -right-0.5"></div>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Dash_Header
