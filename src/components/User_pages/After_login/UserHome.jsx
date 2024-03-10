import React, { useEffect, useState } from "react";
import ProjectCard from "../../../Items/project_card/ProjectCard";
import { Link } from "react-router-dom";
import { getProject_function } from "../../Services/Apis";
import { useSelector } from "react-redux";

export default function UserHome() {
  const userLoginDetails = useSelector((state) => state.login.userLoginDetails);
  const isDelete = useSelector((state) => state.delete.isDelete);

  const [Project, setProject] = useState([]);
  // const email = JSON.parse(localStorage.getItem("userData"))?.email;

console.log(userLoginDetails.email)
  const get_projects = async () => {
    try {
      const { data } = await getProject_function(userLoginDetails.email);
      if (data.success) {
        console.log(data.message);
        console.log(";;;;;;;;;")
        console.log(data.projects)
        setProject(data.projects);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_projects();
    console.log("___", Project);
  }, []);

  return (
    <>
     
        <section className=" element-Wrapper flexC pt-[55px] ">

          <p className="text-xl md:text-2xl lg:text-2xl mt-20 underline underline-offset-8">
            {userLoginDetails.email}
          </p>
          <p className=" p-1  text-xl md:text-2xl lg:text-2xl mt-4 lg:mt-5">
            Projects
          </p>
          <div className=" my-4 flex justify-center w-[240px] items-center  border-2 border-white border-dashed rounded-lg p-4">
            <Link className=" p-1 border-x-4 border-white rounded-full hover:rotate-180 duration-300 transition-all" to="/add_project">
            <i className="text-3xl ri-add-line px-1 "></i>
            </Link>
            <p className="text-2xl -ml-3"> Projects</p>
          </div>
          <div className="flexC space-y-2">
            {Project.length ? (
              Project.map((element, index) => {
                return (             
                  <div key={index}>
                    <ProjectCard
                      projectId={element._id}
                      creatorId={element.user}
                      title={element.title}
                      liveLink={element.live}
                      githubLink={element.github}
                      description={element.description}
                    />
                  </div>
                );
              })
            ) : (
              <div className="mt-4">
                <h1 className="text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px]">
                  0 - Collections yet
                </h1>
              </div>
            )}
          </div>
        </section>
  
    </>
  );
}
