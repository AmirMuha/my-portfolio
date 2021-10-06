import React, { FC, PropsWithChildren, ReactElement } from "react"
import TheHeader from "./App/TheHeader"

interface Props {
  nav?: boolean
  header?: {
    brand?: string
    page?: string
  }
}

const Layout: FC<Props> = ({
  children,
  nav = true,
  header,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <>
      <TheHeader brand={header?.brand} page={header?.page} nav={nav} />
      <div className="items-center container mx-auto">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
