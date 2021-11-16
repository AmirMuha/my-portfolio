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
      <div className="items-center px-5 sm:px-5 md:px-10 mx-auto container">
        <main className="">{children}</main>
      </div>
    </>
  )
}

export default Layout
