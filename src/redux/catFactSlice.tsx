import { createSlice } from '@reduxjs/toolkit'

export const catFactSlice = createSlice({
  name: 'catFact',
  initialState: {
    value: "Cats are cute",
  },
  reducers: {
    changeFact: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeFact } = catFactSlice.actions

export default catFactSlice.reducer