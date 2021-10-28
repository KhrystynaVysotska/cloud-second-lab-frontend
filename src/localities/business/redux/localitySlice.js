import { createSlice } from "@reduxjs/toolkit";

const localitySlice = createSlice({
  name: "localities",
  initialState: { localities: [], isLoading: true, error: null },
  reducers: {
    addLocality(state, action) {
      state.localities.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    updateLocality(state, action) {
      state.localities = state.localities.map((el) =>
        el.id === action.payload.id ? action.payload.body : el
      );
      state.isLoading = false;
      state.error = null;
    },
    deleteLocality(state, action) {
      state.localities = state.localities.filter(
        (element) => element.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    setLocalities(state, action) {
      state.localities = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loadingLocalities(state, action) {
      state.localities = [];
      state.isLoading = true;
      state.error = null;
    },
    failedLocalities(state, action) {
      state.localities = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addLocality,
  setLocalities,
  updateLocality,
  deleteLocality,
  failedLocalities,
  loadingLocalities,
} = localitySlice.actions;

export default localitySlice.reducer;
