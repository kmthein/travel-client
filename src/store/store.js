import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "../features/ui/UiSlice";
import SelectReducer from "../features/select/SelectSlice";

const store = configureStore({
  reducer: {
    ui: UiReducer,
    select: SelectReducer
  },
});

export default store;
