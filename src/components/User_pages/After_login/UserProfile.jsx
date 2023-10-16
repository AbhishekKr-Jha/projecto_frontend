import React from 'react'
import '../../../Items/Button/Edit_Btn.css'
import ContactBox from '../../../Items/Contat_Box/ContactBox'

export default function UserProfile() {
    return (
        <>
            <div className="element-Wrapper pt-[55px] w-[100vw]">
                <div className="flexC  space-y-3 h-[100%] mt-5 md:flex-row md:justify-around">
                    {/* todo_____ left section */}
                    <div className=" flexC h-[100%] ">
                        <div className="overflow-hidden p-[5px] w-[40vw] max-w-[150px] rounded-full border-2 border-solid border-white sm:w-[34vw] md:w-[150px] ">
                            <img className='w-[100%] rounded-full' src="https://sg-res.9appsdownloading.com/sg/res/jpg/7d/61/e93e5eb2a71a82e81dbe1fb3267e-4a3e.jpg?x-oss-process=style/hq" alt="loading..." />
                        </div>
                        <div className="mt-3 flex space-x-0">
                            <div className="flexC ">
                                <p className='text-[5.4vw]  m-2 uppercase sm:text-xl '>User</p>
                                <p className='text-[5.4vw] m-1 uppercase sm:text-xl '>email</p>

                            </div>
                            <div className="flexC ">
                                <p className='text-[5.4vw] m-2 self-start sm:text-xl '>Abhishek_Jha</p>
                                <p className='text-[5.4vw] m-1 sm:text-xl '>akjha4172@gmail.com</p>
                            </div>
                        </div>
                        <button className="edit-button m-4  ">
                            <svg className="edit-svgIcon" viewBox="0 0 512 512">
                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                            </svg>
                        </button>
                        {/*________________---- password box */}
                        <div className="flex flex-wrap border-solid border-white border-[1px] rounded-[12px] p-2">
                            <div className="flex m-2 ">
                                <p className='text-[5.4vw] sm:text-xl  '>Password</p>
                                <p className=' text-4xl my-auto'>............</p>
                            </div>
                            <button className="edit-button mb-3   ">
                                <svg className="edit-svgIcon" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* _______contact box_________ */}
                    <div className="flex mt-[40px]">
                        <ContactBox />
                    </div>

                    {/* todo ______right section */}
                    <div className="flexC">


                        <div className="mt-3 flex  border-solid border-white border-[1px] rounded-[12px] p-2">
                            <div className=" flexC  m-2 space-y-2 items-start ">
                                <p className='text-[5vw] sm:text-xl  '>joined on <span>20/12/2002</span></p>
                                <p className='text-[5vw] sm:text-xl'>last profile update on <span>20/22/3001</span></p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

        </>
    )
}
