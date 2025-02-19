import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TUser,
  UserAuthenticatedState,
} from "../../types/types";

const initialState: UserAuthenticatedState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

const userAuthenticationSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{ user: TUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    setUserDetails: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setUserData, setUserDetails, clearUser } =
  userAuthenticationSlice.actions;
export default userAuthenticationSlice.reducer;
