import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  loading: false,
};
const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { openModal, closeModal, startLoading, endLoading } =
  UiSlice.actions;
export const uiState = (state) => state.ui;
export default UiSlice.reducer;
