import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../components/App/InPageMenu"
import ProjectsComponent from "../components/App/Projects"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"

interface QueryTypes extends PageProps {
  data: {
    portfolio: {
      projects: GatsbyTypes.Portfolio_Project[]
    }
  }
}
const Projects: FC<QueryTypes> = ({ data }) => {
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
          <ProjectsComponent data={data.portfolio?.projects} type="2" />
        </TheSection>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    portfolio {
      projects {
        id
        image
        app_url
        type
        name
        github_url
        summary
      }
    }
  }
`
export default Projects
