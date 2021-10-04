import React, { CSSProperties, FC, PropsWithChildren } from "react"

interface Props {
  style?: React.CSSProperties
  className?: string
  rtl?: boolean
  pipes?: "both-side" | "left" | "right"
  w?: string
  pipeStyle?: CSSProperties
  pipeClassName?: string
}

const SmallPipe: FC<PropsWithChildren<Props>> = ({
  className,
  pipes = "left",
  rtl = false,
  style,
  w = "6",
  children,
  pipeStyle,
  pipeClassName,
}) => {
  return (
    <div
      className={`flex ${className} ${
        rtl && "flex-row-reverse"
      } items-center gap-0`}
    >
      {(pipes === "left" || pipes === "both-side") && (
        <div
          style={pipeStyle}
          className={`${pipeClassName} h-pipe-sm md:h-pipe-lg w-${w} bg-palatte-500`}
        ></div>
      )}
      {children}
      {(pipes === "right" || pipes === "both-side") && (
        <div
          style={pipeStyle}
          className={`${pipeClassName} h-pipe-sm md:h-pipe-lg w-${w} bg-palatte-500`}
        ></div>
      )}
    </div>
  )
}

export default SmallPipe
