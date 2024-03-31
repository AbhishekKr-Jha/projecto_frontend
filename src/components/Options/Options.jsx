import React from 'react'
import {Link} from 'react-router-dom'
import '../../Items/Cards.css'

export default function Options() {
  return (
   <>
   <div className="flex flex-col items-center justify-start element-Wrapper pt-[40px] sm:pt-[110px] ">
   <h1 className='mt-6 md:mt-12 sm:mt-0  text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px] '>Are you here to?</h1>
    <div className="flexC  options-Box md:flex-row ">

<div className="flex   ">
<div className=" m-2 md:m-5 flip-card"> 
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h1 className=" title ">See Projects</h1>
    
        </div>
        <div className="flip-card-back">
            <Link to='/search_email' className=" normal-link title">Click</Link>
        </div>
    </div>
</div>

        </div>
        <h3>or</h3>
        <div className=" flex">

        <div className="m-2 md:m-5 flip-card">
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
