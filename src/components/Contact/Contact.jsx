import React from 'react'
// import contact_image from './contact_image.svg'
import i1 from './i1.svg'
import './Contact.css'


export default function Contact() {
  return (
    <>
    <div className="element-Wrapper contact-Container">
      
        <div className="flex box-wrapper contact-Box">
<div className=" flex contact-left-section">
    <img src={i1} alt="loading..."  /> 
</div>
<div className="flex contact-right-section">
     {/* <h1>Connect with Us</h1>  */}
<form >
<div className=" flexC ">
<input  type="email"  id="email" name="email" placeholder="E-mail address"  autocomplete="off"/>
<textarea  type="text"  id="message"  name="message" placeholder="Your message"  />
<button type="submit" className='button'>Send</button> 
</div>
</form>

 

</div>
        </div>
    </div>
    
    
    
    </>
  )
}
