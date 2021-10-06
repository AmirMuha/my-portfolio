import { PageProps } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../components/App/InPageMenu"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
import ProjectsComponent from "../components/App/Projects"
const Projects: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New Projects To Stack" />
      <Layout nav={false} header={{ brand: "AM.PORTFOLIO", page: "projects" }}>
        <TheSection
          name="What Now ?"
          style={{ paddingBottom: 25 }}
          id="what-now"
        >
          <InPageMenu pipes="left" />
        </TheSection>
        <TheSection name="Projects" className="mb-10" id="projects">
          <ProjectsComponent type="2" />
        </TheSection>
      </Layout>
    </>
  )
}

export default Projects
