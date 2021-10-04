import { PageProps } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../../components/App/InPageMenu"
import TheSection from "../../components/App/TheSection"
import Layout from "../../components/Layout"
import { SEO } from "../../components/SEO"
import ProjectsComponent from "../../components/App/Projects"
const Projects: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New Projects To Stack" />
      <Layout nav={false}>
        <TheSection name="What Now ?" id="what-now">
          <InPageMenu pipes="left" style={{ paddingBottom: 25 }} />
        </TheSection>
        <TheSection name="Projects" className="mb-10" id="projects">
          <ProjectsComponent type="2" />
        </TheSection>
      </Layout>
    </>
  )
}

export default Projects
