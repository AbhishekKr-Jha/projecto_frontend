import React, { useState  } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { login_function } from "../Services/Apis";
import { useDispatch } from "react-redux";
import { login, userInfo } from "../../Redux/loginSlice";
import "../../Items/Button/Button.css";
import { Toaster } from "react-hot-toast";
import Loader from '../../Items/loader/Loader'
import { success, fail } from "../../Items/Toastify";
import { REACT_APP_URL } from "../Services/Helper";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // console.log(location);

  const [loginForm_data, setloginForm_data] = useState({ email: "", pw: "" });
const [loader,setLoader]=useState(false)
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
 
    console.log("out",loginForm_data)
    if (!loginForm_data.email || !loginForm_data.pw) {
      fail("Please enter all the fields for login");
    } else {
      setLoader(true)
      try {
       
        const {data} = await login_function(loginForm_data);
        console.log("data is",data)
        console.log("insie",loginForm_data)
        setLoader(false)
        if (data?.success) {
          success(data?.message);
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
          console.log("entered in else")
          fail(data.message);
        }
      } catch (error) {
        setLoader(false)
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      { loader ? ( <Loader text="Fetching data from server ..." /> ) :
       ( <section className=" element-Wrapper pt-[55px] flexC lg:flex-row  lg:justify-evenly  ">
         <span> abhishekhp935@gmail.com
          <p>pw1234@aryan</p></span>
          <div className=" flexC  mb-[20px] ">
        
            <h1 className="main-heading">
              SIGN IN
            </h1>
            <p className="paraText">
              New User?&nbsp;<Link className="font-semibold italic animated-underline" to="/register">Create an account</Link>
            </p> 
            <button className=" border-2 border-blue-700 " onClick={()=>console.log("--env--",REACT_APP_URL)}>
          
            </button>
          </div>    
            <form className="flexC" onSubmit={submit_login}>         
                <input
                  className=" input md:w-[400px] mb-2 "
                  onChange={get_Data}
                  // value={loginForm_data.email}
                  value={loginForm_data.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  required
                  autoComplete="off"
                  autoFocus
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
        </section>) }
  
    </>
  );
}
