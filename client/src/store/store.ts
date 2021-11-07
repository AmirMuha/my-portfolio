import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { EditProjectReducer } from "./editProject"
import { NewProjectReducer } from "./newProjectSlice"
import UnsavedProjectsReducer from "./unsavedProjectsSclice"
import { configureStore } from "@reduxjs/toolkit"
import { reducer as dashboardReducer } from "./projectSlice"
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    newProject: NewProjectReducer,
    editProject: EditProjectReducer,
    unsavedProjects: UnsavedProjectsReducer
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useTheDispatch = () => useDispatch<AppDispatch>()
export const useTheSelector: TypedUseSelectorHook<RootState> = useSelector
