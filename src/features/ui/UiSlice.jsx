import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
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
  },
});

export const { openModal, closeModal } = UiSlice.actions;
export const uiState = (state) => state.ui;
export default UiSlice.reducer;
