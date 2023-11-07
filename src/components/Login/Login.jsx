import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login_function } from "../Services/Apis";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/loginSlice";
import "../../Items/Button/Button.css";
import { Toaster } from "react-hot-toast";
import { success, fail } from "../../Items/Toastify";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm_data, setloginForm_data] = useState({ email: "", pw: "" });

  // useEffect(() => {
  //   const userLogin = JSON.parse(localStorage.getItem("userData"));
  //   if (userLogin) {
  //     dispatch(login());
  //   }
  // });

  const get_Data = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setloginForm_data({ ...loginForm_data, [name]: value });
  };

  const submit_login = async (e) => {
    e.preventDefault();
    if (!loginForm_data.email || !loginForm_data.pw) {
      fail("Please enter all the fields for login");
    } else {
      try {
        const { data } = await login_function(loginForm_data);
        if (data.success) {
          success(data.message);
          localStorage.setItem("userData", JSON.stringify(data.loginDetails));
          localStorage.setItem('userProjectoData',JSON.stringify(data.userInfo))
          dispatch(login());
          navigate("/");
        } else {
          fail(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      <div className=" flex element-Wrapper pt-[55px]">
        <div className=" box-wrapper flexC lg:flex-row w-[100vw] lg:justify-evenly  h-[100%]">
          <div className=" flexC login-left-section mb-[20px]">
            <h1 className="primary-heading sm:text-[5vw] lg:text-[8vw]">
              SIGN IN
            </h1>
            <div className="paraText">
              New User?<Link to="/register">Create an account</Link>
            </div>
          </div>
          <div className="flex  login-right-section">
            <form onSubmit={submit_login}>
              <div className=" flexC  ">
                <input
                  className=" input md:w-[400px] mb-2 "
                  onChange={get_Data}
                  value={loginForm_data.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  required
                  autocomplete="off"
                />
                <input
                  className=" input md:w-[400px] mb-2 "
                  onChange={get_Data}
                  value={loginForm_data.pw}
                  type="password"
                  id="pw"
                  name="pw"
                  placeholder="Password"
                />
                <button type="submit" className="button">
                  SignIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
