import React, { useState } from 'react'
import email_image from './email_image.svg'
import { useNavigate } from 'react-router-dom'
import { sendOTP_function } from '../Services/Apis'
import { success,fail } from '../../Items/Toastify'
import Loader from '../../Items/loader/Loader'
import { ToastContainer } from 'react-toastify'
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
   <div className="flex element-Wrapper email-Container ">
   <ToastContainer/>
   {loader?<Loader text="Email" />: <div className=" flex box-wrapper email-Box">
   
    <div className=" flex email-left-section">
    <img src={email_image} alt="loading..."  /> 
</div>
<div className="flexC email-right-section">
     <h1 style={{margin:"50px 0"}}>Email Verification</h1> 
<form onSubmit={send_otp} >
<div className=" flexC ">
<input onChange={get_Data} value={email.email} type="email"  id="email" name="email" placeholder="please Enter your E-mail"  autoComplete="off"/>
<button type="submit"  className='button'>Send</button> 
</div>
</form>
</div>

    </div>      }
   </div>
   </>
  )
}
