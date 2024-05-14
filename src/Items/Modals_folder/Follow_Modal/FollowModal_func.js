
import { followUp_function, unFollow_function } from "../../../components/Services/Apis";


export const followUP_func = async (userName,email) => {
    try {
      const { data } = await followUp_function({
        userId:JSON.parse(localStorage.getItem("userData"))?.id,
        followedPersonName:userName,
        followedPersonEmail:email,
      });
      if(data?.success){
        console.log("follow is returning this",data)
        return {
            userIdentity:userName,
            email:email
        }
    }
      else console.log("else of follow ",data)
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
      if(data?.success){
        console.log("UN-follow is returning this",data)
return email
      }
      else console.log("else of UN-follow",data)
    } catch (error) {
      console.log("catch of UN-follow",error)     
    } 
  }