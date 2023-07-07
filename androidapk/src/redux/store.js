import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from'./apiData/apiDataSlice';
export default configureStore({ reducer: { apiData:apiDataReducer, }, });