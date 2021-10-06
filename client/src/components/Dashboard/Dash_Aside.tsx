import React, { CSSProperties, FC, PropsWithChildren } from "react"

interface Props {
  left?: boolean
  right?: boolean
  className?: string
  style?: CSSProperties
}

const Dash_Aside: FC<PropsWithChildren<Props>> = ({
  left = false,
  children,
  right = false,
  className,
  style,
}) => {
  return (
    <>
      {left ? (
        <aside className={className} style={style}>
          {children}
        </aside>
      ) : right ? (
        <aside className={className} style={style}>
          {children}
        </aside>
      ) : null}
    </>
  )
}

export default Dash_Aside
