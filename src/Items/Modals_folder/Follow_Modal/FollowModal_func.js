
import { followUp_function, unFollow_function } from "../../../components/Services/Apis";


export const followUP_func = async (userName,email) => {
    try {
      const { data } = await followUp_function({
        userId:JSON.parse(localStorage.getItem("userData"))?.id,
        followedPersonName:userName,
        followedPersonEmail:email,
      });
      console.log("entering--")
      if(data?.success){
        console.log("ok done",data)
        return {
            userIdentity:userName,
            email:email
        }
    }
      else console.log("else of follow",data)
    } catch (error) {
      console.log("catch of follow",error)     
    } 
  };


  export const unfollow_func=async(userName,email)=>{
    try{
      console.log(userName,email)
    const { data } = await unFollow_function({
        userId:JSON.parse(localStorage.getItem("userData"))?.id,
        unFollowedPersonName:userName,
        unFollowedPersonEmail:email,
      });
      console.log("entering--")
      if(data?.success){
console.log("ok")
return email
      }
      else console.log("else of follow",data)
    } catch (error) {
      console.log("catch of follow",error)     
    } 
  }