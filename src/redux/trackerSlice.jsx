import { createSlice } from "@reduxjs/toolkit";

export const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    incomes: [],
    expenses: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchIncomesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchIncomesSuccess: (state, actions) => {
      state.incomes = [...actions.payload];
      state.loading = false;
    },
    fetchIncomesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addIncome: (state, actions) => {},
    removeIncome: (state, actions) => {},
    editIncome: (state) => {},
  },
});

export const { fetchIncomesSuccess, fetchIncomesFail, fetchIncomesStart, } = trackerSlice.actions;

export default trackerSlice.reducer;
