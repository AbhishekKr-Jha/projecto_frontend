import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { useDispatch } from "react-redux";
import github from "../../Items/Icons/github.svg";
import instagram from "../../Items/Icons/instagram.svg";
import linkedin from "../../Items/Icons/linkedin.svg";
import GetProjectsComp from "../User_pages/After_login/Projects_func_comp/GetProjectsComp";
import { useSelector } from "react-redux";
import {
  followUP_func,
  unfollow_func,
} from "../../Items/Modals_folder/Follow_Modal/FollowModal_func";
import { followThePerson, unFollowThePerson } from "../../Redux/loginSlice";
import FollowModal from "../../Items/Modals_folder/Follow_Modal/FollowModal";

export default function SearchResult() {
  const dispatch = useDispatch();
  const userLoginDetails = useSelector((state) => state.login.userLoginDetails);
  const totalUserProjects=useSelector((state)=>state.project.userProjects.length)
  const location = useLocation();
  const userData = location.state;
 
  console.log("the location  contains it",userData)
  const [toggleFollowUnfollow, setToggleFollowUnfollow] = useState(
  userData.isFollowed
  );
  const [updateFollowers,setUpdateFollowers]=useState(userData.followers.length)
  
  const [openFollowingModal, setOpenFollowingModal] = useState(false);
  const [openFollowersModal, setOpenFollowersModal] = useState(false);
  

  const follow = async (userName, email) => {
    const result = await followUP_func(userName, email);
    if (result) {
      setUpdateFollowers(updateFollowers+1)
      dispatch(followThePerson(result));
      console.log("follow is running");
    }
  };

  const unFollow = async (userName, email) => {
    const result = await unfollow_func(userName, email);
    if (result) {
      console.log("unfollow is running");
      setUpdateFollowers(updateFollowers-1)
      dispatch(unFollowThePerson(result));
    }
  };
  return (
    <>
      <section className=" element-Wrapper   pt-[55px]   px-2 md:px-7">
        <div className="my-5 md:mt-10 sm:ml-6  xl:ml-20    flex flex-wrap gap-5 gap-y-7 md:gap-y-10 md:gap-x-20 items-start md:items-center justify-start  text-[15px] sm:text-xl lg:text-[21px] mb-9">
          <div className="flex gap-3 gap-y-10 md:gap-x-12 ">
            <div className="w-[40vw] h-[40vw]  max-w-[105px] max-h-[105px]  sm:max-h-[150px] sm:max-w-[150px]  overflow-hidden p-[2px] lg:p-[6px] border-2 rounded-full ">
              <img
                className="w-full h-full object-cover rounded-full cursor-pointer"
                src="https://m.media-amazon.com/images/S/pv-target-images/0d3678e939af88101fef5f9567befcbbc3fc43933aa7543eac5f627f2fb1e1ac.jpg"
                alt="loading..."
              />
            </div>
            <div className=" flex flex-col items-start gap-0   ">
              <p className=" m-1  ">{userData.userName}</p>
              <p className="  m-1  ">{userData.email}</p>
              <div className="flex mt-7  gap-8 ">
                <span className="w-[7.5vw] max-w-[35px]  bg-white rounded-md cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out ">
                  <img src={github} className="" alt="loading..." />
                </span>
                <span className="w-[9.7vw] max-w-[44px] rounded-md cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out">
                  <img src={linkedin} alt="loading..." />
                </span>
                <span className="w-[9.7vw] max-w-[44px] rounded-md cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out">
                  <img src={instagram} alt="loading..." />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex justify-center gap-x-14 mx-auto lg:mx-0 ">
            <div className="flex flex-col gap-0  cursor-pointer">
              <span>{userLoginDetails.email !== userData.email?userData.projects.length:totalUserProjects}</span>
              <span>projects</span>
            </div>
            <div   onClick={() => {
                setOpenFollowersModal(true);
                console.log("followeers clicked");
              }} className="flex flex-col gap-0  cursor-pointer">
              <span>{userLoginDetails.email !== userData.email?updateFollowers:userLoginDetails.followers.length}</span>
              <span>followers</span>
            </div>
            <div  onClick={() => {
                setOpenFollowingModal(true);
                console.log("following clicked");
              }} className="flex flex-col gap-0  cursor-pointer">
              <span>{userLoginDetails.email !== userData.email?userData.following.length:userLoginDetails.following.length}</span>
              <span>following</span>
            </div>
          


          </div>

          <FollowModal
            data={userLoginDetails.email !== userData.email?userData.following:userLoginDetails.following}
            show={openFollowingModal}
            close={() => setOpenFollowingModal(false)}
            text="Followings"
            email={userData.email}
          />

          <FollowModal
            data={userLoginDetails.email !== userData.email?userData.followers:userLoginDetails.followers}
            show={openFollowersModal}
            close={() => setOpenFollowersModal(false)}
            text="Followers"
            email={userData.email}
          />


          {userLoginDetails.email !== userData.email && (
            <div className="my-2  w-full flex justify-center gap-12 md:gap-20 text-sm md:text-base  ">
              <button
                onClick={() => {
                  !toggleFollowUnfollow 
                    ? follow(userData.userName, userData.email)
                    : unFollow(userData.userName, userData.email);
                  toggleFollowUnfollow
                    ? setToggleFollowUnfollow(false)
                    : setToggleFollowUnfollow(true);
                }}
                type="button"
                className=" my-3 py-[6px] px-6  rounded-lg bg-slate-600 hover:bg-slate-700  cursor-pointer font-semibold "
              >
                {toggleFollowUnfollow?"UnFollow":"Follow"}
              </button>
            </div>
          )}
        </div>
        <hr />
        <div className="my-12">
          <GetProjectsComp email={userData.email} />
        </div>
      </section>
      
    </>
  );
}
