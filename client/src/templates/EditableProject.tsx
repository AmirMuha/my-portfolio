import { useMutation, useQuery } from "@apollo/client"
import { navigate, PageProps } from "gatsby"
import React, { FC, useEffect, useState } from "react"
import AboutTheProject from "../components/App/AboutTheProject"
import QAndA from "../components/App/QAndA"
import Sketch from "../components/App/Sketch"
import TechItem from "../components/App/TechItem"
import TheSection from "../components/App/TheSection"
import AddSketch from "../components/Dashboard/AddSketch"
import AddTechCategory from "../components/Dashboard/AddTechCategory"
import Dash_Layout from "../components/Dashboard/Dash_Layout"
import QAndA_Add from "../components/Dashboard/Q&A_Add"
import { SEO } from "../components/SEO"
import Alert from "../components/UI/Alert"
import Button from "../components/UI/Button"
import Confirm from "../components/UI/Confirm"
import Loading from "../components/UI/Loading"
import {
  DeleteProjectMutation,
  UpdateProjectNameMutation,
} from "../util/mutations"
import { QuerySingleProjectWithRelations } from "../util/queries"
import { useAlert } from "../util/useAlert"

interface PageContext {
  project: GatsbyTypes.Portfolio_Project
}
interface Props extends PageProps {
  data: {
    file: GatsbyTypes.File
  }
  pageContext: PageContext
}
const EditableProject: FC<Props> = ({ pageContext: { project } }) => {
  const [mutateProjectDeletion] = useMutation(DeleteProjectMutation)
  const [mutateProject] = useMutation(UpdateProjectNameMutation)
  const {
    data,
    error: projectQueringError,
    loading: isLoadingProject,
  } = useQuery<{ project: GatsbyTypes.Portfolio_Project }>(
    QuerySingleProjectWithRelations,
    {
      variables: { id: project.id },
    }
  )
  const { isOpen: isErrorOpen, message: errorMessage, setAlert } = useAlert()
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>(
    data?.project.name || ""
  )
  useEffect(() => {
    if (data && !projectQueringError && !isLoadingProject) {
      setProjectName(data.project.name)
    }
  })
  const deleteProject = (v: boolean) => {
    if (v) {
      mutateProjectDeletion({
        variables: {
          id: project.id,
        },
      })
        .then(() => {
          window.location.href = window.location.origin + "/dashboard/"
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Couldn't delete the Project Name please try again later.",
          })
        })
    }
  }
  const updateProjectName = (v: string) => {
    mutateProject({
      variables: {
        name: projectName,
        id: project.id,
      },
    })
      .then(res => {
        setProjectName(res.data.updateProject.name)
      })
      .catch(e => {
        setAlert({
          isOpen: true,
          message: e.errors
            ? e.errors[0].message
            : e.message ||
              "Couldn't update the Project Name please try again later.",
        })
      })
  }
  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <>
          {isErrorOpen && (
            <Alert
              header
              title="Error"
              message={errorMessage}
              autoClose={5}
              onClose={() => setAlert({ isOpen: false, message: "" })}
            />
          )}
          <SEO title={`Editing ${data?.project.name}`} />
          {!isLoadingProject && (
            <Dash_Layout>
              {data?.project && (
                <>
                  <TheSection
                    titleEditable
                    titleValue={projectName}
                    getTitleValue={v => setProjectName(v)}
                    onSaveTitleValue={v => updateProjectName(v)}
                    name={projectName}
                    id={data?.project.id}
                  >
                    <AboutTheProject
                      editable
                      data={data?.project}
                      image={data?.project.image!}
                    />
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
                      {data?.project.tech_categories?.length > 0 &&
                        data?.project.tech_categories.map(t => (
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
                      {data?.project.questions?.length > 0 &&
                        data?.project.questions.map(q => (
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
                      {data?.project.sketches?.length > 0 &&
                        data?.project.sketches.map(s => (
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
                        title={`Deleting ${data?.project.name}`}
                        onClose={() => setIsDeleteBoxOpen(false)}
                        confirmButtonText="Delete"
                        text={`Are you sure you want to delete ${data?.project.name} ?`}
                        getValue={v => deleteProject(v)}
                      ></Confirm>
                    )}
                  </TheSection>
                </>
              )}
            </Dash_Layout>
          )}
        </>
      )}
    </>
  )
}
export default EditableProject
