import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { value: 'multiple' }
]

const styleSlice = createSlice({
    name: 'style',
    initialState,
    reducers: {
        styleAdd(state, action) {
          state.push(action.payload)
        }
      }
  })
  console.log(styleSlice);
  export const { styleAdd } = styleSlice.actions
  
  export default styleSlice.reducer 

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = { value: 'multiple' }


// const styleSlice = createSlice({
//     name: 'style',
//     initialState,
//     reducers: {
//         styleAdd( action) {
//           action.payload
//         }
//       }
//   })
  
//   export const { styleAdd } = styleSlice.actions
  
//   export default styleSlice.reducer 