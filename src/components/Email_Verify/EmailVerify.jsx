import React, { useState } from "react";
import email_image from "./email_image.svg";
import { useNavigate } from "react-router-dom";
import { sendOTP_function } from "../Services/Apis";
import { success, fail } from "../../Items/Toastify";
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
        console.log("data-->", data);
        if (data.success) {
          setTimeout(() => {
            setloader(false);
            navigate("/otp", { state: email.email });
          }, 1200);
        } else {
          setTimeout(() => {
            setloader(false);
            fail(data.message);
          }, 1300);
        }
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
      <div className="flex element-Wrapper pt-[25px]     ">
        {loader ? (
          <Loader text="Email" />
        ) : (
          <div className=" flexC lg:flex-row w-[100vw] lg:justify-evenly  h-[100%]  ">
            <div className="    email-left-section  ">
              <img
                className="my-1 w-[55vw] md:w-[38vw] lg:w-[360px]"
                src={email_image}
                alt="loading..."
              />
            </div>
            <div className="flexC email-right-section  ">
              <h1
                className="text-[7vw] sm:text-[30px] md:text-[46px] "
                style={{ margin: "50px 0" }}
              >
                Email Verification
              </h1>
              <form onSubmit={send_otp}>
                <div className=" flexC ">
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
                  <button type="submit" className="button ">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
