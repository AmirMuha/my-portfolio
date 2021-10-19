import { gql, useQuery } from "@apollo/client"
import { graphql, PageProps } from "gatsby"
import React, { FC, useState } from "react"
import AboutTheProject from "../components/App/AboutTheProject"
import QAndA from "../components/App/QAndA"
import Sketch from "../components/App/Sketch"
import TechItem from "../components/App/TechItem"
import TheSection from "../components/App/TheSection"
import AddSketch from "../components/Dashboard/AddSketch"
import AddTechCategory from "../components/Dashboard/AddTechCategory"
import Dash_Layout from "../components/Dashboard/Dash_Layout"
import { SEO } from "../components/SEO"
import Button from "../components/UI/Button"
import Confirm from "../components/UI/Confirm"
import QAndA_Add from "../components/Dashboard/Q&A_Add"
import Loading from "../components/UI/Loading"
import { getImage } from "gatsby-plugin-image"

interface PageContext {
  project: GatsbyTypes.Portfolio_Project
}
interface Props extends PageProps {
  data: {
    file: GatsbyTypes.File
  }
  pageContext: PageContext
}
const EditableProject: FC<Props> = ({ pageContext: { project }, data }) => {
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>("PROJECT_NAME")
  const image = getImage(data.file?.childImageSharp?.gatsbyImageData!)
  const deleteProject = (v: boolean) => {
    console.log(v ? "Deleting  project." : "Not yet.")
  }
  const updateProjectName = (v: string) => [
    console.log("updating project name"),
  ]
  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <>
          <SEO title="Adding PROJECT_NAME" />
          <Dash_Layout>
            <TheSection
              titleEditable
              titleValue={projectName}
              getTitleValue={v => setProjectName(v)}
              onSaveTitleValue={v => updateProjectName(v)}
              name={project.name}
              id={project.id}
            >
              <AboutTheProject editable data={project} image={image!} />
            </TheSection>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
              <TheSection
                name="Techs Used"
                id="techs-used"
                style={{ paddingBottom: 25 }}
                textClassName="sm:text-sm"
                lgText="sm.4"
              >
                <AddTechCategory />
                {project.tech_categories?.length > 0 &&
                  project.tech_categories.map(t => (
                    <TechItem
                      editable
                      key={t.id}
                      border={false}
                      style={{ marginLeft: 0 }}
                      data={t}
                    />
                  ))}
              </TheSection>
              <TheSection
                name="Q&A"
                id="Questions-and-answers"
                className="lg:col-span-2 lg:col-start-2"
                style={{ paddingBottom: 25, flex: "1 1 0%" }}
              >
                <QAndA_Add />
                {project.questions?.length > 0 &&
                  project.questions.map(q => (
                    <QAndA editable data={q} key={q.id} />
                  ))}
              </TheSection>
            </div>
            <TheSection
              name="Sketches"
              id="sketches"
              style={{ marginBottom: 25 }}
            >
              <AddSketch data={{}} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
                {project.sketches?.length > 0 &&
                  project.sketches.map(s => (
                    <Sketch editable data={s} key={s.id} />
                  ))}
              </div>
            </TheSection>
            <TheSection
              name="Delete The Project"
              id="delete-the-project"
              style={{ marginBottom: 25, paddingBottom: 25 }}
            >
              <div className="flex items-center max-w-lg gap-2 w-full ml-5">
                <p className="flex-grow font-bold text-sm.4">
                  Do you want to delete this project ?
                </p>
                <Button onClick={() => setIsDeleteBoxOpen(true)} normal>
                  Delete
                </Button>
              </div>
              {isDeleteBoxOpen && (
                <Confirm
                  header
                  title={`Deleting ${project.name}`}
                  onClose={() => setIsDeleteBoxOpen(false)}
                  confirmButtonText="Delete"
                  text={`Are you sure you want to delete ${project.name} ?`}
                  getValue={v => deleteProject(v)}
                ></Confirm>
              )}
            </TheSection>
          </Dash_Layout>
        </>
      )}
    </>
  )
}
export const queryImage = graphql`
  query EditProjectImage($image: String) {
    file(name: { eq: $image }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
export default EditableProject
