import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "../features/ui/UiSlice";
import SelectReducer from "../features/select/SelectSlice";
import UserReducer from "../features/user/UserSlice";
import TransportReducer from "../features/transport/TransportSlice";

const store = configureStore({
  reducer: {
    ui: UiReducer,
    select: SelectReducer,
    user: UserReducer,
    transport: TransportReducer,
  },
});

export default store;
