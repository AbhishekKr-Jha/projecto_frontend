import React from 'react'
import '../../Items/Underline.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navContainer">
                <div className=" flex padding navbarBox ">
                    <div className=" navbarFirstBox">
                        <h1><NavLink className='normal-link' to='/'>Projecto</NavLink></h1>
                    </div>
                    <div className=" flex  navbarSecondBox">
                        <div className="  navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/options_page'>email</NavLink></span>
                        </div>

                        <div className="navItems">
                            <span className='animated-underline' ><NavLink className='normal-link' to='/contact'>contact</NavLink></span>
                        </div>

                        {/* <div className="navItems">
    <span></span>
</div> */}
                    </div>

                    <div className="  flex navbarThirdBox">
                        <div className="navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/register'>SignUp</NavLink></span>
                        </div>
                        <div className="navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/login'> LogIn</NavLink></span>
                                
                        </div> 
                        {/* <div className="navItems">
                            <span className='animated-underline'><NavLink className='normal-link' to='/explore'>Explore</NavLink></span>
                        </div> */}
                    </div>

                </div>

            </div>


        </>
    )
}
