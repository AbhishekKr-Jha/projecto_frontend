import React,{useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import NoResult from './NoResult.svg'
import '../../Items/Search_icon.css'
import { getProject_function } from '../Services/Apis'
import  { Toaster } from 'react-hot-toast';
import { fail, success } from '../../Items/Toastify'




export default function EmailSearch() {
  const navigate=useNavigate()

  const [searchProject,setsearchProject]=useState([])
  const [projectCount,setprojectCount]=useState(false)
  const [successResult,setsuccessResult]=useState(false)
const [email,setemail]=useState()
   
const get_projects=async()=>{
// console.log(email)
// console.log("Project Length is ",searchProject.length)
// console.log("-----",searchProject)
    // console.log("emaul lemngth---",email.length)
try {
  if(!email){fail("Email is required")}
  else{
  const {data}=await getProject_function(email)
  if(data?.success){
    success(data.message)
   setsuccessResult(true)
    setsearchProject(data.projects)
    console.log(searchProject)
    console.log(searchProject.length)
  }
  else{console.log(">>>",data)
  setprojectCount(true)
  setsuccessResult(false)
    console.log(data.message);} 
}
} catch (error) {
  console.log("error block")
  console.log(error)
}
  } 

  const navigate_result=()=>{
navigate('/search_result',{state:searchProject})
  }

  return (
   <>
   <div className="fixed"><Toaster  position="bottom-right" /></div>
   <div className=" flexC element-Wrapper lg:pt-[55px]" style={{gap:"20px"}}>
   <h1 className='text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px]'>Enter Email to search for Projects</h1> 
  <div className=" flexC sm:flex-row  box-wrapper serach-Box" style={{gap:"15px"}} >

       <input onChange={(e)=>{setemail(e.target.value);setprojectCount(false);}}  className='input w-[85vw] md:w-[400px] mb-2' value={email} type="email"  id="email" name="email" placeholder="E-mail address" required autocomplete="off"/>
       <button class="search_button" onClick={get_projects}>
  <span class="search_span">🔎</span>
</button>

       </div>
{   projectCount  &&     <div className="noResult_img ">
    <img width="120px"  src={NoResult} alt="loading..."/>
    <h3 className='mt-2'>No Result Found</h3>
 </div>   }        
   {   successResult   &&   <div className="hover:scale-105 duration-150 transition-all ease-linear cursor-pointer border-solid border-white border-[1px] p-3 rounded-lg"  onClick={navigate_result} >
   {/* <NavLink to='/search_result'>  */}
   <h3>User available with {searchProject.length} Project</h3>  
    {/* </NavLink> */}
    </div>  }   
       
   </div>   
   
   </>
  )
}
