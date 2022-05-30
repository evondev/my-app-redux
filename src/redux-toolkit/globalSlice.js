import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    showSidebar: true,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      return {
        ...state,
        darkMode: payload,
      };
    },
    toggleSideBar: (state, { payload }) => ({
      ...state,
      showSidebar: payload,
    }),
  },
});
export const { toggleDarkMode, toggleSideBar } = globalSlice.actions;
export default globalSlice.reducer;
