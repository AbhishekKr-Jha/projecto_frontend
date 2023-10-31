import React from "react";
import "./newMenu.css";
import { NavLink } from "react-router-dom";

export default function NewMenu() {
  const closeMenu = () => {};
  return (
    <>
      {/* <div className=""> */}
      {/* <link href='https://fonts.googleapis.com/css?family=Alegreya+Sans:400,800' rel='stylesheet' type='text/css'> */}
      <nav class="menu">
        <ul id="menuBox">
          {/* <NavLink to='/user_home' ><li>Profile</li></NavLink> */}
          <li>
            <NavLink to="/user_home">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/user_home"> Projects</NavLink>
          </li>
          <li>
            <NavLink to="/add_project">Add Project</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink  to="/" >
              About
            </NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* </div> */}
    </>
  );
}
