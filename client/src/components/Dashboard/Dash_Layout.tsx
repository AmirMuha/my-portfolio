import React, { CSSProperties, FC, PropsWithChildren } from "react"
import Dash_Header from "./Dash_Header"

interface Props {
  className?: string
  onMenuClick?: () => void
  onMessagesClick?: () => void
  style?: CSSProperties
}

const Dash_Layout: FC<PropsWithChildren<Props>> = ({
  onMessagesClick,
  children,
  className,
  style,
  onMenuClick,
}): React.ReactElement => {
  return (
    <div className={`${className}`} style={style}>
      <Dash_Header
        onMenuClick={onMenuClick}
        onMessagesClick={onMessagesClick}
      />
      <main className="mx-auto container w-full">{children}</main>
    </div>
  )
}

export default Dash_Layout
