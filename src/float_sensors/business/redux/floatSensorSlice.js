import { createSlice } from "@reduxjs/toolkit";

const floatSensorSlice = createSlice({
  name: "sensors",
  initialState: { sensors: [], isLoading: true, error: null },
  reducers: {
    addSensor(state, action) {
      state.sensors.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    updateSensor(state, action) {
      state.sensors = state.sensors.map((el) =>
        el.id === action.payload.id ? action.payload.body : el
      );
      state.isLoading = false;
      state.error = null;
    },
    deleteSensor(state, action) {
      state.sensors = state.sensors.filter(
        (element) => element.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    setSensors(state, action) {
      state.sensors = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loadingSensors(state, action) {
      state.sensors = [];
      state.isLoading = true;
      state.error = null;
    },
    failedSensors(state, action) {
      state.sensors = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addSensor,
  setSensors,
  updateSensor,
  deleteSensor,
  failedSensors,
  loadingSensors,
} = floatSensorSlice.actions;

export default floatSensorSlice.reducer;
