import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../reducers/loaderSlice";
import successMessageSlice from "../reducers/successMessageSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    success: successMessageSlice,
  },
});

export default store;
