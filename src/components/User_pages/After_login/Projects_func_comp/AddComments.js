
import { fail, success } from "../../../../Items/Toastify"
import { postComment_function } from "../../../Services/Apis"

export const AddComments=async(commentData)=>{
  try {
    const { data }=await postComment_function(commentData)
 
    if(data.success){
return data.comment
    }
    else{   
      console.log("---else is active",data)
fail(data.message) 
    }
  } catch (error) {
    console.log(" add comment catch block active due to ",error)
  }

}