import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar/Navbar";
import Registeration from "./components/Registeration/Registeration";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EmailVerify from "./components/Email_Verify/EmailVerify";
import Options from "./components/Options/Options";
import EmailSearch from "./components/Email_Search/EmailSearch";
import Otp from "./components/Registeration/OTP_Verify/Otp";
import AddProject from "./components/User_pages/After_login/AddProject";
import UserHome from "./components/User_pages/After_login/UserHome";
import UserProfile from "./components/User_pages/After_login/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { login, userInfo } from "./Redux/loginSlice";
import Modals from "react-responsive-modal";
import SearchResult from "./components/SearchResult/SearchResult";
import NewMenu from "./Items/NewMenu/NewMenu";
import { checkLogin_function } from "./components/Services/Apis";
import Hero from "./components/Hero/Hero";
import InfoBox from "./Items/InfoBox/InfoBox";
import EditProfile from "./components/EditProfile/EditProfile";
//import GetProjectsComp from "./components/User_pages/After_login/Projects_func_comp/GetProjectsComp";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  const dispatch = useDispatch();
  const userProjects = useSelector((state) => state.project.userProjects);

  const checkLogin = async () => {
    const ifUserData = JSON.parse(localStorage.getItem("userData"));
    if (ifUserData) {
      try {
        const { data } = await checkLogin_function({
          email: ifUserData?.email,
          id: ifUserData?.id,
        });
        
        if (data.success) {
          dispatch(login());
          dispatch(
            userInfo({
              name: data.userInfo.firstName + " " + data.userInfo.lastName,
              email: data.userInfo.email,
              totalProject: data.userInfo.totalProject,
              followers:data.userInfo.followers,
              following:data.userInfo.following,
              linkedin:data.userInfo.contact.linkedin ,
              github: data.userInfo.contact.github ,
              instagram:data.userInfo.contact.instagram ,
            })
          );
        }
      } catch (error) {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    checkLogin();
    setTimeout(() => {
      document.querySelector(".front-page").style.opacity = "0";
      document.querySelector(".front-page").style.zIndex = "-1000";
    }, 2400);
  }, []);

  return (
    <>
      {/* max-w-[1800px]   -----initial one */}
      <div className=" w-full max-h-max flex flex-col justify-center bg-black  max-w-[2200px]  app">
        <div className="w-full h-screen flex justify-center items-center   z-[10001] transition-all ease-in duration-500  bg-[#131313] fixed top-0 left-0 front-page">
          <h6 className="text-[10vw]  skew-x-12  ">Welcome! </h6>
        </div>
        {/* bg-[#131313] */}
        <NewMenu />
        <Navbar />
      <InfoBox />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="register" element={<Registeration />} />
          <Route path="options_page" element={<Options />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="Email_Verification" element={<EmailVerify />} />
          <Route path="search_email" element={<EmailSearch />} />
          <Route path="otp" element={<Otp />} />
          <Route path="user_home" element={<UserHome />} />
          <Route path="add_project" element={<AddProject />} />
          <Route path="update_project" element={<AddProject />} />
          <Route path="user_profile" element={<UserProfile />} />
          <Route path="modals" element={<Modals />} />
          <Route path="search_result" element={<SearchResult />} />
          <Route path="update_profile" element={<EditProfile />} />
        </Routes>

        <div className="w-full md:max-w-max   px-3  sm:px-4 md:fixed md:rounded-md  md:-right-[130px] md:top-[50vh] md:-rotate-90  md:bg-slate-500 md:px-3">
          <p className="text-center h-[50px]  md:max-h-max border-t-2  md:border-t-0  border-white flex items-center md:items-start  ">
            &copy; 2024 Projeto. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
