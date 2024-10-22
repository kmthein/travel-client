import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: null,
  hotelOnly: false,
  flightOnly: false,
  busOnly: false,
  hotelPlusFlight: false,
  hotelPlusBus: false,
};

const SelectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    addPlan: (state, { payload }) => {
      state.selectedPlan = { ...state.selectedPlan, ...payload };
    },
    selectHotel: (state) => {
      state.hotelOnly = true;
    },
    selectFlight: (state) => {
      state.flightOnly = true;
    },
    selectBus: (state) => {
      state.busOnly = true;
    },
    selectHotelPlusFlight: (state) => {
      state.hotelPlusFlight = true;
    },
    selectHotelPlusBus: (state) => {
      state.hotelPlusBus = true;
    },
    resetSelect: () => initialState,
  },
});

export const {
  addPlan,
  selectHotel,
  selectHotelPlusFlight,
  selectHotelPlusBus,
  selectFlight,
  selectBus,
  resetSelect,
} = SelectSlice.actions;

export const selectState = (state) => state.select;
export default SelectSlice.reducer;
