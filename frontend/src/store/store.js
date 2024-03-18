import { configureStore } from "@reduxjs/toolkit";
import clearanceReducer from "../features/academicType/clearanceSlice";

export const store = configureStore(
  {
    reducer: {
      clearance: clearanceReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
