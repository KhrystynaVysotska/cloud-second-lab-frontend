import { createSlice } from "@reduxjs/toolkit";

const riverSlice = createSlice({
  name: "rivers",
  initialState: { rivers: [], isLoading: true, error: null },
  reducers: {
    addRiver(state, action) {
      state.rivers.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    updateRiver(state, action) {
      state.rivers = state.rivers.map((el) =>
        el.id === action.payload.id ? action.payload.body : el
      );
      state.isLoading = false;
      state.error = null;
    },
    deleteRiver(state, action) {
      state.rivers = state.rivers.filter(
        (element) => element.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    setRivers(state, action) {
      state.rivers = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loadingRivers(state, action) {
      state.rivers = [];
      state.isLoading = true;
      state.error = null;
    },
    failedRivers(state, action) {
      state.rivers = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addRiver,
  setRivers,
  updateRiver,
  deleteRiver,
  failedRivers,
  loadingRivers,
} = riverSlice.actions;

export default riverSlice.reducer;
