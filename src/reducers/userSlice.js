import { createSlice } from "@reduxjs/toolkit";
import { refresh } from "aos";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    refreshToken: null,
    userDetails: null,
    userAllDetails: null,
  },
  reducers: {
    
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    clearUser: (state) => {
      state.token = null;
      state.userDetails = null;
      state.userType = null;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setUserAllDetails: (state, action) => {
      state.userAllDetails = action.payload;
    },
  },
});

export const { setUserDetails, clearUser, setUserType,setAccessToken, setRefreshToken,setUserAllDetails} =
  userSlice.actions;

export default userSlice.reducer;
