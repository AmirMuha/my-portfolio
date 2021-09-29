import { PageProps } from "gatsby"
import React, { FC } from "react"
import Projects from "../components/App/Projects"
import TheHero from "../components/App/TheHero"
import TheSetion from "../components/App/TheSetion"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
const Home: FC<PageProps> = props => {
  return (
    <>
      <SEO title="AmirMohammad MirzaeiRad" />
      <Layout>
        <TheHero />
        <TheSetion name="Projects">
          <Projects />
        </TheSetion>
      </Layout>
    </>
  )
}

export default Home
