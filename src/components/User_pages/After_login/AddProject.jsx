import React, { useState } from "react";
import { addProject_function } from "../../Services/Apis";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { success, fail } from "../../../Items/Toastify";

// import Alert from '../../../Items/alert/Alert'
// import { success,fail } from '../../Items/Toastify'
// import { ToastContainer } from 'react-toastify'

export default function AddProject() {
  const isUpdate = useSelector((state) => state.update.isUpdate);
  const navigate = useNavigate();

  const [projectData, setprojectData] = useState({
    title: "",
    live: "",
    github: "",
    description: "",
    user: JSON.parse(localStorage.getItem("userData")).id,
  });
  const input_project_data = (e) => {
    const value = e.target.value;
    setprojectData({ ...projectData, [e.target.name]: value });
  };

  const submit_project = async (e) => {
    console.log(projectData);
    e.preventDefault();
    try {
      if (!projectData.title.length > 0) {
        fail("title is required");
      } else if (!projectData.description.length > 0) {
        fail("description is required");
      } else {
        const { data } = await addProject_function(projectData);
        if (data?.success) {
          console.log(data.message);
          setprojectData({
            title: "",
            live: "",
            github: "",
            description: "",
            user: "",
          });
          navigate("/user_home");
          success(data.message);
        } else {
          fail(data.message);
          console.log("else block");
          console.log(data.message);
        }
      }
    } catch (error) {
      console.log("catch block in frontend active due to ---  ", error);
    }
  };

  return (
    <>
      {/* <Alert/> */}
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      <div className=" element-Wrapper flex pt-[55px] ">
        <div className="  flexC  space-y-3  h-[100%]  ">
          {isUpdate ? (
            <h1 className=" text-xl mb-[5vh] "> Updating project... </h1>
          ) : (
            <h1 className=" text-xl mb-[5vh] "> Adding project... </h1>
          )}

          <form className="flexC space-y-3 " onSubmit={submit_project}>
            <input
              onChange={input_project_data}
              value={projectData.title}
              className=" input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] "
              type="text"
              name="title"
              placeholder="Project Title"
              minlength="4"
            />
            <div className="">
              <h4 className="text-[16px] mb-1 md:">Project Live Link</h4>
              <input
                onChange={input_project_data}
                value={projectData.live}
                className=" input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] "
                type="text"
                name="live"
                placeholder=""
              />
            </div>
            <div className="">
              <h4 className="text-[16px] mb-1"> Git Hub Link</h4>
              <input
                onChange={input_project_data}
                value={projectData.github}
                className=" input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] "
                type="text"
                name="github"
                placeholder=""
              />
            </div>
            <div className="">
              <h4 className="text-[16px] mb-1">About The Project</h4>
              <textarea
                onChange={input_project_data}
                value={projectData.description}
                type="text"
                name="description"
                className="input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] "
                rows="4"
                minlength="10"
              ></textarea>
            </div>
            {isUpdate ? (
              <button type="submit" className="button">
                Update
              </button>
            ) : (
              <button type="submit" className="button">
                SignIn
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

// AddProject.defaultProps={
//   heading:"Adding",
//   buttonTitle:"Save",
//   func:submit_project
// }
