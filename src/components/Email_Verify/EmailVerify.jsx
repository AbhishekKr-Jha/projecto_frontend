import React, { useState } from "react";
import email_image from "./email_image.svg";
import { useNavigate } from "react-router-dom";
import { sendOTP_function } from "../Services/Apis";
import { fail } from "../../Items/Toastify";
import Loader from "../../Items/loader/Loader";
import { Toaster } from "react-hot-toast";

export default function Email_verify() {
  const navigate = useNavigate();

  const [email, setemail] = useState({ email: "" });
  const [loader, setloader] = useState(false);

  const get_Data = (e) => {
    setemail({ ...email, email: e.target.value });
    console.log(email);
  };

  const send_otp = async (e) => {
    e.preventDefault();
    if (!email.email) {
      fail("Email is required");
    } else {
      setloader(true);
      try {
        const { data } = await sendOTP_function(email);
        console.log("data of email verify -->", data);
        setTimeout(() => {
          setloader(false);
          if (data.success) {
            navigate("/otp", { state: email.email });
        } else {
            fail(data.message);
        }
          }, 900);
      } catch (error) {
        setloader(false);
        fail("An Error Occured");
        console.log(error);
        console.log("catch");
      }
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
     
      <div className="flex  element-Wrapper   pt-[40px] ">
        {loader ? (
          <Loader text="Verifying Email ..." />
        ) : (
          <div className=" flexC lg:flex-row w-[100vw] lg:justify-around  ">
            <div className=" ">
              <img
                className="img-size w-[45vw]"
                src={email_image}
                alt="loading..."
              />
            </div>
            <div className="flexC   ">
              <h1
                className=" text-[7vw] sm:text-[30px] md:text-[46px]  my-10"
              >
                Email Verification
              </h1>
              <form className=" flexC " onSubmit={send_otp}>
                  <input
                    className="input md:w-[400px] "
                    onChange={get_Data}
                    value={email.email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Please enter your E-mail"
                    autoComplete="off"
                  />
      <button type="submit" className="button "> Send </button>
              </form>
            </div>
          </div>
        )}
      
      </div>
    </>
  );
}
