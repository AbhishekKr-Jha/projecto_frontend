import {createSlice} from '@reduxjs/toolkit'

const loginSlice=createSlice({
    name:"login",
    initialState:{
        isLogin:false,
        userLoginDetails:{
            userName:"",
            email:"",
            contact:"",
            projects:[],
        }
    },
    reducers :{
        login(state){state.isLogin=true},
        logout(state){state.isLogin=false}
    }
})

export const {login,logout}=loginSlice.actions
export default  loginSlice.reducer