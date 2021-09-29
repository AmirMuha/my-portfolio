import { navigate } from "gatsby"
import gsap from "gsap"
import React, {
  FC,
  PropsWithChildren,
  StyleHTMLAttributes,
  useRef,
} from "react"
import {
  NavLink as NavLinkClass,
  NavLink_Border,
  NavLink_Dark,
  NavLink_Light,
} from "./styles/NavLink.module.css"
interface Props {
  to: string
  className?: string
  dark?: boolean
  light?: boolean
  onHover?: boolean
  style?: React.CSSProperties
}

const NavLink: FC<PropsWithChildren<Props>> = ({
  to,
  light = false,
  children,
  className,
  onHover = false,
  style = {},
}) => {
  const borderRef = useRef<HTMLSpanElement>()
  const buttonRef = useRef<HTMLButtonElement>()
  const navLinkClass = `${className} ${NavLinkClass} ${
    light ? NavLink_Light : NavLink_Dark
  }`
  const navLinkBorder = `${NavLink_Border} ${!onHover && "hidden"}`
  const buttonClick = () => {
    navigate(to)
  }
  const linkOnMouseEnter = (e: MouseEvent) => {
    if (onHover) {
      const offsetLeft = buttonRef.current?.offsetLeft as number
      const buttonWidth = buttonRef.current?.clientWidth as number
      const splitButton = (buttonWidth / 2) as number
      const mouseClientX = e.clientX as number
      if (mouseClientX >= offsetLeft + splitButton) {
        gsap.fromTo(
          borderRef.current!,
          { translateX: "101%" },
          { translateX: 0 }
        )
      } else {
        gsap.fromTo(
          borderRef.current!,
          { translateX: "-101%" },
          { translateX: 0 }
        )
      }
    }
  }
  const linkOnMouseLeave = (e: MouseEvent) => {
    if (onHover) {
      const offsetLeft = buttonRef.current?.offsetLeft as number
      const buttonWidth = buttonRef.current?.clientWidth as number
      const splitButton = (buttonWidth / 2) as number
      const mouseClientX = e.clientX as number
      if (mouseClientX >= offsetLeft + splitButton) {
        gsap.fromTo(
          borderRef.current!,
          { translateX: 0 },
          { translateX: "101%" }
        )
      } else {
        gsap.fromTo(
          borderRef.current!,
          { translateX: 0 },
          { translateX: "-101%" }
        )
      }
    }
  }
  return (
    <button
      style={style}
      ref={buttonRef as any}
      onClick={buttonClick}
      onMouseEnter={linkOnMouseEnter as any}
      onMouseLeave={linkOnMouseLeave as any}
      className={navLinkClass}
    >
      {children}
      <span ref={borderRef as any} className={navLinkBorder}></span>
    </button>
  )
}

export default NavLink
