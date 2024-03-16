import { deleteProject_function } from "../../../Services/Apis"


export const deleteProject=async(title,projectId)=>{
try {
    const { data } = await deleteProject_function({
        user:projectId,title
    })
    if(data.success){
    
    }else{
       console.log("delete func else active with message",data?.message) 
    }
} catch (error) {
   console.log("error in project delete function",error) 
}
}