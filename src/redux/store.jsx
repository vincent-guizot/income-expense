import { configureStore } from "@reduxjs/toolkit";
import slice from "./trackerSlice";

const store = configureStore({
  reducer: slice,
});

export default store;
