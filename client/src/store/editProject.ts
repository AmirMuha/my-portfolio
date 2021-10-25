import { createSlice } from "@reduxjs/toolkit"
interface ProjectStateTypes {
  id: string
  name: string
  summary: string
  app_url: string
  github_url: string
  image: string
  questions: GatsbyTypes.Portfolio_Question[]
  tech_categories: GatsbyTypes.Portfolio_TechCategory[]
  sketches: GatsbyTypes.Portfolio_Sketch[]
  type: string
}
const initialState: ProjectStateTypes = {
  id: "",
  name: "",
  summary: "",
  app_url: "",
  github_url: "",
  image: "",
  questions: [],
  tech_categories: [],
  sketches: [],
  type: "",
}
const EditProjectSlice = createSlice({
  name: "EditProject",
  initialState,
  reducers: {
    setProjectStateReducer: (
      state,
      action: { payload: { data: ProjectStateTypes } }
    ) => {
      return { ...action.payload.data }
    },
    deleteTechReducer: (
      state,
      action: { payload: { techCategoryId: string; techId: string } }
    ) => {
      state.tech_categories.findIndex(tc => {
        if (tc.id === action.payload.techCategoryId) {
          const techIndex = tc.techs.findIndex(
            t => t.id === action.payload.techId
          )
          tc.techs.splice(techIndex, 1)
        }
      })
    },
    deleteTechCategoryReducer: (state, action: { payload: { id: string } }) => {
      console.log("Working")
      const techCategoryIndex = state.tech_categories.findIndex(
        t => t.id === action.payload.id
      )
      state.tech_categories.splice(techCategoryIndex, 1)
    },
    addNewTechReducer: (
      state,
      action: { payload: { name: string; id: string; techCategoryId: string } }
    ) => {
      state.tech_categories.forEach(tc => {
        if (tc.id === action.payload.techCategoryId) {
          tc.techs.push({
            id: action.payload.id,
            name: action.payload.name,
          } as any)
          return
        }
      })
    },
    addNewTechCategoryReducer: (
      state,
      action: {
        payload: {
          name: string
          id: string
        }
      }
    ) => {
      state.tech_categories.push({
        id: action.payload.id,
        name: action.payload.name,
        techs: [],
      } as any)
    },
    updateTechCategoryReducer: (
      state,
      action: { payload: { id: string; name: string } }
    ) => {
      const techCategory = state.tech_categories.find(
        tc => tc.id === action.payload.id
      )
      const techCategoryIndex = state.tech_categories.findIndex(
        tc => tc.id === action.payload.id
      )
      state.tech_categories.splice(techCategoryIndex, 1, {
        id: action.payload.id,
        name: action.payload.name,
        techs: techCategory?.techs!,
      } as any)
    },
    updateProjectFieldReducer: (
      state,
      action: {
        payload: { field: keyof ProjectStateTypes; value: any; id: string }
      }
    ) => {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    },
  },
})

export const {
  setProjectStateReducer,
  updateTechCategoryReducer,
  updateProjectFieldReducer,
  deleteTechCategoryReducer,
  addNewTechReducer,
  deleteTechReducer,
  addNewTechCategoryReducer,
} = EditProjectSlice.actions
export const EditProjectReducer = EditProjectSlice.reducer
