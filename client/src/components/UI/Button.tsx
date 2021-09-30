import gsap from "gsap"
import React, { FC, PropsWithChildren, ReactElement, useRef } from "react"
import {
  Button as ButtonClass,
  Button_Outlined,
  Button_Underlined,
  Button_Pulse,
} from "./styles/Button.module.css"

interface Props {
  onClick?(): void
  outline?: boolean
  underline?: boolean
  pulse?: boolean
  className?: string
  icon?: JSX.Element
  iconAnimation?: IconAnimations
  target?: "_blank" | "_self" | "_parent" | "_top"
  fill?: boolean
  color?: "100" | "200" | "300" | "400" | "500"
  borderColor?: "100" | "200" | "300" | "400" | "500"
  textColor?: "100" | "200" | "300" | "400" | "500"
  toUrl?: string
  style?: React.CSSProperties
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
  color = "500",
  borderColor = "500",
  textColor = "100",
  pulse = false,
  fill = false,
  className = "",
  target = "_self",
  toUrl,
  style = {},
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
      ` bg-palatte-${color} text-palatte-${textColor} border-palatte-${borderColor}`
  } ${
    underline &&
    Button_Underlined +
      ` bg-palatte-${color} border-palatte-${borderColor} text-palatte-${textColor}`
  } ${pulse && Button_Pulse} ${
    icon && "flex overflow-hidden justify-center items-center gap-2 relative"
  }`
  return (
    <>
      {!toUrl ? (
        <button
          onClick={onClick}
          style={style}
          onMouseLeave={() => buttonOnMouseLeave(iconAnimation)}
          onMouseEnter={() => buttonOnMouseEnter(iconAnimation)}
          className={`${buttonClasses} bg-palatte-${color} text-palatte-${textColor}`}
        >
          <span>{children}</span>
          <span
            ref={buttonBackGroundColorRef as any}
            className="bg-palatte-500  w-0 h-full absolute top-0 left-0"
          ></span>
          <span ref={iconRef as any}>{icon}</span>
        </button>
      ) : (
        <a
          href={toUrl}
          style={style}
          target={target}
          onMouseLeave={() => buttonOnMouseLeave(iconAnimation)}
          onMouseEnter={() => buttonOnMouseEnter(iconAnimation)}
          className={`${buttonClasses} bg-palatte-${color} text-palatte-${textColor}`}
        >
          <span>{children}</span>
          <span
            ref={buttonBackGroundColorRef as any}
            className="bg-palatte-500  w-0 h-full absolute top-0 left-0"
          ></span>
          <span ref={iconRef as any}>{icon}</span>
        </a>
      )}
    </>
  )
}

export default Button
