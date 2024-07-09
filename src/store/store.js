import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "../features/ui/UiSlice";

const store = configureStore({
  reducer: {
    ui: UiReducer,
  },
});

export default store;
