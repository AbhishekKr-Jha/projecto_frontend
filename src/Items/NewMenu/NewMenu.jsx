import React from "react";
import "./newMenu.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/loginSlice";


export default function NewMenu() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
const navigate = useNavigate();

const hideSideBar=()=>{  
  // document.getElementById('menuBox').style.transform='scale(0)'
}

  const logoutBtn = () => {
    console.log("logout button clicked");
    localStorage.removeItem("userData");
    localStorage.removeItem("userProjectoData");
    dispatch(logout());
    navigate("/"); 
  }; 
  return (
    <> 
     
      <nav class="menu">
        <ul id="menuBox">
        
         { !isLogin && <li className="flex lg:hidden " onClick={hideSideBar}>
            <NavLink to="/options_page" >
              Explore
            </NavLink>
          </li>}
         { isLogin &&  <>
          <li className="flex " onClick={hideSideBar}>
            <NavLink to="/user_profile">Profile</NavLink>
          </li>
          <li className="flex " onClick={hideSideBar}>
            <NavLink to="/user_home"> Projects</NavLink>
          </li>
          <li className="flex " onClick={hideSideBar}>
            <NavLink to="/add_project">Add Project</NavLink>
          </li> </> }
          <li className="flex lg:hidden " onClick={hideSideBar}>
            <NavLink  to="/about" >
              About
            </NavLink>
          </li>
          <li className="flex  lg:hidden " onClick={hideSideBar}>
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </li>
         { isLogin && <li className="flex  lg:hidden " onClick={logoutBtn}>
             Logout
          </li> }
         
        </ul>
      </nav>

      {/* </div> */}
    </>
  );
}
