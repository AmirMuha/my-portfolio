import { createSlice } from "@reduxjs/toolkit"

interface ProductReducerInitialState {}
const initialState: ProductReducerInitialState = {}
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateTech: state => {},
  },
})

export const { updateTech } = productSlice.actions
export const reducer = productSlice.reducer
