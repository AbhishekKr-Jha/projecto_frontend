import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import github from "../../../Items/Icons/github.svg";
import instagram from "../../../Items/Icons/instagram.svg";
import linkedin from "../../../Items/Icons/linkedin.svg";
import FollowModal from "../../../Items/Modals_folder/Follow_Modal/FollowModal";
 import GetProjectsComp from "./Projects_func_comp/GetProjectsComp";

export default function UserProfile() {
  const navigate=useNavigate()
  const userLoginDetails = useSelector((state) => state.login.userLoginDetails);
 
const [openModal,setOpenModal]=useState(false)
const [openFollowingModal,setOpenFollowingModal]=useState(false)
  const navigateToEditProfile = (e) => {
    e.preventDefault();
   navigate("/update_profile", { state: userLoginDetails });

  };

const redirectLink=(textLink)=>{
  console.log("clicked")
  console.log(textLink)
  window.location.href = textLink
}

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>

      <section className=" element-Wrapper   pt-[55px]   px-2 md:px-7">
        <div className="my-5 md:mt-10 sm:ml-6  xl:ml-20    flex flex-wrap gap-5 gap-y-7 md:gap-y-10 md:gap-x-20 items-start md:items-center justify-start  text-[15px] sm:text-xl lg:text-[21px] ">
          <div className="flex gap-3 gap-y-10 md:gap-x-12 ">
            <div className="w-[40vw] h-[40vw]  max-w-[105px] max-h-[105px]  sm:max-h-[150px] sm:max-w-[150px]  overflow-hidden p-[2px] lg:p-[6px] border-2 rounded-full ">
              <img
                className="w-full h-full object-cover rounded-full cursor-pointer"
                src="https://m.media-amazon.com/images/S/pv-target-images/0d3678e939af88101fef5f9567befcbbc3fc43933aa7543eac5f627f2fb1e1ac.jpg"
                alt="loading..."
              />
            </div>
            <div className=" flex flex-col items-start gap-0   ">
             
              <p className=" m-1  ">{userLoginDetails.name}</p>
              <p className="  m-1  ">{userLoginDetails.email}</p>
              <div  className="flex mt-7  gap-8 ">
                <span  onClick={()=>redirectLink(userLoginDetails.github)} className="w-[7.5vw] max-w-[35px]  bg-white rounded-md cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out ">
                  <img src={github} className="" alt="loading..." />
                </span>
                <span type="button" onClick={()=>redirectLink(userLoginDetails.linkedin)} className="w-[9.7vw] max-w-[44px] rounded-md cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out">
                  <img src={linkedin} alt="loading..." />
                </span>               
                <span onClick={()=>redirectLink(userLoginDetails.instagram)} className="w-[9.7vw] max-w-[44px] rounded-md cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out">
                  <img src={instagram} alt="loading..." />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex justify-center gap-x-14 mx-auto lg:mx-0 ">
            <div className="flex flex-col gap-0  cursor-pointer">
              <span>{userLoginDetails.totalProject}</span>
              <span>projects</span>
            </div>
            <div onClick={()=>{setOpenModal(true);console.log(userLoginDetails);}} className="flex flex-col gap-0  cursor-pointer">
              <span>{userLoginDetails.followers.length}</span>
              <span>followers</span>
            </div>
            <div onClick={()=>{setOpenFollowingModal(true);console.log(userLoginDetails.following)}} className="flex flex-col gap-0  cursor-pointer">
              <span>{userLoginDetails.following.length}</span>
              <span>following</span>
            </div>
          </div>
          
{/* 
<FollowModal data={userLoginDetails.followers} text={false}  show={openModal} close={()=>setOpenModal(false)} /> */}
<FollowModal data={userLoginDetails.following} show={openFollowingModal} close={()=>setOpenFollowingModal(false)} />



          <div className="my-2  w-full flex justify-center gap-12 md:gap-20 text-sm md:text-base  ">
            <button 
            onClick={navigateToEditProfile}
              type="button"
              className=" my-3 py-2 px-4  rounded-lg bg-slate-600 hover:bg-slate-700  cursor-pointer font-semibold      "
            >
              <i className="ri-edit-line mr-1 "></i> Edit Profile
            </button>
            <NavLink
              to="/add_project"
              className="   my-3 py-2 px-4  rounded-lg bg-slate-600 hover:bg-slate-700  cursor-pointer font-semibold      "
            >
              <i className="ri-add-line mr-1 "></i>
              {userLoginDetails.totalProject > 0 ? "More" : "First"} Project
            </NavLink>

            <div className="hidden flex-col gap-0 text-center cursor-pointer  border-[1px] border-white rounded-full ">
              <i className="ri-add-fill text-5xl "></i>
              <span></span>
            </div>
          </div>
        </div>
        <hr />

        <div className=" my-12">
          <GetProjectsComp email={userLoginDetails.email} />
        </div>
      </section>
    </>
  );
}
