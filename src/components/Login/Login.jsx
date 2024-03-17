import React, { useState  } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { login_function } from "../Services/Apis";
import { useDispatch } from "react-redux";
import { login, userInfo } from "../../Redux/loginSlice";
import "../../Items/Button/Button.css";
import { Toaster } from "react-hot-toast";
import { success, fail } from "../../Items/Toastify";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // console.log(location);

  const [loginForm_data, setloginForm_data] = useState({ email: "", pw: "" });

//    useEffect(() => {
// if(location.state){success(location.state)}
//   },[location.state]);

 
 
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
          // localStorage.setItem(
          //   "userProjectoData",
          //   JSON.stringify(data.userInfo)
          // );
          dispatch(login());
          dispatch(
            userInfo({
              name: data.userInfo.firstName + " " + data.userInfo.lastName,
              email: data.userInfo.email,
              totalProject: data.userInfo.totalProject,
            }) )
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
        <section className=" element-Wrapper pt-[55px] flexC lg:flex-row  lg:justify-evenly  ">
          <div className=" flexC  mb-[20px] ">
            <h1 className="main-heading">
              SIGN IN
            </h1>
            <p className="paraText">
              New User?&nbsp;<Link className="font-semibold italic animated-underline" to="/register">Create an account</Link>
            </p> 
          </div>    
            <form className="flexC" onSubmit={submit_login}>         
                <input
                  className=" input md:w-[400px] mb-2 "
                  onChange={get_Data}
                  // value={loginForm_data.email}
                  value="abhishekhp935@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  required
                  autocomplete="off"
                  autoFocus="true"
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
            </form>
        </section>
  
    </>
  );
}
