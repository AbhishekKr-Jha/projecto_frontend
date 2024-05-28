import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
 
  initialState: {
    isServerConnected:true,
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
      console.log("the action is ", action.payload);
      state.userLoginDetails.following.push({
        ...action.payload,
        userStatus: true,
      });
      state.userLoginDetails.followers = state.userLoginDetails.followers.map(
        (item) => {
          if (item.email === action.payload.email) {
            return { ...item, userStatus: true };
          } else {
            return item;
          }
        }
      );
    },
    unFollowThePerson(state, action) {
      console.log("the unfollow slice is runninfg properly");
      const unfollowPeopleData = action.payload;
      state.userLoginDetails.followers = state.userLoginDetails.followers.map(
        (item) => {
          if (item.email === action.payload) {
            return { ...item, userStatus: false };
          } else {
            return item;
          }
        }
      );
      state.userLoginDetails.following =
        state.userLoginDetails.following.filter(
          (item) => item.email !== unfollowPeopleData
        );
      console.log(
        "the value of the new followers be",
        state.userLoginDetails.followers
      );
    },
    serverConnection(state,action){
      state.isServerConnected=false
    }
  },
});

export const { login, logout, userInfo, unFollowThePerson, followThePerson,serverConnection} =
  loginSlice.actions;
export default loginSlice.reducer;
