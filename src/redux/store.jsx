import { configureStore } from "@reduxjs/toolkit";
import slice from "./trackerSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: slice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
