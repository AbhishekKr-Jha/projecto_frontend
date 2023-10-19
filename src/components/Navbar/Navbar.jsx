import React from 'react'
import '../../Items/Underline.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import{logout} from '../../Redux/loginSlice'
import Logout from '../../Items/Logout/Logout'

export default function Navbar() {
    const isLogin=useSelector(state=>state.login.isLogin)
    const dispatch=useDispatch()

const logoutBtn=()=>{
    console.log("button clicked")
    localStorage.removeItem("userData");
    dispatch(logout())
}

    return (
        <>
            <div className="navContainer">
                <div className=" flex padding navbarBox ">
                    <div className=" navbarFirstBox">
                        <h1 className='text-4xl'><NavLink className='normal-link' to='/'>Projecto</NavLink></h1>
                    </div>
                    <div className=" flex  navbarSecondBox">
                        <div className="  navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/project_card'>email</NavLink></span>
                        </div>
{  isLogin && <div className="  navItems px-1 py-0 ">
                            <div className="border-solid border-2 border-white  rounded-[100%]  ">
                          <NavLink to='user_profile'><i className="  text-4xl ri-account-circle-fill  "></i></NavLink>  
                            </div>
                        </div>   }

                        <div className="navItems">
                            <span className='animated-underline' ><NavLink className='normal-link' to='/user_home'>contact</NavLink></span>
                        </div>

                    </div>

                    <div className="  flex navbarThirdBox">
                        <div className="  navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/options_page'>Explore</NavLink></span>
                        </div>

{ isLogin &&    <div className="navItems"><span onClick={logoutBtn} ><Logout /></span></div>}

                    </div>

                </div>

            </div>


        </>
    )
}
