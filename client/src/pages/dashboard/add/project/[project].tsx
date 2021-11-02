import {
  CreateManySketchMutation,
  CreateProjectMutation,
} from "../../../../util/mutations"
import {
  NewProjectState,
  UNSAVED_PROJECTS,
  editNameReducer,
  setStateReducer,
} from "../../../../store/newProjectSlice"
import React, { FC, useEffect, useState } from "react"
import { useTheDispatch, useTheSelector } from "../../../../store/store"

import AboutTheProject from "../../../../components/App/AboutTheProject"
import AddSketch from "../../../../components/Dashboard/AddSketch"
import AddTechCategory from "../../../../components/Dashboard/AddTechCategory"
import Alert from "../../../../components/UI/Alert"
import Button from "../../../../components/UI/Button"
import Dash_Layout from "../../../../components/Dashboard/Dash_Layout"
import Loading from "../../../../components/UI/Loading"
import { PageProps } from "gatsby"
import QAndA from "../../../../components/App/QAndA"
import QAndA_Add from "../../../../components/Dashboard/Q&A_Add"
import { SEO } from "../../../../components/SEO"
import Sketch from "../../../../components/App/Sketch"
import TechItem from "../../../../components/App/TechItem"
import TheSection from "../../../../components/App/TheSection"
import { useAlert } from "../../../../util/useAlert"
import { useMutation } from "@apollo/client"

const project: FC<PageProps> = ({ children, params, location }) => {
  const {
    isOpen: alertIsOpen,
    message: alertMessage,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const projectNameParam = params.project
  const dispatch = useTheDispatch()
  const data = useTheSelector(state => state.newProject)
  const [newProjectName, setNewProjectName] = useState("")
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [mutateManySketch] = useMutation(CreateManySketchMutation)
  const [mutateNewProject] = useMutation<
    GatsbyTypes.Portfolio_Project,
    GatsbyTypes.Portfolio_ProjectCreateInput
  >(CreateProjectMutation)
  const [unsavedProjects, setUnsavedProjects] = useState<NewProjectState[]>([])
  const fetchPreviouslyEditingProject = () => {
    const fetchUnsavedProjects = localStorage.getItem(UNSAVED_PROJECTS)
    if (fetchUnsavedProjects) {
      const convertedFetchUnsavedProjects = JSON.parse(fetchUnsavedProjects)
      let fetchUnsavedProjectsArray: NewProjectState[] = []
      for (const unsp in convertedFetchUnsavedProjects) {
        fetchUnsavedProjectsArray.push(
          convertedFetchUnsavedProjects[unsp] as any
        )
      }
      setUnsavedProjects(fetchUnsavedProjectsArray)
    }
  }
  useEffect(() => {
    setNewProjectName(projectNameParam)
    dispatch(setStateReducer({ name: projectNameParam }))
    fetchPreviouslyEditingProject()
  }, [projectNameParam])
  const deleteProject = (v: boolean) => {
    setIsLoading(true)
    // if (v) {

    // }
  }

  const saveTheNewProject = () => {
    console.log(data)
    setIsLoading(true)
    const errors: string[] = []
    for (const e in data) {
      if (data[e] === undefined || data[e] === "") errors.push(e)
    }
    if (errors.length > 0) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: `The folowing fields are required: ${errors.join(", ")}.`,
      })
      setIsLoading(false)
      return
    }
    mutateNewProject({
      variables: {
        name: data.name,
        summary: data.summary,
        image: data.image,
        type: data.type,
        app_url: data.app_url,
        github_url: data.github_url,
      },
    } as any)
      .then(res => {
        if (data.sketches.length > 0) {
          mutateManySketch({
            variables: {
              data: data.sketches.map(s => ({
                title: s.title,
                download_link: s.download_link,
                summary: s.summary,
                description: s.description,
                image: s.image,
                project_id: (res.data as any).createProject?.id,
              })),
            },
          }).catch(e => {
            setAlert({
              isOpen: true,
              title: "Error",
              message: e.errors
                ? e.errors[0].message
                : e.message ||
                  "Couldn't create some or all new sketches,please try again later.",
            })
          })
        }
      })
      .catch(e => {
        setAlert({
          isOpen: true,
          title: "Error",
          message: e.errors
            ? e.errors[0].message
            : e.message ||
              "Couldn't create the project, something went wrong, please try again later.",
        })
        setIsLoading(false)
      })
  }

  return (
    <>
      {isLoading && <Loading />}
      {alertIsOpen && (
        <Alert
          title={alertTitle}
          onClose={() => setAlert({ isOpen: false })}
          message={alertMessage}
        />
      )}
      <SEO title={`Adding New Project`} />
      <Dash_Layout>
        {unsavedProjects.length > 0 && (
          <TheSection
            name="Pick Up Where You Left"
            id="pick-up-where-you-left"
            style={{ paddingBottom: 25 }}
            textClassName="sm:text-sm"
          >
            <div className="mx-5">
              <p>Projects you've been working on and haven't saved yet :</p>
              <div className="m-2">
                <ul className="flex flex-wrap gap-2">
                  {unsavedProjects.map(p => (
                    <li className="list-none my-1" key={p.name}>
                      <Button
                        to={`/dashboard/add/project/${p.name}`}
                        outline
                        color="200"
                        textColor="500"
                        borderColor="500"
                      >
                        {p.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TheSection>
        )}
        <TheSection
          titleEditable
          getTitleValue={v => {
            window.history.replaceState(
              "",
              "",
              `${window.location.origin}/dashboard/add/project/${v}`
            ),
              setNewProjectName(v)
          }}
          titleValue={newProjectName}
          onSaveTitleValue={v => {
            fetchPreviouslyEditingProject()
            dispatch(editNameReducer({ name: v, prevName: data.name }))
          }}
          name={newProjectName}
          id="about-the-project"
        >
          <AboutTheProject
            editable
            mode="ADD"
            data={data as any}
            image={data.image || "default-project.jpeg"}
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
            <AddTechCategory mode="ADD" />
            {data.tech_categories?.length > 0 &&
              data.tech_categories.map((t, i) => (
                <TechItem
                  editable
                  mode="ADD"
                  key={t?.id ? t.id : i}
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
            <QAndA_Add mode="ADD" />
            {data.questions?.length > 0 &&
              data.questions.map(q => <QAndA editable data={q} key={q.id} />)}
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
