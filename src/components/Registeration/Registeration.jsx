import React,{useState} from 'react'
import './Registeration.css'
import {Link} from 'react-router-dom'

export default function Registeration() {
const [checkbox_change,setcheckbox_change]=useState(false)
const input_check=()=>{
checkbox_change?setcheckbox_change(false):setcheckbox_change(true)
}

  return (
   <>
   

     <div className=" element-Wrapper registeration-Container">
<div className="flex box-wrapper  registeration-Box">
    <div className='flexC register-left-section '>
    <h1 className='primary-heading'>SIGN UP</h1>
    <div className="paraText">
  Already have an account?<Link  to='/login'>Login</Link>
</div></div>
<div className=" register-right-section">
<form  >
<div className=" flexC ">

<input  type="text" id="first-name" name="firstName" placeholder="First_Name" required />
<input  type="text" id="last-name" name="lastName" placeholder="Last_Name" required />

<input  type="email"  id="email" name="email" placeholder="E-mail address" required autocomplete="off"/>
<input type="password"  id="pw" name="pw" placeholder="Password" required />
<input  type="text"  id="cpw" name="cpw" placeholder="Confirm Password" required />
<div className="d-flex m-2">
  <input type="checkbox" onChange={input_check} id='register-checkbox' name="policy" required />
  <label for="policy">Agree to our privacy policy</label>
</div>
{checkbox_change &&
<button type="submit"  className='button'>SignUp</button>
}

</div>
</form>
</div>
</div>

     </div>
  
   
   </>
  )
}
