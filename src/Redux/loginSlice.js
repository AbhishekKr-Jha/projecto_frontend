import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    userLoginDetails: {
      name: "",
      email: "",
      totalProject: "",
      followers: [],
      following: [],
      linkedin: "",
      github: "",
      instagram: "",
    },
  },
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    userInfo(state, action) {
      state.userLoginDetails = { ...state.userLoginDetails, ...action.payload };
    },
    followThePerson(state, action) {
      state.userLoginDetails.following.push(action.payload);
    },
    unFollowThePerson(state, action) {
      const unfollowPeopleData = action.payload;
      state.userLoginDetails.following =
        state.userLoginDetails.following.filter(
          (item) => item.email !== unfollowPeopleData
        );
    },
  },
});

export const { login, logout, userInfo, unFollowThePerson, followThePerson } =
  loginSlice.actions;
export default loginSlice.reducer;
