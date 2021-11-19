import { PageProps, navigate } from "gatsby"
import React, { FC, useEffect, useState } from "react"
import {
  useDeleteFilesMutation,
  useDeleteProjectMutation,
  useQuerySingleProjectWithRelationsQuery,
  useUpdateProjectNameMutation
} from "../../../types/graphql-types"
import { useTheDispatch, useTheSelector } from "../../../store/store"

import AboutTheProject from "../../../components/App/AboutTheProject"
import AddSketch from "../../../components/Dashboard/AddSketch"
import AddTechCategory from "../../../components/Dashboard/AddTechCategory"
import Alert from "../../../components/UI/Alert"
import Button from "../../../components/UI/Button"
import Confirm from "../../../components/UI/Confirm"
import Dash_Layout from "../../../components/Dashboard/Dash_Layout"
import Loading from "../../../components/UI/Loading"
import QAndA from "../../../components/App/QAndA"
import QAndA_Add from "../../../components/Dashboard/Q&A_Add"
import { SEO } from "../../../components/SEO"
import Sketch from "../../../components/App/Sketch"
import TechItem from "../../../components/App/TechItem"
import TheSection from "../../../components/App/TheSection"
import { setProjectStateReducer } from "../../../store/editProject"
import { useAlert } from "../../../util/useAlert"
import { useAlertGraphqlError } from "../../../util/useAlertGraphqlError"
import { useAuth } from "../../../util/useAuth"

const isBrowser = typeof window !== "undefined"
interface PageContext {
  project: GatsbyTypes.Portfolio_Project
}
interface Props extends PageProps {
  pageContext: PageContext
}
const EditableProject: FC<Props> = ({ params: { projectId } }) => {
  const { data: isLoggedIn, error: loginCheckError } = useAuth()
  if (!isLoggedIn && loginCheckError) {
    navigate("/dashboard/auth/")
    return null
  }
  const data = useTheSelector(state => state.editProject)
  const dispatchEditProjectStore = useTheDispatch()
  const [
    mutateDeleteImages,
    { error: deleteFilesError, loading: deleteFilesLoading },
  ] = useDeleteFilesMutation()
  const [
    mutateProjectDeletion,
    { error: deleteProjectError, loading: deleteProjectLoading },
  ] = useDeleteProjectMutation()
  const [
    mutateProject,
    { error: updateProjectNameError, loading: updateProjectNameLoading },
  ] = useUpdateProjectNameMutation()
  const {
    data: fetchedData,
    error: projectQueringError,
    loading: isLoadingProject,
  } = useQuerySingleProjectWithRelationsQuery({
    variables: { id: projectId },
  })
  const { isOpen: isErrorOpen, message: errorMessage, setAlert } = useAlert()
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState<boolean>(false)
  const [projectName, setProjectName] = useState<string>(
    fetchedData?.project?.name || ""
  )
  useAlertGraphqlError(deleteProjectError, deleteProjectLoading, setAlert)
  useAlertGraphqlError(deleteFilesError, deleteFilesLoading, setAlert)
  useAlertGraphqlError(
    updateProjectNameError,
    updateProjectNameLoading,
    setAlert
  )

  useEffect(() => {
    if (
      fetchedData &&
      !projectQueringError &&
      !isLoadingProject &&
      fetchedData.project
    ) {
      dispatchEditProjectStore(
        setProjectStateReducer({
          data: {
            app_url: fetchedData.project.app_url,
            github_url: fetchedData.project.github_url,
            type: fetchedData.project.type,
            name: fetchedData.project.name,
            id: fetchedData.project.id,
            image: fetchedData.project.image,
            summary: fetchedData.project.summary,
            questions: fetchedData.project.questions as any,
            sketches: fetchedData.project.sketches as any,
            tech_categories: fetchedData.project.tech_categories as any,
          },
        })
      )
      setProjectName(fetchedData.project.name)
    }
  }, [isLoadingProject])

  const deleteProject = (v: boolean) => {
    if (v && fetchedData && fetchedData.project) {
      mutateProjectDeletion({
        variables: {
          id: projectId,
        },
      }).then(() => {
        mutateDeleteImages({
          variables: {
            filenames: [
              fetchedData?.project!.image,
              ...(fetchedData?.project?.sketches.map(s => s.image) || []),
              ...(fetchedData?.project?.sketches.map(s => s.downloadables) ||
                []),
            ],
            isTemp: false,
          },
        })
          .then(() => {
            if(isBrowser) {
              window.location.href = window.location.origin + "/dashboard/"
            }
          })
          .catch(() => {})
      })
    }
  }

  const updateProjectName = () => {
    mutateProject({
      variables: {
        name: projectName,
        id: projectId,
      },
    }).then(res => {
      if (res.data?.updateProject) {
        setProjectName(res.data.updateProject.name)
      } else {
        setAlert({
          isOpen: true,
          title: "Error",
          message: "Unknown Error: Something went wrong.",
        })
      }
    })
  }

  return (
    <>
      {isLoadingProject ? (
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
          <SEO title={`Editing ${data.name}`} />
          {!isLoadingProject && (
            <Dash_Layout>
              {data && (
                <>
                  <TheSection
                    titleEditable
                    titleValue={projectName}
                    getTitleValue={v => setProjectName(v)}
                    onSaveTitleValue={updateProjectName}
                    name={projectName}
                    id={data.id}
                  >
                    <AboutTheProject editable data={data as any} />
                  </TheSection>
                  <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    <TheSection
                      name="Techs Used"
                      id="techs-used"
                      style={{ paddingBottom: 25 }}
                      textClassName="sm:text-sm"
                      lgText="sm.4"
                    >
                      <AddTechCategory projectId={projectId} />
                      {data.tech_categories?.length > 0 &&
                        data.tech_categories.map(t => (
                          <TechItem
                            editable
                            mode="EDIT"
                            key={t.id}
                            border={false}
                            style={{ marginLeft: 0 }}
                            data={t as any}
                          />
                        ))}
                    </TheSection>
                    <TheSection
                      name="Q&A"
                      id="Questions-and-answers"
                      className="lg:col-span-2 lg:col-start-2"
                      style={{ paddingBottom: 25, flex: "1 1 0%" }}
                    >
                      <QAndA_Add projectId={projectId} />
                      {data.questions?.length > 0 &&
                        data.questions.map(q => (
                          <QAndA editable data={q} key={q.id} />
                        ))}
                    </TheSection>
                  </div>
                  <TheSection
                    name="Sketches"
                    id="sketches"
                    style={{ marginBottom: 25 }}
                  >
                    <AddSketch projectId={projectId} />
                    {}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
                      {data.sketches?.length > 0 &&
                        data.sketches.map(s => (
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
                        title={`Deleting ${data.name}`}
                        onClose={() => setIsDeleteBoxOpen(false)}
                        confirmButtonText="Delete"
                        text={`Are you sure you want to delete ${data.name} ?`}
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
