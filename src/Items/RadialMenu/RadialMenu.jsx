import React, { useEffect } from 'react'
import './radialMenu.css'


export default function RadialMenu() {

  let count
  let isMenuOpen
  useEffect(()=>{
    count=0
    isMenuOpen = false;
  })


    const radial_menu=()=>{
        // const element=document.getElementById('radial-menu-bar')
        // count+=1
        // console.log(count)
        // if(count%2===0){     } 
    }


  return (
  <>
  
<a class='button ctrl' id='radial-menu-bar' onClick={radial_menu} href='#' tabindex='1'></a>                                                     
<ul class='tip ctrl'>
	<li class='slice'><div>✦</div></li>
	<li class='slice'><div>✿</div></li>
	<li class='slice'><div>✵</div></li>
	<li class='slice'><div>✪</div></li>
	<li class='slice'><div>☀</div></li>
</ul>

  
  </>
  )
}
