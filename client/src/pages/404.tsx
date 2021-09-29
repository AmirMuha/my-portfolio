import { PageProps } from "gatsby"
import React, { FC } from "react"
import TheHeader from "../components/App/TheHeader"
import Layout from "../components/Layout"

const NotFound: FC<PageProps> = props => {
  return (
    <>
      <TheHeader />
      <Layout></Layout>
    </>
  )
}

export default NotFound
