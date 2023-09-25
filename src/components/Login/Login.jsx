import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { success,fail } from '../../Items/Toastify'
import '../../Items/Button/Button.css'
import './Login.css'
import { login_function } from '../Services/Apis'


export default function Login() {
const navigate=useNavigate()


const [loginForm_data,setloginForm_data]=useState({email:"",pw:""})

const get_Data=(e)=>{
  let name=e.target.name
  let value=e.target.value
  setloginForm_data({...loginForm_data,[name]:value})
}

const submit_login=async(e)=>{
  e.preventDefault()
try {
  const {data}=await login_function(loginForm_data) 
  console.log(data)
  if (data.success){
    console.log(data.message);success(data.message)
    navigate('/')
  }
  else{   console.log(data.message);
         fail(data.message)    }
} catch (error) {
  console.log(error)  }
}


  return (
    <>
    <div className=" flex element-Wrapper login-Container">
      <ToastContainer/>
    <div className="flex box-wrapper login-Box">
        <div className=" flexC login-left-section">
        <h1 className='primary-heading'>SIGN IN</h1>
    <div className="paraText">
  New User?<Link  to='/register'>Create an account</Link>
</div></div>         
<div className="flex p-5 login-right-section">
<form onSubmit={submit_login} >
<div className=" flexC ">
<input  onChange={get_Data} value={loginForm_data.email} type="email"  id="email" name="email" placeholder="E-mail address" required autocomplete="off"/>
<input onChange={get_Data} value={loginForm_data.pw} type="password"  id="pw" name="pw" placeholder="Password" required />

<button type="submit"  className='button'>SignIn</button>


</div>
</form>
        </div>
    </div>
    </div>
    
    </>
  )
}
