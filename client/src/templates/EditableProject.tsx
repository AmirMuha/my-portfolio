import { gql, useQuery } from "@apollo/client"
import { PageProps } from "gatsby"
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
const EditableProject: FC<Props> = ({ pageContext: { project } }) => {
  const { data, error, loading } = useQuery<GatsbyTypes.Portfolio_About>(query)
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>("PROJECT_NAME")
  if (error) {
    console.log(error)
  }
  console.log(data)
  console.log(project)
  const deleteProject = (v: boolean) => {
    console.log(v ? "Deleting  project." : "Not yet.")
  }
  const updateProjectName = (v: string) => [
    console.log("updating project name"),
  ]
  return (
    <>
      {loading ? (
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
              name="Name of the project"
              id="name-of-the-project"
            >
              <AboutTheProject editable />
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
                <TechItem
                  editable
                  border={false}
                  style={{ marginLeft: 0 }}
                  data={{}}
                />
                <TechItem
                  editable
                  border={false}
                  style={{ marginLeft: 0 }}
                  data={{}}
                />
                <TechItem
                  editable
                  border={false}
                  style={{ marginLeft: 0 }}
                  data={{}}
                />
              </TheSection>
              <TheSection
                name="Q&A"
                id="Questions-and-answers"
                className="lg:col-span-2 lg:col-start-2"
                style={{ paddingBottom: 25, flex: "1 1 0%" }}
              >
                <QAndA_Add />
                <QAndA editable />
                <QAndA editable />
                <QAndA editable />
              </TheSection>
            </div>
            <TheSection
              name="Sketches"
              id="sketches"
              style={{ marginBottom: 25 }}
            >
              <AddSketch data={{}} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
                <Sketch editable />
                <Sketch editable />
                <Sketch editable />
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
                  title="Deleting PROJECT_NAME"
                  onClose={() => setIsDeleteBoxOpen(false)}
                  confirmButtonText="Delete"
                  text="Are you sure you want to delete PROJECT_NAME ?"
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

export default EditableProject
