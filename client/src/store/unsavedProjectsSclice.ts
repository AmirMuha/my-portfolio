import { NewProjectState, UNSAVED_PROJECTS } from "./newProjectSlice"

import { createSlice } from "@reduxjs/toolkit"

export interface UnsavedProjectsType {
  projects: {
    name: string
    app_url: string
    github_url: string
    summary: string
    type: string
    image: string
    sketches: {
      title: string
      description: string
      summary: string
      downloadables: string
      image: string
    }[]
    questions: {
      question: string
      answer: string
    }[]
    techCategories: {
      name: string
      techs: { name: string }[]
    }[]
  }[]
}
const initialState: UnsavedProjectsType = {
  projects: [],
}

const slice = createSlice({
  name: "Unsaved Projects",
  initialState,
  reducers: {

    fetchUnsavedProjectsReducer: (state, action: { payload: {} }) => {
      const fetchUnsavedProjects = localStorage.getItem(UNSAVED_PROJECTS)
      if (fetchUnsavedProjects) {
        const convertedFetchUnsavedProjects = JSON.parse(fetchUnsavedProjects)
        let fetchUnsavedProjectsArray: NewProjectState[] = []
        for (const unsp in convertedFetchUnsavedProjects) {
          fetchUnsavedProjectsArray.push(
            convertedFetchUnsavedProjects[unsp] as any
          )
        }
        state.projects = fetchUnsavedProjectsArray as any
      } else {
        state.projects = { ...state.projects }
      }
    },

    deleteUnsavedProjectReducer: (
      state,
      action: { payload: { name: string } }
    ) => {
      const unsavedProjects = localStorage.getItem(UNSAVED_PROJECTS)
      if (unsavedProjects) {
        const convertedFetchUnsavedProjects = JSON.parse(unsavedProjects)
        delete convertedFetchUnsavedProjects[action.payload.name]
        const foundProjInx = state.projects.findIndex(
          p => p.name === action.payload.name
        )
        localStorage.setItem(
          UNSAVED_PROJECTS,
          JSON.stringify(convertedFetchUnsavedProjects)
        )
        state.projects.splice(foundProjInx, 1)
      }
    },
  },
})

export const { fetchUnsavedProjectsReducer, deleteUnsavedProjectReducer } =
  slice.actions
export default slice.reducer
