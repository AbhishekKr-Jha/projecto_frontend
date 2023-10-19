import React, { useState } from 'react'
import { addProject_function } from '../../Services/Apis'
// import Alert from '../../../Items/alert/Alert'
// import { success,fail } from '../../Items/Toastify'
// import { ToastContainer } from 'react-toastify'



export default function AddProject() {
const [projectData,setprojectData]=useState({title:"",live:"",github:"",description:"",user:JSON.parse(localStorage.getItem('userData')).id})
  const input_project_data=(e)=>{
const value=e.target.value
setprojectData({...projectData,[e.target.name]:value})
  }


  const submit_project=async(e)=>{ 
    console.log(projectData)
    e.preventDefault()
    try {
      const {data}=await addProject_function(projectData)
      if(data.success){
        console.log(data.message)
        setprojectData({title:"",live:"",github:"",description:"",user:""})
      }
      else{
        console.log(data.message)
      }
    } catch (error) {
      console.log(error) 
    }
   

  }

  return (
   <>
   {/* <Alert/> */}

   <div className=" element-Wrapper flex pt-[55px] ">
    <div className="  flexC  space-y-3  h-[100%]  ">
      <h1 className=' text-xl mb-[5vh] '> Adding project... </h1>
      <form className='flexC space-y-3 ' onSubmit={submit_project}>
    <input onChange={input_project_data} value={projectData.title}  className=' input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] '  type="text" name="title" placeholder="Project Title"  />
      <div className=""> 
        <h4 className='text-[16px] mb-1 md:'>Project Live Link</h4>
  <input onChange={input_project_data} value={projectData.live} className=' input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] '  type="text" name="live" placeholder=""  />
      </div>
      <div className="">
        <h4 className='text-[16px] mb-1' > Git Hub Link</h4>
          <input onChange={input_project_data} value={projectData.github} className=' input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] '  type="text" name="github" placeholder=""  />
      </div>
<div className="">
  <h4 className='text-[16px] mb-1'>About The Project</h4>
  <textarea onChange={input_project_data} value={projectData.description} type="text" name='description'  className='input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] ' rows='4'></textarea>
</div>
<button type="submit"  className='button'>SignIn</button>
</form>
    </div>
   
   </div>
   
   
   </>
  )
}
