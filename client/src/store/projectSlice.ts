import { createSlice } from "@reduxjs/toolkit"
import { WritableDraft } from "@reduxjs/toolkit/node_modules/immer/dist/internal"
interface DashboardReducerInitialState {
  projects?: WritableDraft<GatsbyTypes.Portfolio_Project[]>
  messages?: WritableDraft<GatsbyTypes.Portfolio_Message[]>
  // stack: any
}

const initialState: DashboardReducerInitialState = {
  messages: [],
  projects: [],
}
const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    init: (
      state,
      action: {
        payload: { data: DashboardReducerInitialState }
      }
    ) => {
      state.messages = action.payload.data.messages || []
      state.projects = action.payload.data.projects || []
    },
    createProject: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_ProjectCreateInput } }
    ) => {},
    createTechCategory: (
      state,
      action: {
        payload: { data: GatsbyTypes.Portfolio_TechCategoryCreateInput }
      }
    ) => {},
    createTech: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_TechCreateInput } }
    ) => {},
    createQuestion: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_QuestionCreateInput } }
    ) => {},
    createAnswer: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_AnswerCreateInput } }
    ) => {},
    createSketch: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_SketchCreateInput } }
    ) => {},
    updateMessage: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_MessageUpdateInput } }
    ) => {},
    updateProject: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_ProjectUpdateInput } }
    ) => {},
    updateTechCategory: (
      state,
      action: {
        payload: { data: GatsbyTypes.Portfolio_TechCategoryUpdateInput }
      }
    ) => {},
    updateTech: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_TechUpdateInput } }
    ) => {},
    updateQuestion: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_QuestionUpdateInput } }
    ) => {},
    updateAnswer: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_AnswerUpdateInput } }
    ) => {},
    updateSketch: (
      state,
      action: { payload: { data: GatsbyTypes.Portfolio_SketchUpdateInput } }
    ) => {},
    deleteProject: (state, action: { payload: { id: string } }) => {},
    deleteTechCategory: (state, action: { payload: { id: string } }) => {},
    deleteTech: (state, action: { payload: { id: string } }) => {},
    deleteQuestion: (state, action: { payload: { id: string } }) => {},
    deleteAnswer: (state, action: { payload: { id: string } }) => {},
    deleteSketch: (state, action: { payload: { id: string } }) => {},
    deleteMessage: (state, action: { payload: { id: string } }) => {},
  },
})

export const {
  updateProject,
  updateQuestion,
  updateAnswer,
  updateMessage,
  createAnswer,
  createProject,
  createQuestion,
  createSketch,
  createTech,
  createTechCategory,
  deleteAnswer,
  deleteMessage,
  deleteProject,
  deleteQuestion,
  deleteSketch,
  deleteTech,
  deleteTechCategory,
  updateTech,
  updateSketch,
  updateTechCategory,
  init,
} = DashboardSlice.actions
export const reducer = DashboardSlice.reducer
