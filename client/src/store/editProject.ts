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
    deleteSketchReducer: (state, action: { payload: { id: string } }) => {
      const s = state.sketches.findIndex(p => p.id === action.payload.id)
      state.sketches.splice(s, 1)
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
    updateQuestionReducer: (
      state,
      action: { payload: { id: string; question: string; answer: string } }
    ) => {
      state.questions.forEach(q => {
        if (q.id === action.payload.id) {
          q.question = action.payload.question
          q.id = action.payload.id
          q.answer = action.payload.answer as any
          return
        }
      })
    },
    addNewQuestionReducer: (
      state,
      action: {
        payload: {
          answer: string
          question: string
          id: string
          answerId: string
        }
      }
    ) => {
      state.questions.push({
        id: action.payload.id,
        question: action.payload.question,
        answer: {
          id: action.payload.answerId,
          answer: action.payload.answer,
        },
      } as any)
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
    deleteQuestionReducer: (state, action: { payload: { id: string } }) => {
      const q = state.questions.findIndex(q => q.id === action.payload.id)
      state.questions.splice(q, 1)
    },
    addNewSketchReducer: (
      state,
      action: {
        payload: {
          image: string
          id: string
          title: string
          description: string
          summary: string
          download_link: string
        }
      }
    ) => {
      state.sketches.push({
        id: action.payload.id,
        summary: action.payload.summary,
        description: action.payload.description,
        title: action.payload.title,
        image: action.payload.image,
        download_link: action.payload.download_link,
      } as any)
    },
    updateProjectFieldReducer: (
      state,
      action: {
        payload: { field: keyof ProjectStateTypes; value: any }
      }
    ) => {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    },
    updateSketchSummaryReducer: (
      state,
      action: { payload: { id: string; summary: string } }
    ) => {
      state.sketches.forEach(s => {
        if (action.payload.id === s.id) {
          s.summary = action.payload.summary
          return
        }
      })
    },
    updateSketchDescriptionRedcuer: (
      state,
      action: { payload: { id: string; description: string } }
    ) => {
      state.sketches.forEach(d => {
        if (d.id === action.payload.id) {
          d.description = action.payload.description
          return
        }
      })
    },
    updateSketchImageReducer: (
      state,
      action: {
        payload: {
          id: string
          image: string
        }
      }
    ) => {
      state.sketches.forEach(i => {
        if (i.id === action.payload.id) {
          i.image = action.payload.image
          return
        }
      })
    },
    updateDownloadLinkReducer: (
      state,
      action: { payload: { id: string; download_link: string } }
    ) => {
      state.sketches.forEach(d => {
        if (d.id === action.payload.id) {
          d.download_link = action.payload.download_link
          return
        }
      })
    },
  },
})

export const {
  setProjectStateReducer,
  deleteSketchReducer,
  updateTechCategoryReducer,
  updateProjectFieldReducer,
  deleteTechCategoryReducer,
  addNewTechReducer,
  updateDownloadLinkReducer,
  deleteQuestionReducer,
  deleteTechReducer,
  addNewQuestionReducer,
  addNewTechCategoryReducer,
  addNewSketchReducer,
  updateSketchDescriptionRedcuer,
  updateSketchImageReducer,
  updateSketchSummaryReducer,
  updateQuestionReducer,
} = EditProjectSlice.actions
export const EditProjectReducer = EditProjectSlice.reducer
