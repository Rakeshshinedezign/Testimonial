import { configureStore } from '@reduxjs/toolkit'

import styleReducer from './styleslice.js';
import formReducer from './formSlice.js';
import cssReducer from './cssSlice.js';
import ratingReducer from './ratingslice.js';



export default configureStore({
  reducer: {
    style: styleReducer,
    form:formReducer,
    css:cssReducer,
    rating:ratingReducer    
  }
})