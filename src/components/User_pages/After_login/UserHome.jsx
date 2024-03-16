import React  from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GetProjectsComp from "./Projects_func_comp/GetProjectsComp";

export default function UserHome() {
  
  const userLoginDetails = useSelector((state) => state.login.userLoginDetails);

  return (
    <> 
        <section className=" element-Wrapper  pt-[55px] ">

          {/* <p className="text-xl md:text-2xl lg:text-2xl mt-20 underline underline-offset-8">
            {userLoginDetails.email}
          </p> */}
          {/* <p className=" p-1  text-xl md:text-2xl lg:text-2xl mt-4 lg:mt-5">
            Projects
          </p> */}
          <Link to="/add_project" className=" my-7  mx-auto sm:mx-0 w-[220px]  flex justify-centeritems-center  border-2 border-white  rounded-lg p-4 group cursor-pointer">
            <div className=" p-1 border-x-4 border-white rounded-full group-hover:rotate-180 duration-300 transition-all" >
            <i className="text-3xl ri-add-line px-1 "></i>
            </div>
            <p className="text-2xl -ml-3"> Projects</p>
          </Link>
          <GetProjectsComp email={userLoginDetails.email} />
        </section>
  
    </>
  );
}
