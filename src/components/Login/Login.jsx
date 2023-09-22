import React from 'react'
import {Link} from 'react-router-dom'
import '../../Items/Button/Button.css'
import './Login.css'

export default function Login() {
  return (
    <>
    <div className=" element-Wrapper login-Container">
    <div className="flex box-wrapper login-Box">
        <div className=" flexC login-left-section">
        <h1 className='primary-heading'>SIGN IN</h1>
    <div className="paraText">
  New User?<Link  to='/register'>Create an account</Link>
</div></div>         
<div className="flex p-5 login-right-section">
<form >
<div className=" flexC ">
<input  type="email"  id="email" name="email" placeholder="E-mail address" required autocomplete="off"/>
<input type="password"  id="pw" name="pw" placeholder="Password" required />

<button type="submit"  className='button'>SignIn</button>


</div>
</form>
        </div>
    </div>
    </div>
    
    </>
  )
}
