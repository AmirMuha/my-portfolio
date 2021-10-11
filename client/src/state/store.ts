import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { reducer as productReducer } from "./projectSlice"
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useProductDispatch = () => useDispatch<AppDispatch>()
export const useProductSelector: TypedUseSelectorHook<RootState> = useSelector
