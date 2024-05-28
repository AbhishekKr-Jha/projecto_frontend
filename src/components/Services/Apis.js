import { commonRequest } from "./ApiCall"
import {REACT_APP_URL} from './Helper'


// conection status
export const serverConnectionStatus=async(data,header)=>{
    return commonRequest("GET",`${REACT_APP_URL}/users/v1/serverstatus`)
}



//is user Login
export const checkLogin_function=async(data,header)=>{
    return commonRequest("GET",`${REACT_APP_URL}/users/v1/checkLogin/${data.id}/${data.email}`)
}

//register
export const register_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/register`,data)
}
//login
export const login_function=async(data,header)=>{
    console.log("api data",data)
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/login`,data)
}

//update profile
export const update_function=async(data,header)=>{
    console.log("api data",data)
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/updateprofile`,data)
}

//change password
export const changePassword_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/changePassword`,data)
}


//send otp
export const sendOTP_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/send_otp`,data)
}
//verify OTP
export const verifyOTP_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/otp_verification`,data)
}
//add project 
export const addProject_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/addProject`,data)
}

//get project 
export const getProject_function=async(email,userEmail,header)=>{
    return commonRequest("GET",`${REACT_APP_URL}/users/v1/getProject/${email}/${userEmail}`)
}

//delete project
export const deleteProject_function=async(project_info,header)=>{
    return commonRequest("DELETE",`${REACT_APP_URL}/users/v1/deleteProject/${project_info.projectId}/${project_info.title}`)
}

//update project
export const updateProject_function=async(updatedData,header)=>{
    return commonRequest("PUT",`${REACT_APP_URL}/users/v1/updateProject`,updatedData)
}

//get the emails for real time search
export const realTimeSearch_function=async()=>{
    return commonRequest("GET",`${REACT_APP_URL}/users/v1/realTimeSearch`)
}

//get comment of project
export const getComment_function=async(projectId,header)=>{
    return commonRequest("GET",`${REACT_APP_URL}/users/v1/getComments/${projectId}`)
}

//post comment of project
export const postComment_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/commentProject`,data)
}


//post reply of project
export const replyComment_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/replyComment`,data)
}

//follow a person
export const followUp_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/follow`,data)
}

//unFollow a person
export const unFollow_function=async(data,header)=>{
    return commonRequest("POST",`${REACT_APP_URL}/users/v1/unfollow`,data)
}


// //unFollow a person
// export const getFollow=async(data,header)=>{
//     return commonRequest("GET",`${REACT_APP_URL}/users/v1/getFollowers/${data}`)
// }








