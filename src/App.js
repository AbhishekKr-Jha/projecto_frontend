import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
// import Hero from './components/Hero/Hero';
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
import Hero1 from './components/Hero/Hero1';



function App() {
  const dispatch=useDispatch()


  useEffect(() => {
    checkLogin()
    setTimeout(() => {
      document.querySelector('.front-page').style.opacity="0";
      document.querySelector('.front-page').style.zIndex="-1000"
      // document.querySelector('.front-page').style.width="0px"
    }, 2400);
    })

const checkLogin=async()=>{
 const ifUserData=JSON.parse(localStorage.getItem('userData'))
 if(ifUserData){
 try {
  const {data}=await checkLogin_function({email:ifUserData?.email,id:ifUserData?.id})
  console.log("something found...")
  if(data.success){
    localStorage.setItem('userProjectoData',JSON.stringify(data.userInfo))
    dispatch(login());console.log("already login")}
 } catch (error) {
  console.log("error")
 }   
   }
     }







  return (
  <>
  {/* max-w-[1800px]   -----initial one */}
  <div className=" w-full max-h-max flex justify-center  max-w-[2200px]  app">
  <div className="w-full z-[10001] transition-all ease-in duration-500 h-screen bg-[#131313] fixed top-0 left-0 front-page">
    <h3 className="text-[">Welcome User!</h3>
  </div>
    {/* <div className="fixed -z-30 opacity-30  ">
   <video className='  h-screen w-screen object-cover '  autoPlay muted playsInline loop src={Background}></video>
   </div> */}
    <NewMenu/>
    <Navbar/>
    {/* <div className="  w-full max-w-[1800px] border-solid border-white border-2 bg-green-900">
   <hr className='bg-red-900  ' />  */}
 
    <Routes>
    <Route path="/" element={<Hero1 />} />
          <Route path="register" element={<Registeration />} />
          <Route path="options_page" element={<Options />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About/>} />
          <Route path="Email_Verification" element={<EmailVerify />} />
          <Route path="search_email" element={<EmailSearch/>} />
          <Route path="otp" element={<Otp/>} /> 
          <Route path="user_home" element={<UserHome/>} />
          <Route path='add_project' element={<AddProject/>} />
          <Route path='update_project' element={<AddProject/>} />
          <Route path="project_card" element={<ProjectCard/>} />
          <Route path="user_profile" element={<UserProfile/>} />
          <Route path="modals" element={<Modals/>} />
          <Route path="search_result" element={<SearchResult/>} />
          {/* <Route path="waste-text" element={<Wastecard/>} /> */}
           </Routes> 
           
       
    {/* <div className="fixed bottom-0 right-[11vw] md:-right-[115px] md:top-[50vh] md:-rotate-90 bg-black md:bg-slate-500 px-4 md:px-1"><p className='text-center'>&copy; 2023 Projeto. All rights reserved</p></div>
  </div>  */}
  {/* <div className="fixed   -right-[115px] top-[50vh] -rotate-90  bg-slate-500 px-1"><p className='text-center'>&copy; 2023 Projeto. All rights reserved</p></div>
 
  */}

  </div> 
  
  </>
  );
} 
export default App;



