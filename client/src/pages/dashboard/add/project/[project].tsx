import { useMutation } from "@apollo/client"
import { PageProps } from "gatsby"
import React, { FC, useEffect, useState } from "react"
import AboutTheProject from "../../../../components/App/AboutTheProject"
import QAndA from "../../../../components/App/QAndA"
import Sketch from "../../../../components/App/Sketch"
import TechItem from "../../../../components/App/TechItem"
import TheSection from "../../../../components/App/TheSection"
import AddSketch from "../../../../components/Dashboard/AddSketch"
import AddTechCategory from "../../../../components/Dashboard/AddTechCategory"
import Dash_Layout from "../../../../components/Dashboard/Dash_Layout"
import { SEO } from "../../../../components/SEO"
import Button from "../../../../components/UI/Button"
import Confirm from "../../../../components/UI/Confirm"
import QAndA_Add from "../../../../components/Dashboard/Q&A_Add"
import {
  NewProjectState,
  UNSAVED_PROJECTS,
  editNameReducer,
  setStateReducer,
} from "../../../../store/newProjectSlice"
import { useTheDispatch, useTheSelector } from "../../../../store/store"
import { CreateProjectMutation } from "../../../../util/mutations"
import Alert from "../../../../components/UI/Alert"
import { useAlert } from "../../../../util/useAlert"
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
  const [mutate] = useMutation<
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
    if (v) {
      console.log("Deleting the projct", v)
    }
  }
  const saveTheNewProject = () => {
    // mutate({variables: {
    //   name:
    // }})
  }
  return (
    <>
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
              <p>Projects you've been working on :</p>
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
            image={data.image!}
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
            <QAndA_Add />
            {data.questions?.length > 0 &&
              data.questions.map(q => <QAndA editable data={q} key={q.id} />)}
          </TheSection>
        </div>
        <TheSection name="Sketches" id="sketches" style={{ marginBottom: 25 }}>
          <AddSketch data={{}} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
            {data.sketches?.length > 0 &&
              data.sketches.map(s => <Sketch editable data={s} key={s.id} />)}
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
