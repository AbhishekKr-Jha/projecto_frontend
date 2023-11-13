import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoResult from "./NoResult.svg";
import "../../Items/Search_icon.css";
import { getProject_function } from "../Services/Apis";
import { Toaster } from "react-hot-toast";
import { fail, success } from "../../Items/Toastify";

export default function EmailSearch() {
  const navigate = useNavigate();
//todo _____projects found
  const [searchProject, setsearchProject] = useState([]);
  //todo ______showing or hiding image
  const [projectCount, setprojectCount] = useState(false);
  //todo ______is data successfuly found
  const [successResult, setsuccessResult] = useState(false);
  //todo ______getting email input
  const [email, setemail] = useState();

  const get_projects = async () => {
    try {
      if (!email) {
        fail("Email is required");
      } else {
        const { data } = await getProject_function(email);
        if (data?.success) {
          success(data.message);
          setsuccessResult(true);
          setsearchProject(data.projects);
          // console.log(searchProject);
          // console.log(searchProject.length);
        } else {
          setprojectCount(true);
          setsuccessResult(false);
          // console.log(data.message);
        }
      }
    } catch (error) {
      console.log("error block");
      console.log(error);
    }
  };

  const navigate_result = (e) => {
    e.preventDefault()
    navigate("/search_result", { state: [searchProject,email] });
    console.log("results found")
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      <div
        className=" flexC element-Wrapper lg:pt-[55px]"
        style={{ gap: "20px" }}
      >
           <h3>newabjk1234@gmail.com</h3>
        <h3>abhishekhp935@gmail.com</h3>
        <h1 className="text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px]">
          Enter Email to search for Projects
        </h1>
     
        <div
          className=" flexC sm:flex-row  box-wrapper serach-Box"
          style={{ gap: "15px" }}
        >
          <input
            onChange={(e) => {
              setemail(e.target.value);
              setprojectCount(false);
            }}
            className=" input w-[85vw] md:w-[400px] mb-2 "
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail address"
            required
            autocomplete="true" 
          />
          <button class="search_button" onClick={get_projects}>
            <span class="search_span">🔎</span>
          </button>
        </div>
        {projectCount && (
          <div className="noResult_img ">
            <img width="120px" src={NoResult} alt="loading..." />
            <h3 className="mt-2">No Result Found</h3>
          </div>
        )}
        {successResult && (
          <div
            className="hover:scale-105 duration-150 transition-all ease-linear cursor-pointer border-solid border-white border-[1px] p-3 rounded-lg"
            onClick={navigate_result}
          >
            {/* <NavLink to='/search_result'>  */}
            <h3>User available with {searchProject.length} Project</h3>
            {/* </NavLink> */}
          </div>
        )}
      </div>
    </>
  );
}
