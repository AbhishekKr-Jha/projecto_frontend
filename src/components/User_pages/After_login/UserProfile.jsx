import React, { useState } from "react";
import "../../../Items/Button/Edit_Btn.css";
import { NavLink } from "react-router-dom";
import { changePassword_function } from "../../Services/Apis";
import { Toaster } from "react-hot-toast";
import { success, fail } from "../../../Items/Toastify";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function UserProfile() {
  const [new_password, setnew_password] = useState({
    pw: "",
    user: JSON.parse(localStorage.getItem("userData")).id,
  });
  const gettingUserDetails = JSON.parse(
    localStorage.getItem("userProjectoData")
  );

  const edit_password = () => {
    document.getElementById("edit-password-field").style.display = "flex";
    document.getElementById("password-field").style.display = "none";
  };

  const new_password_data = (e) => {
    const value = e.target.value;
    setnew_password({ ...new_password, [e.target.name]: value });
    console.log(new_password);
  };
  const change_password = async (e) => {
    e.preventDefault();
    if (!new_password.pw || !new_password.cpw) {
      fail("All fields are necessary");
    } else {
      if (new_password.pw === new_password.cpw) {
        try {
          const { data } = await changePassword_function({
            user: new_password.user,
            new_password: new_password.pw,
          });
          if (data.success) {
            document.getElementById("edit-password-field").style.display =
              "none";
            document.getElementById("password-field").style.display = "flex";
            console.log(data.message);

            success("Password Updated successfully");
          } else {
            fail("Password Updation Error");
            console.log(data.message);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        fail("Password and Confirm password does not match");
        console.log("password and confirm password does not match");
      }
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      <div className="element-Wrapper pt-[55px] w-[100vw]">
        <div className="flexC   h-[100%] mt-5 md:flex-row md:justify-evenly">
          {/* todo_____ left section */}
          <div className=" flexC h-[100%]  ">
            <div className="overflow-hidden p-[5px] w-[40vw] max-w-[150px] rounded-full border-2 border-solid border-white sm:w-[34vw] md:w-[150px] ">
              <img
                className="w-[100%] rounded-full"
                src="https://sg-res.9appsdownloading.com/sg/res/jpg/7d/61/e93e5eb2a71a82e81dbe1fb3267e-4a3e.jpg?x-oss-process=style/hq"
                alt="loading..."
              />
            </div>
            <div className="mt-3 flex space-x-0">
              <div className="flexC ">
                <p className="text-[4.7vw]  m-2 uppercase sm:text-xl ">User</p>
                <p className="text-[4.7vw] m-1 uppercase sm:text-xl ">email</p>
              </div>
              <div className="flexC ">
                <p className="text-[4.7vw] m-2 self-start sm:text-xl ">
                  {gettingUserDetails.firstName}&nbsp;
                  {gettingUserDetails.lastName}
                </p>
                <p className="text-[4.7vw] m-1 sm:text-xl ">
                  {gettingUserDetails.email}
                </p>
              </div>
            </div>
            <button className="edit-button m-4  ">
              <svg className="edit-svgIcon" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>
            {/*________________---- password box */}
            {/* <div className="flex flex-wrap  p-2"> */}
            <div className="flex m-2 ">
              <div className="flex   " id="password-field">
                <p className="text-[4.7vw] sm:text-xl  ">Password</p>
                <button className="edit-button " onClick={edit_password}>
                  <svg className="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>
              </div>
              <form
                className="flexC hidden"
                onSubmit={change_password}
                id="edit-password-field"
              >
                <input
                  className=" input w-[85vw]  sm:w-[300px] "
                  onChange={new_password_data}
                  value={new_password.pw}
                  type="password"
                  id="pw"
                  name="pw"
                  placeholder="Password"
                  required
                />
                <input
                  className=" input w-[85vw]  sm:w-[300px]"
                  onChange={new_password_data}
                  value={new_password.cpw}
                  type="text"
                  id="cpw"
                  name="cpw"
                  placeholder="Confirm Password"
                  required
                />
                <div className="flex  mt-2">
                  <button type="submit" className="button mt-0 ">
                    Save
                  </button>
                  <IconButton
                    className=""
                    onClick={() => {
                      document.getElementById(
                        "edit-password-field"
                      ).style.display = "none";
                      document.getElementById("password-field").style.display =
                        "flex";
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </form>
              {/* </div> */}
            </div>
          </div>
          {/* todo ______right section */}
          <div className="flexC my-5">
            <div className="flexC space-y-5 ">
              <NavLink to="/user_home" className="">
                {gettingUserDetails?.projects ? (
                  <h3 className="text-[4.7vw] sm:text-xl lg:hover:border-solid lg:p-2 rounded-xl border-white lg:hover:border-b-[1px]">
                    {gettingUserDetails?.projects} added
                  </h3>
                ) : (
                  <h3 className="text-[4.7vw] sm:text-xl lg:hover:border-solid lg:p-2 rounded-xl border-white lg:hover:border-b-[1px]">
                    No Projects Yet
                  </h3>
                )}
              </NavLink>
              <NavLink
                to="/add_project"
                className=" text-[4.7vw] sm:text-xl lg:hover:border-solid lg:p-2 rounded-xl border-white lg:hover:border-b-[1px] "
              >
                <AddIcon style={{ fontSize: 27 }} />{" "}
                {gettingUserDetails?.projects
                  ? "More Projects"
                  : "First Project"}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
