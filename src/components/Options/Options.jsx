import React from 'react'
import {Link} from 'react-router-dom'
import '../../Items/Cards.css'
import './Options.css'

export default function Options() {
  return (
   <>
   <div className="flexC element-Wrapper options-container">
   <h1 className=' secondary-heading'>Are you here to?</h1>
    <div className="flex box-wrapper  options-Box">

<div className="flex  options-left-section">
<div className=" m-5 flip-card"> 
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h1 className="title">See Projects</h1>
    
        </div>
        <div className="flip-card-back">
            <Link to='/search_email' className=" normal-link title">Click</Link>
        </div>
    </div>
</div>

        </div>
        <h3>or</h3>
        <div className=" flex options-right-section">

        <div className=" m-5 flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h1 className="title">Add Projects</h1>
        </div>
        <div className="flip-card-back">
            <Link to='/Email_Verification' className=" normal-link title ">SignUp</Link>
            <Link to='/login' className=" normal-link title">SignIn</Link>
        </div>
    </div>
</div>


 
        </div>
      
    </div>
   </div>
   
   
   </>
  )
}
