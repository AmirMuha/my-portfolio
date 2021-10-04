import { PageProps } from "gatsby"
import React, { FC } from "react"
import AboutTheProject from "../components/App/AboutTheProject"
import InPageMenu from "../components/App/InPageMenu"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
import { useQuery, gql, useMutation } from "@apollo/client"
import QAndA from "../components/App/QAndA"
import Sketches from "../components/App/Sketches"
import TechItem from "../components/App/TechItem"
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
          <Layout nav={false}>
            <TheSection
              name="What Now ?"
              id="what-now"
              style={{ paddingBottom: 25 }}
            >
              <InPageMenu pipes="left" />
            </TheSection>
            <TheSection
              name="Name of the project"
              className="mb-10"
              id="name-of-the-project"
            >
              <AboutTheProject />
            </TheSection>
            <TheSection
              name="Techs Used"
              id="techs-used"
              style={{ paddingBottom: 40 }}
            >
              <TechItem data={{}} />
              <TechItem data={{}} />
              <TechItem data={{}} />
            </TheSection>
            <TheSection name="Q&A" id="Questions-and-answers">
              <QAndA />
            </TheSection>
            <TheSection name="Sketches" id="sketches">
              <Sketches />
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
