import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../../Items/project_card/ProjectCard'

export default function SearchResult() {
  const location=useLocation()
const Project=location.state

  return (
   <>
  <div className="element-Wrapper flexC pt-[55px] ">
  {/* <button class="search_button">
  <span class="search_span">🔎</span>
</button> */}
<div className="">
    <h3 className='text-[6.4vw] sm:text-[30px] md:text-[40px] lg:text-[42px] '>abhishekhp935@gmail.com</h3>
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
