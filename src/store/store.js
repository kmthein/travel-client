import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "../features/ui/UiSlice";
import SelectReducer from "../features/select/SelectSlice";
import UserReducer from "../features/user/UserSlice";

const store = configureStore({
  reducer: {
    ui: UiReducer,
    select: SelectReducer,
    user: UserReducer
  },
});

export default store;
