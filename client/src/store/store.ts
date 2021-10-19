import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { NewProjectReducer } from "./newProjectSlice"
import { reducer as dashboardReducer } from "./projectSlice"
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    newProject: NewProjectReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useTheDispatch = () => useDispatch<AppDispatch>()
export const useTheSelector: TypedUseSelectorHook<RootState> = useSelector
