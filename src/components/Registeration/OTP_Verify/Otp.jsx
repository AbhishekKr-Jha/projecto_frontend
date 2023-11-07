import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Otp.css'
import { verifyOTP_function } from '../../Services/Apis'
import Loader from '../../../Items/loader/Loader'
import { Toaster } from 'react-hot-toast'
import { success } from '../../../Items/Toastify'

export default function Otp() {

  const location = useLocation()
  const navigate = useNavigate()
  const email = location.state
  console.log(email)
  console.log("jk")
  console.log(location)


const [loader,setloader]=useState(false)
  const [Otp_detail, setOtp_detail] = useState({ email: location.state, otp: "" })

  const get_Data = (e) => {
    let value=e.target.value 
    setOtp_detail({ ...Otp_detail, otp: value });
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
       <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
        <div className="flexC element-Wrapper otpVerify-Container">
{loader?<Loader text="OTP"/>:<>
<div className="m-5">
          <h1 className='text-[7vw] sm:text-[30px] md:text-[46px]'>ENTER 6-DIGIT OTP</h1>
          {/* <h3 className='text-[5vw] sm:text-[25px] md:text-[46px] '>Send in Email</h3> */}
          </div>
          <form onSubmit={submit_data} >
            <div className="flexC">
              <input className='input input md:w-[400px]' type="text" onChange={get_Data} name="otp" value={Otp_detail.otp} placeholder="please Enter your OTP" autoComplete="off" />
              <button type="submit" className='button'>Send</button>
            </div>
          </form>
          </> }
        </div>


      </>
    )
  }
