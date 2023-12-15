import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Registeration from './components/Registeration/Registeration';
import Login from './components/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import EmailVerify from './components/Email_Verify/EmailVerify';
import Options from './components/Options/Options';
import EmailSearch from './components/Email_Search/EmailSearch';
import Otp from './components/Registeration/OTP_Verify/Otp';
import AddProject from './components/User_pages/After_login/AddProject';
import UserHome from './components/User_pages/After_login/UserHome';
import UserProfile from './components/User_pages/After_login/UserProfile';
import {useDispatch } from 'react-redux';
import {login} from './Redux/loginSlice'
import ProjectCard from './Items/project_card/ProjectCard';
import Modals from 'react-responsive-modal';
import SearchResult from './components/SearchResult/SearchResult';
import NewMenu from './Items/NewMenu/NewMenu';
import { checkLogin_function } from './components/Services/Apis';


// import RadialMenu from './Items/RadialMenu/RadialMenu';


function App() {
  const dispatch=useDispatch()

const checkLogin=async()=>{
  // console.log("starting ...")
 const ifUserData=JSON.parse(localStorage.getItem('userData'))
//  console.log("checking storage")
 if(ifUserData){
 try {
  // console.log("entering pro...")
  const {data}=await checkLogin_function({email:ifUserData.email,id:ifUserData.id})
  console.log("something found...")
  if(data.success){
    // console.log("--- is",data.userInfo)
    localStorage.setItem('userProjectoData',JSON.stringify(data.userInfo))
    dispatch(login());console.log("already login")}
    else{console.log("nothing found")}
 } catch (error) {
  console.log("error")
 }
 }
}

  useEffect(() => {
  checkLogin()
  })

  return (
  <>
  <div className="app ">
    {/* <RadialMenu/> */}
    <NewMenu/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero />} />
          <Route path="register" element={<Registeration />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About/>} />
          <Route path="Email_Verification" element={<EmailVerify />} />
          <Route path="options_page" element={<Options />} />
          <Route path="search_email" element={<EmailSearch/>} />
          <Route path="otp" element={<Otp/>} /> 
          <Route path="user_home" element={<UserHome/>} />
          <Route path='add_project' element={<AddProject/>} />
          <Route path='update_project' element={<AddProject/>} />
          <Route path="project_card" element={<ProjectCard/>} />
          <Route path="user_profile" element={<UserProfile/>} />
          <Route path="modals" element={<Modals/>} />
          <Route path="search_result" element={<SearchResult/>} />
    </Routes> 
    {/* <div className="fixed bottom-0 right-[11vw] md:-right-[115px] md:top-[50vh] md:-rotate-90 bg-black md:bg-slate-500 px-4 md:px-1"><p className='text-center'>&copy; 2023 Projeto. All rights reserved</p></div>
  </div>  */}
  <div className="fixed   -right-[115px] top-[50vh] -rotate-90  bg-slate-500 px-1"><p className='text-center'>&copy; 2023 Projeto. All rights reserved</p></div>
  </div> 
  </>
  );
} 
export default App;



