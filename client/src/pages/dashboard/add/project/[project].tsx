import { PageProps, navigate } from "gatsby"
import React, { FC, useEffect, useState } from "react"
import {
  deleteUnsavedProjectReducer,
  fetchUnsavedProjectsReducer,
} from "../../../../store/unsavedProjectsSclice"
import {
  editNameReducer,
  setStateReducer,
} from "../../../../store/newProjectSlice"
import { useCreateProjectWithRelationsMutation, useMoveFilesFromTempMutation } from "../../../../types/graphql-types"
import { useTheDispatch, useTheSelector } from "../../../../store/store"

import AboutTheProject from "../../../../components/App/AboutTheProject"
import AddSketch from "../../../../components/Dashboard/AddSketch"
import AddTechCategory from "../../../../components/Dashboard/AddTechCategory"
import Alert from "../../../../components/UI/Alert"
import Button from "../../../../components/UI/Button"
import Dash_Layout from "../../../../components/Dashboard/Dash_Layout"
import InBoxLoading from "../../../../components/UI/InBoxLoading"
import QAndA from "../../../../components/App/QAndA"
import QAndA_Add from "../../../../components/Dashboard/Q&A_Add"
import { SEO } from "../../../../components/SEO"
import Sketch from "../../../../components/App/Sketch"
import TechItem from "../../../../components/App/TechItem"
import TheSection from "../../../../components/App/TheSection"
import UnsavedProjects from "../../../../components/Dashboard/UnsavedProjects"
import { createPortal } from "react-dom"
import { useAlert } from "../../../../util/useAlert"
import { useAlertGraphqlError } from "../../../../util/useAlertGraphqlError"
import { useAuth } from "../../../../util/useAuth"

const project: FC<PageProps> = ({ params }) => {
  const {
    isOpen: alertIsOpen,
    message: alertMessage,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const { data: isLoggedIn, error: loginCheckError } = useAuth()
  if (!isLoggedIn && loginCheckError) {
    navigate("/dashboard/auth/")
    return null
  }
  const projectNameParam = params.project
  const dispatch = useTheDispatch()
  const data = useTheSelector(state => state.newProject)
  const [newProjectName, setNewProjectName] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [mutateFilesChangePath, {error: moveFilesError,loading: moveFilesLoading}] = useMoveFilesFromTempMutation()
  const [mutateNewProject, { error, loading }] =
    useCreateProjectWithRelationsMutation()
  useAlertGraphqlError(error, loading, setAlert, () => setIsLoading(false))
  useAlertGraphqlError(moveFilesError, moveFilesLoading, setAlert, () => setIsLoading(false))
  useEffect(() => {
    setNewProjectName(projectNameParam)
    dispatch(setStateReducer({ name: projectNameParam }))
    dispatch(fetchUnsavedProjectsReducer)
  }, [projectNameParam])
  const [isNameChanged, setIsNameChanged] = useState<boolean>(false)

  const saveTheNewProject = () => {
    setIsLoading(true)
    const errors: string[] = []
    for (const e in data) {
      if (data[e] === undefined || data[e] === "") errors.push(e)
    }
    if (errors.length > 0) {
      setIsLoading(false)
      setAlert({
        isOpen: true,
        title: "Error",
        message: `The folowing fields are required: ${errors.join(", ")}.`,
      })
    } else {
      mutateNewProject({
        variables: {
          name: data.name,
          app_url: data.app_url,
          github_url: data.github_url,
          summary: data.summary,
          image: data.image,
          type: data.type,
          questions: data.questions.map(q => ({
            question: q.question,
            answer: q.answer,
          })),
          sketches: data.sketches.map(s => ({
            title: s.title,
            summary: s.summary,
            description: s.description,
            downloadables: s.downloadables,
            image: s.image,
          })),
          techCategories: data.tech_categories.map(tc => ({
            name: tc.name,
            techs: tc.techs,
          })),
        } as any,
      })
        .then(() => {
          mutateFilesChangePath({
            variables: {
              filenames: [
                data.image,
                ...data.sketches.map(s => s.image),
                ...data.sketches.map(s => s.downloadables),
              ],
            },
          }).then(() => {
            dispatch(
              deleteUnsavedProjectReducer({
                name: data.name,
              })
            )
            navigate("/dashboard")
          }).catch(() => {})
        })
        .catch(() => {})
    }
  }

  const getNewProjectName = (name: string) => {
    window.history.replaceState(
      "",
      "",
      `${window.location.origin}/dashboard/add/project/${name}`
    )
    if (isNameChanged) {
      setIsNameChanged(false)
    }
    setNewProjectName(name)
  }

  return (
    <>
      {isLoading && (
        <>
          {createPortal(
            <div className="fixed inset-0">
              <InBoxLoading />
            </div>,
            document.body
          )}
        </>
      )}
      {alertIsOpen && (
        <Alert
          title={alertTitle}
          onClose={() => setAlert({ isOpen: false })}
          message={alertMessage}
          backdrop
        />
      )}
      <SEO title={`Adding New Project`} />
      <Dash_Layout>
        <UnsavedProjects isNameChanged={isNameChanged} param={newProjectName} />
        <TheSection
          titleEditable
          getTitleValue={v => getNewProjectName(v)}
          titleValue={newProjectName}
          onSaveTitleValue={v => {
            setIsNameChanged(true)
            dispatch(editNameReducer({ name: v, prevName: data.name }))
          }}
          name={newProjectName}
          id="about-the-project"
        >
          <AboutTheProject editable mode="ADD" data={data as any} />
        </TheSection>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <TheSection
            name="Techs Used"
            id="techs-used"
            style={{ paddingBottom: 25 }}
            textClassName="sm:text-sm"
            lgText="sm.4"
          >
            <AddTechCategory mode="ADD" />
            {data.tech_categories?.length > 0 &&
              data.tech_categories.map((t, i) => (
                <TechItem
                  editable
                  mode="ADD"
                  key={t?.id ? t.id : i}
                  border={false}
                  style={{ marginLeft: 0 }}
                  data={t as any}
                />
              ))}
          </TheSection>
          <TheSection
            name="Q&A"
            textClassName="sm:text-sm"
            lgText="sm.4"
            id="Questions-and-answers"
            className="lg:col-span-2 lg:col-start-2"
            style={{ paddingBottom: 25, flex: "1 1 0%" }}
          >
            <QAndA_Add mode="ADD" />
            {data.questions?.length > 0 &&
              data.questions.map(q => (
                <QAndA mode="ADD" editable data={q} key={q.id} />
              ))}
          </TheSection>
        </div>
        <TheSection name="Sketches" id="sketches" style={{ marginBottom: 25 }}>
          <AddSketch mode="ADD" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
            {data.sketches?.length > 0 &&
              data.sketches.map(s => (
                <Sketch mode="ADD" editable data={s} key={s.id} />
              ))}
          </div>
        </TheSection>
        <div className="mb-6">
          <Button
            className="w-full"
            normal
            outline
            fill
            borderColor="500"
            color="100"
            textColor="500"
            onClick={saveTheNewProject}
          >
            Save
          </Button>
        </div>
      </Dash_Layout>
    </>
  )
}

export default project
