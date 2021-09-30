import { PageProps } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../components/App/InPageMenu"
import Projects from "../components/App/Projects"
import Skills from "../components/App/Skills"
import TheFooter from "../components/App/TheFooter"
import TheHero from "../components/App/TheHero"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
const Home: FC<PageProps> = props => {
  return (
    <>
      <SEO title="AmirMohammad MirzaeiRad" />
      <Layout>
        <TheHero />
        <TheSection className="sm:hidden" id="sections" name="Sections">
          <InPageMenu pipes="left" style={{ paddingBottom: 25 }} />
        </TheSection>
        <TheSection id="projects" name="Projects">
          <Projects />
        </TheSection>
        <TheSection id="stack" name="Stack">
          <Skills />
        </TheSection>
        <TheFooter id="footer" />
      </Layout>
    </>
  )
}

export default Home
