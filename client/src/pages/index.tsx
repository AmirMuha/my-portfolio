import { PageProps } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../components/App/InPageMenu"
import Projects from "../components/App/Projects"
import Skills from "../components/App/Skills"
import ContactMe from "../components/App/ContactMe"
import TheHero from "../components/App/TheHero"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
const Home: FC<PageProps> = props => {
  return (
    <>
      <SEO titleTemplate="%s" title="AmirMohammad MirzaeiRad" />
      <Layout>
        <TheHero />
        <TheSection
          className="sm:hidden"
          style={{ paddingBottom: 25 }}
          id="what-next"
          name="What Next ?"
        >
          <InPageMenu pipes="left" />
        </TheSection>
        <TheSection id="projects" name="Projects">
          <Projects />
        </TheSection>
        <TheSection id="stack" name="Stack">
          <Skills />
        </TheSection>
        <TheSection
          id="contact-me"
          style={{ paddingBottom: 25 }}
          name="Contact Me"
        >
          <ContactMe id="footer" />
        </TheSection>
        <TheSection
          style={{ marginBottom: 50, paddingBottom: 25 }}
          name="What Now ?"
          id="what-now"
        >
          <InPageMenu pipes="left" />
        </TheSection>
      </Layout>
    </>
  )
}

export default Home
