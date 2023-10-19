import React from 'react'
import ProjectCard from '../../../Items/project_card/ProjectCard'
import { Link } from 'react-router-dom'
 

export default function UserHome() {
  return (
 <>
<div className="element-Wrapper pt-[55px]  ">
<div className="flexC  space-y-3 h-[100%] mt-[100px] ">
<p className='text-xl mt-6'>abhishekhp935@gmail.com</p>
<p className='text-xl  mt-5' >Projects</p>

<div className=" mt-4 flex justify-center border-2 border-white border-dashed rounded-lg p-3">
  <Link to='/'>
<button title="Add New" className="group cursor-pointer hover:rotate-90 active:scale-100 duration-500">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-slate-200 fill-none group-active:fill-slate-600 duration-200">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
    <path d="M8 12H16" stroke-width="1.5"></path>
    <path d="M12 16V8" stroke-width="1.5"></path>
  </svg>
</button></Link>
<p className='text-xl'>Add Projects</p>
</div>
<div className="flexC space-y-2">
<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
</div>          

  </div>                                
 </div>
 </>
  ) 
}
