import { Link } from "gatsby"
import CSSRulePlugin from "gsap/dist/CSSRulePlugin"
import gsap from "gsap/gsap-core"
import React, { FC, PropsWithChildren, ReactElement, useRef } from "react"
import {
  Button as ButtonClass,
  Button_Outlined,
  Button_Pulse,
  Button_Underlined,
} from "./styles/Button.module.css"
gsap.registerPlugin(CSSRulePlugin)
interface Props {
  onClick?(): void
  outline?: boolean
  to?: string
  underline?: boolean
  disabled?: boolean
  pulse?: boolean
  normal?: boolean
  className?: string
  icon?: JSX.Element
  iconAnimation?: IconAnimations
  target?: "_blank" | "_self" | "_parent" | "_top"
  fill?: boolean
  color?: "100" | "200" | "300" | "400" | "500" | "transparent"
  borderColor?: "100" | "200" | "300" | "400" | "500"
  textColor?: "100" | "200" | "300" | "400" | "500"
  toUrl?: string
  style?: React.CSSProperties
  iconPos?: "right" | "left"
  type?: "button" | "reset" | "submit"
}

export type IconAnimations =
  | "TtB"
  | "BtT"
  | "Rotate-x-180"
  | "Rotate-x-380"
  | ""

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  outline = false,
  underline = false,
  disabled = false,
  color = "500",
  borderColor = "500",
  textColor = "100",
  pulse = false,
  type = "button",
  fill = false,
  normal = false,
  className = "",
  to,
  target = "_self",
  toUrl,
  style = {},
  iconPos = "right",
  icon = null,
  iconAnimation,
  onClick,
}): ReactElement => {
  const iconRef = useRef<HTMLSpanElement>()
  const buttonBackGroundColorRef = useRef<HTMLSpanElement>()
  let yForAnim: number
  const buttonOnMouseEnter: any = (iconAnimation: IconAnimations = "") => {
    if (fill) {
      gsap.fromTo(
        buttonBackGroundColorRef.current!,
        {
          width: 0,
        },
        {
          width: 10,
        }
      )
    }
    if (iconRef.current) {
      yForAnim = iconRef.current.parentElement?.clientHeight!
      const tl = gsap.timeline()
      switch (iconAnimation) {
        case "BtT":
          tl.to(iconRef.current, { y: -yForAnim })
          tl.fromTo(iconRef.current, { y: yForAnim }, { y: 0 })
          break
        case "TtB":
          tl.to(iconRef.current, { y: yForAnim })
          tl.fromTo(iconRef.current, { y: -yForAnim }, { y: 0 })
          break
        case "Rotate-x-180":
          tl.to(iconRef.current, { rotateX: 180 })
          break
        case "Rotate-x-380":
          tl.to(iconRef.current, { rotateX: 360 })
          break
        default:
          break
      }
    }
  }
  const buttonOnMouseLeave: any = (iconAnimation: IconAnimations = "") => {
    if (fill) {
      gsap.fromTo(
        buttonBackGroundColorRef.current!,
        {
          width: 10,
        },
        {
          width: 0,
        }
      )
    }
    if (iconRef.current) {
      yForAnim = iconRef.current.parentElement?.clientHeight!
      const tl = gsap.timeline()
      switch (iconAnimation) {
        case "Rotate-x-180":
          tl.fromTo(iconRef.current, { rotateX: 180 }, { rotateX: 0 })
          break
        default:
          break
      }
    }
  }
  const buttonClasses = `${className} ${ButtonClass} ${
    outline &&
    Button_Outlined +
      ` ${
        color !== "transparent" ? `bg-palatte-${color}` : "bg-opacity-0"
      } text-palatte-${textColor} border-palatte-${borderColor}`
  } ${
    underline &&
    Button_Underlined +
      ` ${
        color !== "transparent" ? `bg-palatte-${color}` : "bg-opacity-0"
      } border-palatte-${borderColor} text-palatte-${textColor}`
  } ${pulse && Button_Pulse} ${
    icon && "flex overflow-hidden justify-center items-center gap-2 relative"
  }`
  return (
    <>
      {normal && (
        <button
          onClick={onClick}
          style={style}
          disabled={disabled}
          type={type}
          onMouseLeave={() => buttonOnMouseLeave(iconAnimation)}
          onMouseOver={() => buttonOnMouseEnter(iconAnimation)}
          className={`${buttonClasses} ${className} ${
            color !== "transparent" ? `bg-palatte-${color}` : "bg-opacity-0"
          } text-palatte-${textColor}`}
        >
          {iconPos === "left" && <span ref={iconRef as any}>{icon}</span>}
          <span>{children}</span>
          <span
            ref={buttonBackGroundColorRef as any}
            className="bg-palatte-500  w-0 h-full absolute top-0 left-0"
          ></span>
          {iconPos === "right" && <span ref={iconRef as any}>{icon}</span>}
        </button>
      )}
      {toUrl && !disabled && (
        <a
          href={toUrl}
          style={style}
          target={target}
          onMouseLeave={() => buttonOnMouseLeave(iconAnimation)}
          onMouseOver={() => buttonOnMouseEnter(iconAnimation)}
          className={`${buttonClasses} ${className} ${
            color !== "transparent" ? `bg-palatte-${color}` : "bg-opacity-0"
          } text-palatte-${textColor}`}
        >
          {iconPos === "left" && <span ref={iconRef as any}>{icon}</span>}
          <span>{children}</span>
          <span
            ref={buttonBackGroundColorRef as any}
            className="bg-palatte-500  w-0 h-full absolute top-0 left-0"
          ></span>
          {iconPos === "right" && <span ref={iconRef as any}>{icon}</span>}
        </a>
      )}

      {(to || toUrl) && disabled && (
        <div
          style={style}
          className={`${buttonClasses} ${className} ${
            color !== "transparent" ? `bg-palatte-${color}` : "bg-opacity-0"
          } text-palatte-${textColor}`}
        >
          {iconPos === "left" && <span ref={iconRef as any}>{icon}</span>}
          <span>{children}</span>
          <span className="bg-palatte-500  w-0 h-full absolute top-0 left-0"></span>
          {iconPos === "right" && <span ref={iconRef as any}>{icon}</span>}
        </div>
      )}
      {to && !disabled && (
        <Link
          to={to}
          style={style}
          onMouseLeave={() => buttonOnMouseLeave(iconAnimation)}
          onMouseOver={() => buttonOnMouseEnter(iconAnimation)}
          className={`${buttonClasses} ${className} ${
            color !== "transparent" ? `bg-palatte-${color}` : "bg-opacity-0"
          } text-palatte-${textColor}`}
        >
          {iconPos === "left" && <span ref={iconRef as any}>{icon}</span>}
          <span>{children}</span>
          <span
            ref={buttonBackGroundColorRef as any}
            className="bg-palatte-500  w-0 h-full absolute top-0 left-0"
          ></span>
          {iconPos === "right" && <span ref={iconRef as any}>{icon}</span>}
        </Link>
      )}
    </>
  )
}

export default Button
