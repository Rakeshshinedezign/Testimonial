// import { createSlice } from '@reduxjs/toolkit'
// const initialState = [   
// ]

// const cssSlice = createSlice({
//     name: 'css',
//     initialState,
//     reducers: {
//         cssData(state, action) {
//           state.push(action.payload)
//         }
//       }
//   })
//   console.log(cssSlice);
//   export const { cssData } = cssSlice.actions
  
//   export default cssSlice.reducer 
import { createSlice } from '@reduxjs/toolkit'

const initialState = [   
    
]

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        ratingAdd(state, action) {
          state.push(action.payload)
        }
      }
  })
  console.log(ratingSlice);
  export const { ratingAdd } = ratingSlice.actions
  
  export default ratingSlice.reducer 