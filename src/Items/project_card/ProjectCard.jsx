import React from 'react'
import './project_card.css'
import {IconButton} from '@mui/material'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

export default function ProjectCard() {
  const show_full_project=()=>{console.log("ok")
let project_card= document.getElementsByClassName('card1')[0]
project_card.style.width="90vw"
project_card.style.height=''
}
  return (
  <>
<div className="flexC">
<div class="project-card">
    <div class="border"></div>
    <div class="content">
        <div class="card1">
          <div className="flex justify-between -mt-5">
            <div className="flex  space-x-1 ">
      <p class="card-title">Card Title lorem12</p>
     <span className='mb-1 ml-[-30px] hover:bg-slate-900 rounded-full'><IconButton className=''><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></IconButton></span>
<div className="text-[14px] animated-underline cursor-pointer ">Show Live</div>
</div>
<div className="flex    project-card-icons ">
<span ><IconButton className=' animated-underline cursor-pointer'><i className="ri-pencil-line"></i></IconButton></span>
<span ><IconButton className='animated-underline cursor-pointer'><i class="ri-delete-bin-5-fill"></i></IconButton></span>
  </div>
      </div>

      <p class="card-des">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        deleniti officia. Aliquam repellendus illum pariatur nesciunt dolor et
        natus consectetur repudiandae suscipit autem distinctio commodi vel sed,
        id inventore modi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor nulla temporibus, voluptas vitae dignissimos nihil magni harum totam laboriosam eligendi fuga eum adipisci cupiditate unde! Quae earum numquam voluptatum eveniet neque odit? 
      </p>
      <p class="card-text">
        <span onClick={show_full_project}>View More</span>
        <svg class="arrow-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
        </svg>
      </p>
    </div>
    </div>
    <span class="bottom-text">PROJECTO</span>
  </div>
  {/* <div className="flex  bg-green-700  project-card-icons">
<span ><IconButton className='animated-underline cursor-pointer'><i className="ri-pencil-line"></i></IconButton></span>
<span ><IconButton className='animated-underline cursor-pointer'><i class="ri-delete-bin-5-fill"></i></IconButton></span>
  </div> */}
  </div>
  </>
  )
}
  