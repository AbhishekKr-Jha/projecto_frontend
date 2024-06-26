import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fail } from '../../../../Items/Toastify'
import { updateProject_function } from '../../../Services/Apis'
import { useDispatch } from 'react-redux'
import { updateUserProjects } from '../../../../Redux/projectSlice'
import Loader from '../../../../Items/loader/Loader'

export default function UpdateProject() {
    const location=useLocation()
const navigate=useNavigate()
    const initialData=location.state
    const dispatch=useDispatch()
    const [updatedProjectData,setUpdatedProjectData]=useState({
        project_id:initialData.projectId,
        user:initialData.creatorId, 
        title:initialData.title,
        live:initialData.liveLink,
        github:initialData.githubLink,
        description:initialData.description,
    })

const [loader,setLoader]=useState(false)

    const getUpdatedProjectData=(e)=>{
setUpdatedProjectData({...updatedProjectData,[e.target.name]:e.target.value})
    }
const submit_updated_project=async(e)=>{
  e.preventDefault()

    if(!updatedProjectData.title || !updatedProjectData.description){
        fail("Title and Description are required")
    }
    else{
      setLoader(true)
try {
    const {data}=await updateProject_function(updatedProjectData)
    if(data.success){
        dispatch(updateUserProjects(data.updateProject))
        setLoader(false)
        if(!loader){
          navigate('/user_home')
        }
    }
    else{
        fail(data.message);
        console.log("else block");
        setLoader(false)
    }
} catch (error) {
    fail("An Error Occured");
    setLoader(false)
    fail("Try after some time")
    console.log("catch block in frontend active due to ---  ", error);
}}
}

  return (
  <>
    {loader ? (
      <Loader text="Updating your Project..." />
    ) :  ( 
      <section className=" element-Wrapper flexC space-y-3 pt-[55px]  pb-[20px] ">
         
         <h1 className=" text-xl  sm:mt-[20px] mb-[2vh] md:mb-[25px]   md:text-2xl"> Update project </h1>

       <form className="flexC space-y-3 " onSubmit={submit_updated_project}>
         <input
           onChange={getUpdatedProjectData}
           value={updatedProjectData.title}
           className=" input add-project-input"
           type="text"
           name="title"
           placeholder="Project Title"
           minlength="4" 
         />
         <div>
           <h4 className="text-[16px] mb-1 ">Project Live Link</h4>
           <input
             onChange={getUpdatedProjectData}
             value={updatedProjectData.live}
             className=" input add-project-input"
             type="text"
             name="live"
           />
         </div>
         <div >
           <h4 className="text-[16px] mb-1"> GitHub Link</h4>
           <input
             onChange={getUpdatedProjectData}
             value={updatedProjectData.github}
             className=" input add-project-input"
             type="text"
             name="github"
           />
         </div>
         <div >
           <h4 className="text-[16px] mb-1"> Project Description</h4>
           <textarea
             onChange={getUpdatedProjectData}
             value={updatedProjectData.description}
             type="text"
             name="description"
             className="input add-project-input "
             rows="4"
             minlength="10"
             maxLength="1500"
           ></textarea>
         </div>
        
           <button type="submit" className="button">
            Update
           </button>
         
       </form>
   
   </section>
   )}
   </>
  )
}
