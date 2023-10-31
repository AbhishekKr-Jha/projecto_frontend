import React from 'react'
import './newMenu.css'
import { NavLink } from 'react-router-dom'

export default function NewMenu() {
  return (
  <>
  {/* <div className=""> */}
  {/* <link href='https://fonts.googleapis.com/css?family=Alegreya+Sans:400,800' rel='stylesheet' type='text/css'> */}
<nav class="menu">
  <ul>
  <NavLink to='/user_home'><li>Profile</li></NavLink>
   <NavLink to="/user_home"> <li>User Home</li></NavLink>
    <NavLink to="/modals"><li>modals</li></NavLink>
    <NavLink to="/"><li>About</li></NavLink>
   <NavLink to="/contact"> <li>Contact</li></NavLink>
  </ul>
</nav>
 
  {/* </div> */}
  
  </>
  )
}
