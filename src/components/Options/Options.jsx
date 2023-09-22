import React from 'react'
import './Options.css'

export default function Options() {
  return (
   <>
   <div className="element-Wrapper options-container">
   <h1 className='mt-5 secondary-heading'>Are you here to?</h1>
    <div className="flex box-wrapper options-Box">


{/* <div className="flex"> */}
        <div className="flex  options-left-section">

<div className=" m-5 flip-card"> 
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h1 className="title">See Projects</h1>
            {/* <p className="t2">Hover Me</p> */}  
        </div>
        <div className="flip-card-back">
            <h1 className="title">BACK</h1>
            {/* <p >Leave Me</p> */}
        </div>
    </div>
</div>

        </div>
        <h3>or</h3>
        <div className=" flex options-right-section">

        <div className=" m-5 flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">Add Projects</p>
            {/* <p className="t2">Hover Me</p> */}
        </div>
        <div className="flip-card-back">
            <p className="title">SignUp</p>
            <p className="title">SignIn</p>
            {/* <p >Leave Me</p> */}
        </div>
    </div>
</div>


 
        </div>
        {/* </div> */}
    </div>
   </div>
   
   
   </>
  )
}
