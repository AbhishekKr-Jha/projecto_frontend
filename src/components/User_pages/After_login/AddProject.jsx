import React from 'react'



export default function AddProject() {
  return (
   <>
   <div className=" element-Wrapper flex pt-[55px] bg-green-800  ">
    <div className="  flexC  space-y-3 bg-red-900 h-[100%]  ">
      <h1 className=' text-xl mb-[5vh] '> Adding project... </h1>
    <input  className=' input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] '  type="text" name="liveLink" placeholder="Project Title"  />
      <div className=""> 
        <h4 className='text-[16px] mb-1 md:'>Project Live Link</h4>
  <input  className=' input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] '  type="text" name="liveLink" placeholder=""  />
      </div>
      <div className="">
        <h4 className='text-[16px] mb-1' > Git Hub Link</h4>
          <input  className=' input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] '  type="text" name="liveLink" placeholder=""  />
      </div>
<div className="">
  <h4 className='text-[16px] mb-1'>About The Project</h4>
  <textarea className='input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] ' rows='4'></textarea>
</div>
<button type="submit"  className='button'>SignIn</button>
    </div>
   
   </div>
   
   
   </>
  )
}
