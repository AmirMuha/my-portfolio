import React, { FC, PropsWithChildren } from "react"

import { Exit } from "../../icons/iconsJSX"
import { LogoutMutation } from "../../util/mutations"
import NavLink from "../UI/NavLink"
import { navigate } from "gatsby"
import { useAuth } from "../../util/useAuth"
import { useMutation } from "@apollo/client"

interface Props {
  page?: string
  onMenuClick?: () => void
  onMessagesClick?: () => void
  brand?: string
}

const Dash_Header: FC<PropsWithChildren<Props>> = ({
  page = "dashboard",
  onMenuClick,
  brand = "AMIRMUHA",
}) => {
  const [mutate] = useMutation(LogoutMutation)

  const { data: isLoggedIn } = useAuth()
  const logout = (): any => {
    if (isLoggedIn) {
      mutate()
        .then(() => {
          navigate("/dashboard/auth/")
        })
        .catch(() => {
          navigate("/dashboard/auth/")
        })
      return null
    }
  }
  if (!isLoggedIn) {
    return null
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
          <div className="px-2 hidden md:flex items-center gap-4">
            <NavLink onHover to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink onHover to="/dashboard/messages">
              Messages
            </NavLink>
            <NavLink onHover to="/dashboard/about-me">
              About Me
            </NavLink>
            <NavLink onHover to="/dashboard/profile">
              Profile
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
          <div className="md:hidden">
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
        </div>
      </nav>
    </header>
  )
}

export default Dash_Header
