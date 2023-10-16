import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Registeration from './components/Registeration/Registeration';
import Login from './components/Login/Login';
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
import RadialMenu from './Items/RadialMenu/RadialMenu';


function App() {
  const dispatch=useDispatch()

  useEffect(() => {
    const userLogin=localStorage.getItem("userData")
    if(userLogin){
    console.log(userLogin)
  dispatch(login())
    console.log("ok")
    }
  })

  return (
  <>
  <div className="app">
    <RadialMenu/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero />} />
          <Route path="register" element={<Registeration />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Email_Verification" element={<EmailVerify />} />
          <Route path="options_page" element={<Options />} />
          <Route path="search_email" element={<EmailSearch/>} />
          <Route path="otp" element={<Otp/>} />
          <Route path="user_home" element={<UserHome/>} />
          <Route path="add_project" element={<AddProject/>} />
          <Route path="user_profile" element={<UserProfile/>} />
    </Routes>
  </div>
  </>
  );
}
export default App;



