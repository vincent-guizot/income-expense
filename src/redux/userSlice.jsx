import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import {} from "react-redux";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },

  reducers: {
    signIn: (state, actions) => {},
    signOut: (state, actions) => {},
    signUp: (statusbar, actions) => {},
  },
});


export const {} = userSlice.actions 
export default userSlice.reducer