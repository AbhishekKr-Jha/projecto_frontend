import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../../Items/project_card/ProjectCard'

export default function SearchResult() {
  console.log("hello is it ok")
  const location=useLocation()
const Project=location.state




  return (
   <>
  <div className=" element-Wrapper flexC pt-[55px]  ">
   
  {/* <button class="search_button">
  <span class="search_span">🔎</span>
</button> */}
<div className=""> 
    <h3 className='text-lg md:text-2xl lg:text-2xl '>abhishekhp935@gmail.com</h3>
</div>
<div className="flexC space-y-2 mt-3"> 
{  Project.length ? Project.map((element,index)=>{
 return <div className="" key={index}>
    <ProjectCard projectId={element._id}  title={element.title} liveLink={element.live} githubLink={element.github} description={element.description} hide="false" />
  </div>  })  : <div className='mt-4' >   <h1 className='text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px]'>0 - Collections yet</h1> </div>
}

</div>  
  </div>
   </>
  )
}
