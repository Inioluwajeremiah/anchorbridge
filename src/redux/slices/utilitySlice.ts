import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuInfo: localStorage.getItem("menuInfo") ?? "open",
  dashboardTitle: "",
  learnCategory: "",
  category: {
    title: "",
    totalSubjects: 0,
    totalQuiz: "",
  },
  selectedSubjectsSummary: {
    mode: "",
    duration: "",
    startTime: 0,
    selectedSubjects: [{ title: "", value: "", year: "", noOfquestions: 0 }],
  },
  testResult: {
    mode: "",
    duration: "",
    perecentScore: 0,
    startTime: 0,
    selectedSubjects: [{ title: "", score: "", year: "", noOfquestions: "" }],
  },
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setToggleMenu: (state, action) => {
      state.menuInfo = action.payload;
    },
    setDashboardTitle: (state, action) => {
      state.dashboardTitle = action.payload;
    },
    setCategory: (state, action) => {
      const data = action.payload;
      state.category = { ...data };
    },
    setSelectedSubjectsSummary: (state, action) => {
      const data = action.payload;
      state.selectedSubjectsSummary = { ...data };
    },
    setTestResult: (state, action) => {
      const data = action.payload;
      state.testResult = { ...data };
    },
  },
});

export const {
  setToggleMenu,
  setDashboardTitle,
  setCategory,
  setSelectedSubjectsSummary,
  setTestResult,
} = utilitySlice.actions;

export default utilitySlice.reducer;
