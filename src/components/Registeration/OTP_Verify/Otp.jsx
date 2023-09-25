import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Otp.css'
import { verifyOTP_function } from '../../Services/Apis'
import Loader from '../../../Items/loader/Loader'

export default function Otp() {

  const location = useLocation()
  const navigate = useNavigate()
  const email = location.state
  console.log(email)
  console.log("jk")
  console.log(location)

const [loader,setloader]=useState(false)
  const [Otp_detail, setOtp_detail] = useState({ email: location.state, otp: "" })
  console.log("mbmb")
  const get_Data = (e) => {
    setOtp_detail({ ...Otp_detail, otp: e.target.value });
    console.log(Otp_detail)
  }
  console.log(Otp_detail)
  const submit_data = async (e) => {
    e.preventDefault()
    setloader(true)
    try {
      const { data } = await verifyOTP_function(Otp_detail)

      console.log(data)
      setTimeout(() => {
        setloader(false)
        if (data.success) {
         
          console.log(data.message);
          
          navigate('/register', { state: email })
         
        }
        else {
          console.log(data.message);
        }
      },3000)
     }catch (error) {
        console.log(error)
      }
    }

  return (
      <>
        <div className="flexC element-Wrapper otpVerify-Container">
{loader?<Loader text="OTP"/>:<>
          <h1 className='m-5'>Enter 6-digit OTP</h1>

          <form onSubmit={submit_data} >
            <div className="flexC">
              <input type="text" onChange={get_Data} name="otp" value={Otp_detail.otp} placeholder="please Enter your OTP" autoComplete="off" />
              <button type="submit" className='button'>Send</button>
            </div>
          </form>
          </> }
        </div>


      </>
    )
  }
