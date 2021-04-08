import { configureStore } from '@reduxjs/toolkit'

import styleReducer from './styleslice.js';
import formReducer from './formSlice.js';



export default configureStore({
  reducer: {
    style: styleReducer,
    form:formReducer
  }
})