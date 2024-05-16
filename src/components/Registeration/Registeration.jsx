import React, { useState } from "react";
import { register_function } from "../Services/Apis";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { success, fail } from "../../Items/Toastify";

export default function Registeration() {
  const location = useLocation();
  const navigate = useNavigate();

  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    email: location.state,
    pw: "",
    cpw: "",
  });

  const [checkbox_change, setcheckbox_change] = useState(false);

  const get_Data = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...Data, [name]: value });
  };

  const input_check = () => {
    checkbox_change ? setcheckbox_change(false) : setcheckbox_change(true);
  };

  const submit_register = async (e) => {
    e.preventDefault();
    if (!Data.firstName || !Data.lastName || !Data.email || !Data.pw || !Data.cpw) {
      fail("All fields are required");
    } else {
      if(Data.pw === Data.cpw){
      try {
        const { data } = await register_function(Data);
        if (data.success) {
          success(data.message);
          setTimeout(() => {
            navigate('/login')
          }, 2000);
        } else {
          fail(data.message);
        }
      } catch (error) {
        console.log("catch block --", error);
        fail(error)
      }
    }else{fail("Password and Confirm password not matched")}
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      
        <section className="   element-Wrapper pt-[-10px] lg:pt-[55px]  flexC lg:flex-row lg:justify-evenly  ">
          <div className="flexC mb-[20px]  ">
            <h1 className="main-heading ">
              SIGN UP
            </h1>
            <p className="paraText ">
              Already have an account?&nbsp;<Link className=" font-semibold italic animated-underline " to="/login">Login</Link>
            </p>
          </div>
        
            <form className="flexC" onSubmit={submit_register}>
                <input
                  className=" input md:w-[400px] "
                  value={Data.firstName}
                  onChange={get_Data}
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First_Name"
                  required
                />
                <input
                  className=" input md:w-[400px] "
                  value={Data.lastName}
                  onChange={get_Data}
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last_Name"
                  required
                />
                <input
                  className=" input md:w-[400px] "
                  value={Data.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  required
                  disabled
                  autoComplete="off"
                />
                <input
                  className=" input md:w-[400px] "
                  value={Data.pw}
                  onChange={get_Data}
                  type="password"
                  id="pw"
                  name="pw"
                  placeholder="Password"
                  required
                />
                <input
                  className=" input md:w-[400px] "
                  value={Data.cpw}
                  onChange={get_Data}
                  type="text"
                  id="cpw"
                  name="cpw"
                  placeholder="Confirm Password"
                  required
                />

                <div className="d-flex m-2">
                  <input
                    type="checkbox"
                    onChange={input_check}
                    id="register-checkbox"
                    name="policy"
                    required
                  />
                  <label for="policy">Agree to our privacy policy</label>
                </div>
                {checkbox_change && (
                  <button type="submit" className="button">
                    SignUp
                  </button>
                )}
            
            </form>
       
        </section>
 
    </>
  );
}
