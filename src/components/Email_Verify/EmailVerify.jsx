import React from 'react'
import email_image from './email_image.svg'
import './EmailVerify.css'

export default function Email_verify() {
  return (
   <>
   <div className=" element-Wrapper email-Container">
    <div className=" flex box-wrapper email-Box">

    <div className=" flex email-left-section">
    <img src={email_image} alt="loading..."  />
</div>
<div className="flexC email-right-section">
     <h1 style={{margin:"50px 0"}}>Email Verification</h1> 
<form >
<div className=" flexC ">
<input  type="email"  id="email" name="email" placeholder="please Enter your E-mail"  autocomplete="off"/>
<button type="submit" className='button'>Send</button> 
</div>
</form>
</div>

    </div>
   </div>
   </>
  )
}
