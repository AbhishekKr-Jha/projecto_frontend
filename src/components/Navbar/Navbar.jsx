import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="navContainer">
<div className=" flex navbarBox ">
    <div className=" padding navbarFirstBox">

    <h1>Projecto</h1>

</div>
<div className=" flex padding navbarSecondBox">
<div className="navItems">
    <span>About</span>
</div>

<div className="navItems">
    <span>contact</span>
</div>

{/* <div className="navItems">
    <span></span>
</div> */}
</div>

<div className="  flex padding navbarThirdBox">
<div className="navItems">
    <span>SignUp</span>
</div>
<div className="navItems">
    <span>LogIn</span>
</div>
</div>

</div>
    </div>
    
    
    </>
  )
}
