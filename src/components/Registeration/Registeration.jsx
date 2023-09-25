import React,{useState} from 'react'
import './Registeration.css'
import { register_function } from '../Services/Apis'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { success,fail } from '../../Items/Toastify'
import { ToastContainer } from 'react-toastify';

export default function Registeration() {
const location=useLocation()
const navigate=useNavigate()


const [Data,setData]=useState({firstName:"",lastName:"",email:location.state,pw:"",cpw:""})

const get_Data=(e)=>{
  let name=e.target.name
  let value=e.target.value
  setData({...Data,[name]:value})
}





const [checkbox_change,setcheckbox_change]=useState(false)
const input_check=()=>{
checkbox_change?setcheckbox_change(false):setcheckbox_change(true)
}


const submit_register=async(e)=>{
e.preventDefault()

try {
  const {data}=await register_function(Data)
  console.log(data)
  if (data.success){
    console.log(data.message);success(data.message)
    navigate('/options_page')
  }
  else{   console.log(data.message);
         fail(data.message)    }
} catch (error) {
  console.log(error)
}


}





  return (
   <>
   

     <div className="flex element-Wrapper registeration-Container">
      <ToastContainer/>
<div className="flex box-wrapper  registeration-Box">
    <div className='flexC register-left-section '>
    <h1 className='primary-heading'>SIGN UP</h1>
    <div className="paraText">
  Already have an account?<Link  to='/login'>Login</Link>
</div></div>
<div className=" register-right-section">
<form onSubmit={submit_register}  >
<div className=" flexC ">

<input value={Data.firstName} onChange={get_Data}  type="text" id="first-name" name="firstName" placeholder="First_Name" required />
<input value={Data.lastName}  onChange={get_Data}  type="text" id="last-name" name="lastName" placeholder="Last_Name" required />
<input value={Data.email}  onChange={get_Data}  type="email"  id="email" name="email" placeholder="E-mail address" required disabled autocomplete="off"/>
<input value={Data.pw}  onChange={get_Data} type="password"  id="pw" name="pw" placeholder="Password" required />
<input  value={Data.cpw}  onChange={get_Data} type="text"  id="cpw" name="cpw" placeholder="Confirm Password" required />

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
