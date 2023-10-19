import { commonRequest } from "./ApiCall"
import {BACKEND} from './Helper'

//register
export const register_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/register`,data)
}
//login
export const login_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/login`,data)
}

//change password
export const changePassword_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/changePassword`,data)
}


//send otp
export const sendOTP_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/send_otp`,data)
}

//verify OTP
export const verifyOTP_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/otp_verification`,data)
}

//add project 
export const addProject_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/addProject`,data)
}