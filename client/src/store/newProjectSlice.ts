import { createSlice } from "@reduxjs/toolkit"

export const UNSAVED_PROJECTS = "unsaved-projects"
const storeLocally = (
  state: NewProjectState,
  field: string,
  value: any,
  projectName: string
) => {
  const unsavedProjects = localStorage.getItem(UNSAVED_PROJECTS)
  const unsavedDataObject = unsavedProjects ? JSON.parse(unsavedProjects) : {}
  const newProjectObject = {
    ...unsavedDataObject,
    [projectName]: {
      ...state,
      [field]: value,
    },
  }
  localStorage.setItem(UNSAVED_PROJECTS, JSON.stringify(newProjectObject))
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
    getUnFinishedProjects: (state, action: { payload: { name: string } }) => {
      const newUnsavedProjects = localStorage.getItem(UNSAVED_PROJECTS)
      return newUnsavedProjects
        ? { ...JSON.parse(newUnsavedProjects)[action.payload.name] }
        : { ...state }
    },
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
    setNameReducer: (state, action: { payload: { name: string } }) => {
      if (action.payload.name) {
        storeLocally(state, "name", action.payload.name, action.payload.name)
        state.name = action.payload?.name
      }
    },
  },
})

export const {
  setNameReducer,
  setAppUrlReducer,
  setGithubUrlReducer,
  setImageReducer,
  setSummaryReducer,
  getUnFinishedProjects,
} = newProjectSlice.actions
export const NewProjectReducer = newProjectSlice.reducer
