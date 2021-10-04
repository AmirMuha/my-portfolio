import React, { FC, PropsWithChildren, ReactElement } from "react"
import TheHeader from "./App/TheHeader"

interface Props {
  nav?: boolean
}

const Layout: FC<Props> = ({
  children,
  nav = true,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <>
      <TheHeader nav={nav} />
      <div className="items-center container mx-auto">
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
