import React from "react";
import "../../Items/Underline.css";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/loginSlice";
import Logout from "../../Items/Logout/Logout";


export default function Navbar() {
  const isLogin = useSelector((state) => state.login.isLogin);

const dispatch = useDispatch();
const navigate = useNavigate();
const logoutBtn = () => {
  console.log("logout button clicked");
  localStorage.removeItem("userData");
  localStorage.removeItem("userProjectoData");
  dispatch(logout());
  navigate("/"); 
}; 
 

  return (
    <>
      <div className="navContainer z-[100] fixed top-0 bg-black  max-h-max w-full max-w-[1800px]  px-3 sm:px-4 md:px-5 ">
        <div className=" flex padding  navbarBox ">
          <div className=" navbarFirstBox">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              <Link className="normal-link" to="/">
                Projecto
              </Link>
            </h1>
          </div>
          <div className=" flex  navbarSecondBox">
            <div className="  navItems hidden lg:block ">
              <span className="animated-underline ">
                <NavLink className="normal-link" to="/about">
                  About 
                </NavLink>
              </span>
            </div>
            {isLogin && (
              <div className="  navItems px-1 py-0 hidden md:block">
                {/* <div className="border-solid border-2 border-white  rounded-[100%]  "> */}
                  <NavLink to="user_profile" className=" text-4xl ri-account-circle-fill ">
                    {/* <i className=" text-4xl ri-account-circle-fill "></i> */}
                  </NavLink>
                {/* </div> */}
              </div>
            )}

            <div className="navItems hidden lg:block">
              <span className="animated-underline">
                <NavLink className="normal-link" to="/contact">
                  contact
                </NavLink>
              </span>
            </div>
          </div>

          <div className="  flex navbarThirdBox">
            {!isLogin && (
              <div className="  navItems hidden lg:block">
                <span className="animated-underline">
                  <NavLink className="normal-link" to="/options_page">
                    Explore
                  </NavLink>
                </span>
              </div>
            )}

            {isLogin && (
              <div className="  navItems border-solid border-white border-2 p-1 rounded-full">
                <span>
                  <NavLink to="/search_email">🔎</NavLink>
                </span>
              </div>
            )}

            {isLogin && (
              <div className="navItems hidden md:block">
                <span onClick={logoutBtn}>
                  <Logout />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
