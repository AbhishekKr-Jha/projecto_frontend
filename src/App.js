
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Registeration from './components/Registeration/Registeration';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import EmailVerify from './components/Email_Verify/EmailVerify';
import Options from './components/Options/Options';

function App() {
  return (
  <>
  <div className="app">
    <Navbar/>
   
    <Routes>
    <Route path="/" element={<Hero />} />
          <Route path="register" element={<Registeration />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Email_Verification" element={<EmailVerify />} />
          <Route path="options_page" element={<Options />} />
    </Routes>
  </div>
  </>
  );
}

export default App;
