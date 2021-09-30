import React, { FC, PropsWithChildren } from "react"

interface Props {
  style?: React.CSSProperties
  className?: string
  rtl?: boolean
  pipes?: "both-side" | "left" | "right"
  w?: string
}

const SmallPipe: FC<PropsWithChildren<Props>> = ({
  className,
  pipes = "left",
  rtl = false,
  style,
  w = "6",
  children,
}) => {
  return (
    <div
      style={style}
      className={`flex ${
        rtl && "flex-row-reverse"
      } items-center gap-0 ${className}`}
    >
      {(pipes === "left" || pipes === "both-side") && (
        <div className={`h-pipe-sm md:h-pipe-lg w-${w} bg-palatte-500`}></div>
      )}
      {children}
      {(pipes === "right" || pipes === "both-side") && (
        <div className={`h-pipe-sm md:h-pipe-lg w-${w} bg-palatte-500`}></div>
      )}
    </div>
  )
}

export default SmallPipe
