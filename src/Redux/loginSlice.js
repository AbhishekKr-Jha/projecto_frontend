import {createSlice} from '@reduxjs/toolkit'

const loginSlice=createSlice({
    name:"login",
    initialState:{
        isLogin:false,
        userLoginDetails:{
            name:"",
            email:"",
            totalProject:"",
        }
    },
    reducers :{
        login(state){state.isLogin=true},
        logout(state){state.isLogin=false},
        userInfo(state,action){
            state.userLoginDetails = { ...state.userLoginDetails, ...action.payload };
        }
    }
})

export const {login,logout,userInfo}=loginSlice.actions
export default  loginSlice.reducer