import React from 'react'
import '../../Items/Underline.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
// import Logout from '../../Items/Logout/Logout'

export default function Navbar() {
    return (
        <>
            <div className="navContainer">
                <div className=" flex padding navbarBox ">
                    <div className=" navbarFirstBox">
                        <h1 className='text-4xl'><NavLink className='normal-link' to='/'>Projecto</NavLink></h1>
                    </div>
                    <div className=" flex  navbarSecondBox">
                        <div className="  navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/register'>email</NavLink></span>
                        </div>

                        <div className="  navItems px-1 py-0 ">
                            <div className="border-solid border-2 border-white  rounded-[100%]  ">
                            <i className="  text-4xl ri-account-circle-fill  "></i>
                            </div>
                        </div>

                        <div className="navItems">
                            <span className='animated-underline' ><NavLink className='normal-link' to='/contact'>contact</NavLink></span>
                        </div>

                    </div>

                    <div className="  flex navbarThirdBox">
                        <div className="  navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/options_page'>Explore</NavLink></span>
                        </div>

{/* <div className="  navItems">
                            <span >
                                <Logout/>
                            </span>
                        </div> */}

                    </div>

                </div>

            </div>


        </>
    )
}
