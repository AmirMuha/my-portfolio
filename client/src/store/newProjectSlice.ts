import { createSlice } from "@reduxjs/toolkit"
import { RandomNumber } from "../util/RandomNumber"

export const UNSAVED_PROJECTS = "unsaved-projects"

function storeLocally(
  state: NewProjectState,
  field: keyof NewProjectState,
  value: any,
  projectName: string,
  editName?: { enabled: boolean; prevName: string } | any,
  type: "PROJECT" | "TECH_CATEGORY" | "Q&A" | "SKETCH" | "TECH" = "PROJECT"
): any {
  const unsavedProjects = localStorage.getItem(UNSAVED_PROJECTS)
  const unsavedDataObject = unsavedProjects ? JSON.parse(unsavedProjects) : {}
  if (unsavedDataObject[projectName]) {
    const existingProject = { ...unsavedDataObject[projectName] }
    switch (type) {
      case "PROJECT":
        existingProject[field] = value
        break
      case "TECH_CATEGORY":
        if (
          !existingProject.tech_categories.find(
            (tc: { name: string }) => tc.name === value
          )
        ) {
          existingProject.tech_categories.push({ name: value, techs: [] })
        }
        break
      case "TECH":
        const receivedValue = value as { name: string; techs: string[] }
        const foundTechCategory = existingProject.tech_categories.findIndex(
          (tc: { name: string }) => tc.name === value
        )
        if (foundTechCategory) {
          existingProject.tech_categories = existingProject.tech_categories.map(
            (tc: { name: string; techs: { name: string }[] }) => {
              if (tc.name === receivedValue.name) {
                return {
                  name: tc.name,
                  techs: receivedValue.techs.map(t => ({ name: t })),
                }
              } else {
                return tc
              }
            }
          )
        } else {
          existingProject.tech_categories.push({
            name: receivedValue.name,
            techs: receivedValue.techs.map(t => ({ name: t })),
          })
        }
        break
      case "Q&A":
        if (value.id) {
          const existingQuestions: {
            question: string
            answer: string
            id: string
          }[] = [...existingProject.questions]
          const questionsInd = existingQuestions.findIndex(
            q => q.id === value.id
          )
          existingQuestions.splice(questionsInd, 1, {
            id: value.id,
            question: value.question,
            answer: value.answer,
          })
          existingProject.questions = existingQuestions
        } else {
          existingProject.questions.push({
            id: new RandomNumber()[0],
            question: value.question,
            answer: value.answer,
          })
        }
        break
      case "SKETCH":
        break
      default:
        break
    }
    const newProjectObject = {
      ...unsavedDataObject,
      [projectName]: existingProject,
    }
    localStorage.setItem(UNSAVED_PROJECTS, JSON.stringify(newProjectObject))
    return existingProject
  } else {
    let newProjectObject = {}
    if (editName?.enabled) {
      const unsavedDataObjectForEditing = { ...unsavedDataObject }
      const projectProps = {
        ...unsavedDataObjectForEditing[editName.prevName],
        name: value,
      }
      delete unsavedDataObjectForEditing[projectName]
      newProjectObject = {
        ...unsavedDataObjectForEditing,
        [projectName]: projectProps,
      }
      newProjectObject[editName.prevName] = undefined
      localStorage.setItem(UNSAVED_PROJECTS, JSON.stringify(newProjectObject))
      return projectProps
    } else {
      newProjectObject = {
        ...unsavedDataObject,
        [projectName]: {
          ...state,
          [field]: value,
        },
      }
      localStorage.setItem(UNSAVED_PROJECTS, JSON.stringify(newProjectObject))
      return { ...state, [field]: value }
    }
  }
}

export interface NewProjectState {
  name: string
  app_url: string
  github_url: string
  image: string
  questions: GatsbyTypes.Portfolio_Question[]
  sketches: GatsbyTypes.Portfolio_Sketch[]
  tech_categories: GatsbyTypes.Portfolio_TechCategory[]
  summary: string
  type: string
}
const initialState: NewProjectState = {
  name: "",
  app_url: "",
  github_url: "",
  image: "",
  questions: [],
  sketches: [],
  tech_categories: [],
  summary: "",
  type: "",
}
const newProjectSlice = createSlice({
  name: "NewProject",
  initialState,
  reducers: {
    setImageReducer: (state, action: { payload: { image: any } }) => {
      if (action.payload.image) {
        console.log(action.payload.image)
        storeLocally(state, "image", action.payload.image, state.name)
        state.image = action.payload.image
      }
    },
    setSummaryReducer: (state, action: { payload: { summary: string } }) => {
      if (action.payload.summary) {
        storeLocally(state, "summary", action.payload.summary, state.name)
        state.summary = action.payload.summary
      }
    },
    setAppUrlReducer: (state, action: { payload: { url: string } }) => {
      if (action.payload.url) {
        storeLocally(state, "app_url", action.payload.url, state.name)
        state.app_url = action.payload.url
      }
    },
    setGithubUrlReducer: (state, action: { payload: { url: string } }) => {
      if (action.payload.url) {
        storeLocally(state, "github_url", action.payload.url, state.name)
        state.github_url = action.payload.url
      }
    },
    setStateReducer: (state, action: { payload: { name: string } }) => {
      if (action.payload.name) {
        const projects = localStorage.getItem(UNSAVED_PROJECTS)
        if (projects) {
          const parsedProjects = JSON.parse(projects)
          if (parsedProjects[action.payload.name]) {
            return {
              ...parsedProjects[action.payload.name],
            }
          } else {
            storeLocally(
              state,
              "name",
              action.payload.name,
              action.payload.name
            )
            return { ...state, name: action.payload.name }
          }
        } else {
          storeLocally(state, "name", action.payload.name, action.payload.name)
          return { ...state, name: action.payload.name }
        }
      }
    },
    editNameReducer: (
      state,
      action: { payload: { name: string; prevName: string } }
    ) => {
      if (action.payload.name) {
        const newState = storeLocally(
          state,
          "name",
          action.payload.name,
          action.payload.name,
          {
            enabled: true,
            prevName: action.payload.prevName,
          }
        )
        return { ...newState }
      }
    },
    setTechCategoryReducer: (state, action: { payload: { name: string } }) => {
      const project = storeLocally(
        state,
        "name",
        action.payload.name,
        state.name,
        null,
        "TECH_CATEGORY"
      )
      return {
        ...project,
      }
    },
    setTechReducer: (
      state,
      action: { payload: { name: string; techs: string[] } }
    ) => {
      const project = storeLocally(
        state,
        "name",
        { name: action.payload.name, techs: action.payload.techs },
        state.name,
        null,
        "TECH"
      )
      return {
        ...project,
      }
    },
    setQAndA: (
      state,
      action: { payload: { question: string; answer: string; id?: string } }
    ) => {
      const project = storeLocally(
        state,
        "questions",
        {
          question: action.payload.question,
          answer: action.payload.answer,
          id: action.payload.id ? action.payload.id : undefined,
        },
        state.name,
        null,
        "Q&A"
      )
      return {
        ...project,
      }
    },
  },
})

export const {
  setStateReducer,
  editNameReducer,
  setAppUrlReducer,
  setQAndA,
  setGithubUrlReducer,
  setImageReducer,
  setSummaryReducer,
  setTechCategoryReducer,
  setTechReducer,
} = newProjectSlice.actions
export const NewProjectReducer = newProjectSlice.reducer
