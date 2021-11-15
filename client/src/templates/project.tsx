import React, { FC } from "react"

import AboutTheProject from "../components/App/AboutTheProject"
import InPageMenu from "../components/App/InPageMenu"
import Layout from "../components/Layout"
import Loading from "../components/UI/Loading"
import { PageProps } from "gatsby"
import QAndA from "../components/App/QAndA"
import { SEO } from "../components/SEO"
import Sketch from "../components/App/Sketch"
import TechItem from "../components/App/TechItem"
import TheSection from "../components/App/TheSection"

interface PageContext {
  project: GatsbyTypes.Portfolio_Project
}
interface Props extends PageProps {
  pageContext: PageContext
}
const Project: FC<Props> = ({ pageContext: { project }}) => {
  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <>
          <SEO title={project.name} />
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
            <TheSection name={project.name} id={project.id}>
              <AboutTheProject data={project} />
            </TheSection>
            <div
              className={
                project.tech_categories?.length > 0
                  ? `sm:grid sm:grid-cols-2 lg:grid-cols-3`
                  : ""
              }
            >
              {project.tech_categories?.length > 0 && (
                <TheSection
                  name="Techs Used"
                  id="techs-used"
                  style={{ paddingBottom: 40 }}
                  textClassName="sm:text-sm"
                  lgText="sm.4"
                >
                  {project.tech_categories.map(t => (
                    <TechItem
                      key={t.id}
                      border={false}
                      style={{ marginLeft: 0 }}
                      data={t as any}
                    />
                  ))}
                </TheSection>
              )}
              {project.questions?.length > 0 && (
                <TheSection
                  name="Q&A"
                  id="Questions-and-answers"
                  className="lg:col-span-2 lg:col-start-2"
                  style={{ paddingBottom: 40, flex: "1 1 0%" }}
                >
                  {project.questions.map(q => (
                    <QAndA key={q.id} data={q} />
                  ))}
                </TheSection>
              )}
            </div>
            {project.sketches?.length > 0 && (
              <TheSection name="Sketches" id="sketches">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {project.sketches.map(s => (
                    <Sketch key={s.id} data={s} />
                  ))}
                </div>
              </TheSection>
            )}
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
