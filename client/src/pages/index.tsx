import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
const Home: FC<PageProps> = (_, context) => {
  console.log(context)
  return (
    <>
      <SEO title="AmirMohammad MirzaeiRad" />
      <Layout></Layout>
    </>
  )
}

export default Home
