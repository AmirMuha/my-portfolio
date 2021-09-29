import React, { FC, PropsWithChildren, ReactElement } from "react"
import TheHeader from "./App/TheHeader"

interface Props {}

const Layout: FC<Props> = ({
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <>
      <TheHeader />
      <div className="items-center container mx-auto">
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
