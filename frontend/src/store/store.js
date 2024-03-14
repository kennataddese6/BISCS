import { configureStore } from "@reduxjs/toolkit";
import academicReducer from "../features/academicType/academicSlice";

export const store = configureStore(
  {
    reducer: {
      academic: academicReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
