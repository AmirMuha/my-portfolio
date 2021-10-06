import { gql, useQuery } from "@apollo/client"
import { PageProps } from "gatsby"
import React, { FC } from "react"
import AboutTheProject from "../components/App/AboutTheProject"
import InPageMenu from "../components/App/InPageMenu"
import QAndA from "../components/App/QAndA"
import Sketch from "../components/App/Sketch"
import TechItem from "../components/App/TechItem"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
const query = gql`
  query {
    me {
      id
    }
  }
`

interface PageContext {
  project: GatsbyTypes.Portfolio_Project
}
interface Props extends PageProps {
  pageContext: PageContext
}
const Project: FC<Props> = ({ pageContext: { project } }) => {
  const { data, error, loading } = useQuery<GatsbyTypes.Portfolio_About>(query)
  if (error) {
    console.log(error)
  }
  console.log(data)
  console.log(project)
  return (
    <>
      {loading ? (
        <div>Content is loading</div>
      ) : (
        <>
          <SEO title="Adding New Project To Stack" />
          <Layout
            nav={false}
            header={{ page: "project", brand: "AM.PROJECTS" }}
          >
            <TheSection
              id="what-now"
              name="What Now ?"
              style={{ paddingBottom: 25 }}
            >
              <InPageMenu pipes="left" />
            </TheSection>
            <TheSection name="Name of the project" id="name-of-the-project">
              <AboutTheProject />
            </TheSection>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
              <TheSection
                name="Techs Used"
                id="techs-used"
                style={{ paddingBottom: 40 }}
              >
                <TechItem border={false} style={{ marginLeft: 0 }} data={{}} />
                <TechItem border={false} style={{ marginLeft: 0 }} data={{}} />
                <TechItem border={false} style={{ marginLeft: 0 }} data={{}} />
              </TheSection>
              <TheSection
                name="Q&A"
                id="Questions-and-answers"
                className="lg:col-span-2 lg:col-start-2"
                style={{ paddingBottom: 40, flex: "1 1 0%" }}
              >
                <QAndA />
                <QAndA />
                <QAndA />
              </TheSection>
            </div>
            <TheSection name="Sketches" className="lg:hidden" id="sketches">
              <Sketch />
              <Sketch />
              <Sketch />
            </TheSection>
            <TheSection
              name="What Next ?"
              id="what-next"
              className="mb-10"
              style={{ paddingBottom: 25 }}
            >
              <InPageMenu pipes="left" />
            </TheSection>
          </Layout>
        </>
      )}
    </>
  )
}

export default Project
