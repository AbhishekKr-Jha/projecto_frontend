import React, { useState } from "react";
import { addProject_function } from "../../Services/Apis";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { success, fail } from "../../../Items/Toastify";
import { useDispatch } from "react-redux";
import { storeUserProjects } from "../../../Redux/projectSlice";

export default function AddProject() {
  //const isUpdate = useSelector((state) => state.update.isUpdate);
  const navigate = useNavigate();
  const dispatch=useDispatch()

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
      if (!projectData.title || !projectData.description) {
        fail("Title and Description are required");
      } else {
        const { data } = await addProject_function(projectData);
        if (data.success) {
          console.log(data.message);
          setprojectData({
            title: "",
            live: "",
            github: "",
            description: "",
            user: "",
          
          });
dispatch(storeUserProjects(data.projects))
          navigate("/user_home");
          success(data.message);
        } else {
          fail(data.message);
          console.log("else block");
          console.log(data.message.split(',')[0]);
        
        }
      }
    } catch (error) {
      fail("An Error Occured");
      console.log("catch block in frontend active due to ---  ", error);
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
    
        <section className=" element-Wrapper flexC space-y-3 pt-[55px]  pb-[20px] ">
         
            <h1 className=" text-xl  sm:mt-[20px] mb-[2vh] md:mb-[25px]   md:text-2xl"> Adding project... </h1>

          <form className="flexC space-y-3 " onSubmit={submit_project}>
            <input
              onChange={input_project_data}
              value={projectData.title}
              className=" input add-project-input"
              type="text"
              name="title"
              placeholder="Project Title"
              minlength="4" 
            />
            <div>
              <h4 className="text-[16px] mb-1 md:">Project Live Link</h4>
              <input
                onChange={input_project_data}
                value={projectData.live}
                className=" input add-project-input"
                type="text"
                name="live"
              />
            </div>
            <div >
              <h4 className="text-[16px] mb-1"> GitHub Link</h4>
              <input
                onChange={input_project_data}
                value={projectData.github}
                className=" input add-project-input"
                type="text"
                name="github"
              />
            </div>
            <div >
              <h4 className="text-[16px] mb-1"> Project Description</h4>
              <textarea
                onChange={input_project_data}
                value={projectData.description}
                type="text"
                name="description"
                className="input add-project-input "
                rows="4"
                minlength="10"
                maxLength="1500"
              ></textarea>
            </div>
           
              <button type="submit" className="button">
                Add
              </button>
            
          </form>
      
      </section>
    </>
  );
}
