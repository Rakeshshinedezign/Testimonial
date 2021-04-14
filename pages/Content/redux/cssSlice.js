import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    
    
]

const cssSlice = createSlice({
    name: 'css',
    initialState,
    reducers: {
        cssData(state, action) {
          state.push(action.payload)
        }
      }
  })
  console.log(cssSlice);
  export const { cssData } = cssSlice.actions
  
  export default cssSlice.reducer 