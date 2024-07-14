import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const initialToken = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState = {
  user: initialUser,
  token: initialToken,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
    },
    logoutUser: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = UserSlice.actions;
export const userState = ( state ) => state.user;
export default UserSlice.reducer;
