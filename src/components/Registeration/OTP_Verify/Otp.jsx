import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOTP_function } from "../../Services/Apis";
import Loader from "../../../Items/loader/Loader";
import { Toaster } from "react-hot-toast";
import { fail } from "../../../Items/Toastify";

export default function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state;
  console.log(email);
  console.log("jk");
  console.log(location);

  const [loader, setloader] = useState(false);
  const [Otp_detail, setOtp_detail] = useState({
    email: location.state,
    otp: "",
  });

  const get_Data = (e) => {
    let value = e.target.value;
    setOtp_detail({ ...Otp_detail, otp: value });
    console.log(Otp_detail);
  };
  console.log(Otp_detail);
  const submit_data = async (e) => {
    e.preventDefault();
    if(!Otp_detail.email){fail("Invalid Authorization")}
    else if(!Otp_detail.otp || Otp_detail.otp.length!==6){fail("Please enter 6-digit otp")}
    else{
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
          fail(data.message)
        }
      },1200);
      } catch (error) {
        setloader(false)
        console.log(error)
      }
     }
    }


  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      <div className="flexC element-Wrapper ">
        {loader ? (
       <Loader text="Verifying OTP"/>
        ) : (
          <>
            <div className="my-4">
              <h1 className="text-[7vw] sm:text-[30px] font-serif md:text-[46px]">
                ENTER 6-DIGIT OTP
              </h1>
              <h3 className="text-base font-medium sm:text-lg text-center mt-2 ">
                Send in Email <br /> ( Check your scam box )
              </h3>
            </div>
            <form onSubmit={submit_data}>
              <div className="flexC">
                <input
                  className=" input md:w-[400px]"
                  type="text"
                  onChange={get_Data}
                  name="otp"
                  value={Otp_detail.otp}
                  pattern="\d{6}"
                  title="Enter a 6-digit number" 
                  placeholder="Please Enter Your OTP"
                  autoComplete="off"
                />
                <button type="submit" className="button">
                  Send
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
