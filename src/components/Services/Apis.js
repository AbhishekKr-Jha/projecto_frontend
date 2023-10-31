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

//get project 
export const getProject_function=async(email,header)=>{
    return commonRequest("GET",`${BACKEND}/users/v1/getProject/${email}`)
}

//delete project
export const deleteProject_function=async(project_info,header)=>{
    return commonRequest("DELETE",`${BACKEND}/users/v1/deleteProject/${project_info.user}/${project_info.title}`)
}


//get comment of project
export const getComment_function=async(projectId,header)=>{
    return commonRequest("GET",`${BACKEND}/users/v1/getComments/${projectId}`)
}


//post comment of project
export const postComment_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/commentProject`,data)
}


//post comment of project
export const replyComment_function=async(data,header)=>{
    return commonRequest("POST",`${BACKEND}/users/v1/replyComment`,data)
}






