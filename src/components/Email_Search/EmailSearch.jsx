import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoResult from "./NoResult.svg";
import "../../Items/Search_icon.css";
import { getProject_function, realTimeSearch_function } from "../Services/Apis";
import { Toaster } from "react-hot-toast";
import { fail, success } from "../../Items/Toastify";
import { useSelector } from "react-redux";
import Loader2 from "../../Items/loader2/Loader2";
// import Loader from "../../Items/loader/Loader";

export default function EmailSearch() {
  useEffect(() => {
    getEmails();
  }, []);
  const navigate = useNavigate();

  const userEmail = useSelector((state) => state.login.userLoginDetails.email);
  const isFollowedByMe = useSelector(
    (state) => state.login.userLoginDetails.following
  );

  //todo _____projects found
  const [searchProject, setsearchProject] = useState(" ");
  //todo ______showing or hiding image
  const [projectCount, setprojectCount] = useState(false);
  //todo ______is data successfuly found
  const [successResult, setsuccessResult] = useState(false);
  //todo ______getting email input
  const [email, setemail] = useState("akjha4127@gmail.com");
  //todo ______setting the emails for real time search
  const [realTimeEmail, setrealTimeEmail] = useState([]);
  //todo ______loader
  const [loader, setLoader] = useState(false);
  //todo ______show or hide the real time serach emails
  const [emailsView, setemailsView] = useState(false);
  const get_projects = async () => {
    
    setemailsView(false);
    try {
      if (!email) {
        fail("Email is required");
      } else {
        setLoader(true);
        const { data } = await getProject_function(email, userEmail);
        console.log(email, userEmail);
        if (data?.success) {
          setLoader(false)
          success(data.message);
          setsuccessResult(true);
          setsearchProject(data.userDetails);
          console.log("---", data.userDetails);
        } else {
          setLoader(false)
          fail(data.message)
          setprojectCount(true);
          setsuccessResult(false);
          console.log(data.message);
        }
      }
    } catch (error) {
      fail("Server Error")
      // console.log("error block");
      // console.log(error);
    }
  };

  const navigate_result = (e) => {
    e.preventDefault();
    const isFollowed = isFollowedByMe.some((item) => item.email === email);
    navigate("/search_result", { state: { ...searchProject, isFollowed } });
  };

  //getting emails for real time search
  const getEmails = async () => {
   
    try {
      const { data } = await realTimeSearch_function();
      if (data?.success) {
        setrealTimeEmail(data.emailArray);
        console.log(data.emailArray);
        setLoader(false);
      } else {
  
        console.log(data.message);
      }
    } catch (error) {
      console.log("sorry for fetching user emails");
      console.log(error);
    }
  };
  //fliltering the emails
  const emailFilter = () => {
    return realTimeEmail.filter((str) => str.startsWith(email));
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      {/* {loader?<Loader2 />:( */}
      <div className=" flexC items-center element-Wrapper lg:pt-[55px] space-y-5">
        <h1 className="text-center text-[7vw] sm:text-[30px] md:text-[50px] ">
          -Enter Email to search for Projects-
        </h1>

        <div className=" flexC sm:flex-row space-x-4 space-y-4 sm:space-y-0  serach-Box ">
          <input
            onChange={(e) => {
              setLoader(false)
              emailFilter(e.target.value);
              setemail(e.target.value);
              setprojectCount(false);
              setemailsView(true);
              setsuccessResult(false);
            }}
            className=" input w-[85vw] md:w-[400px] mb-2 "
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail address"
            required
            autoComplete="off"
          />
          <button className="search_button" onClick={get_projects}>
            <span className="search_span">🔎</span>
          </button>
        </div>

        {email.length > 0
          ? emailsView && (
              <div className="flex flex-wrap w-full justify-evemly lg:w-[80%]">
                {emailFilter().map((ele, index) => {
                  return (
                    <span
                      onClick={() => setemail(ele)}
                      className="px-2 py-1 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer"
                      key={index}
                    >
                      {ele}
                    </span>
                  );
                })}
              </div>
            )
          : ""}

     {loader?<Loader2/>:   <>{ projectCount && (
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
            <h3>User available with {searchProject.projects.length} Project</h3>
          </div>
        )}</>}
     
      </div>
      {/*  )}  */}
    </>
  );
}
