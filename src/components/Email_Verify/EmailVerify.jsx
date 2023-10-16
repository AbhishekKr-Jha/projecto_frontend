import React, { useState } from 'react'
import email_image from './email_image.svg'
import { useNavigate } from 'react-router-dom'
import { sendOTP_function } from '../Services/Apis'
import { success,fail } from '../../Items/Toastify'
import Loader from '../../Items/loader/Loader'
// import { ToastContainer } from 'react-toastify'
import './EmailVerify.css'

export default function Email_verify() {
const [email,setemail]=useState({email:""})
const [loader,setloader]=useState(false)

const navigate=useNavigate()

const get_Data=(e)=>{setemail({...email,email:e.target.value});console.log(email)}

const send_otp=async(e)=>{
  e.preventDefault()
  setloader(true)
  try {
    const {data}=await sendOTP_function(email)
    console.log("____D___")
    console.log(data)
    if (data.success){
      setloader(false)
      navigate('/otp',{state:email.email})
      console.log(data.message);
      success("hello")
    }
    else{   console.log("else");
           fail(data.message)      
          }
  } catch (error) { 
    console.log(error)
    console.log("catch")
  }
} 

  return (
   <>
     {/* <ToastContainer/> */}
   <div className="flex element-Wrapper pt-[25px]     ">
  
   {loader?<Loader text="Email" />: <div className=" flexC lg:flex-row w-[100vw] lg:justify-evenly  h-[100%]  ">
    <div className="    email-left-section  ">
    <img className='w-[45vw] sm:w-[32vw] md:w-[32vw] lg:w-[450px]' src={email_image} alt="loading..."  /> 
</div>
<div className="flexC email-right-section  ">
     <h1 className='text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px] ' style={{margin:"50px 0"}}>Email Verification</h1> 
<form onSubmit={send_otp} >
<div className=" flexC ">
<input className='input md:w-[400px] ' onChange={get_Data} value={email.email} type="email"  id="email" name="email" placeholder="please Enter your E-mail"  autoComplete="off"/>
<button type="submit"  className='button '>Send</button> 
</div> 
</form>
</div>
 
    </div>     
      }
     
   </div>
   </>
  )
}
