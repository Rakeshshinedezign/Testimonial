import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    
]

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        formAdd(state, action) {
          state.push(action.payload)
        }
      }
  })
  console.log(formSlice);
  export const { formAdd } = formSlice.actions
  
  export default formSlice.reducer 