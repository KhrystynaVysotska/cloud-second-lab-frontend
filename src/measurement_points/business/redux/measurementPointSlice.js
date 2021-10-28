import { createSlice } from "@reduxjs/toolkit";

const measurementPointSlice = createSlice({
  name: "measurementPoints",
  initialState: { measurementPoints: [], isLoading: true, error: null },
  reducers: {
    addMeasurementPoint(state, action) {
      state.measurementPoints.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    updateMeasurementPoint(state, action) {
      state.measurementPoints = state.measurementPoints.map((el) =>
        el.id === action.payload.id ? action.payload.body : el
      );
      state.isLoading = false;
      state.error = null;
    },
    deleteMeasurementPoint(state, action) {
      state.measurementPoints = state.measurementPoints.filter(
        (element) => element.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    setMeasurementPoints(state, action) {
      state.measurementPoints = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loadingMeasurementPoints(state, action) {
      state.measurementPoints = [];
      state.isLoading = true;
      state.error = null;
    },
    failedMeasurementPoints(state, action) {
      state.measurementPoints = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addMeasurementPoint,
  setMeasurementPoints,
  updateMeasurementPoint,
  deleteMeasurementPoint,
  failedMeasurementPoints,
  loadingMeasurementPoints,
} = measurementPointSlice.actions;

export default measurementPointSlice.reducer;
