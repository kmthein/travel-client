import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "../features/ui/UiSlice";
import SelectReducer from "../features/select/SelectSlice";
import UserReducer from "../features/user/UserSlice";
import FlightTicketReducer from "../features/flight/FlightTicketSlice";

const store = configureStore({
  reducer: {
    ui: UiReducer,
    select: SelectReducer,
    user: UserReducer,
    flightTicket: FlightTicketReducer,
  },
});

export default store;
