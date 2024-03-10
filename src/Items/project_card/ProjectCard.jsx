import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
// import "./w.css";
import { showInput } from "../ExtraFunction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProjectModal from "../Modals_folder/ProjectModal";

export default function ProjectCard({
  projectId,
  creatorId,
  title,
  liveLink,
  githubLink,
  description,
}) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const isUserLoginData = useSelector((state) => state.login);
  // const isDelete = useSelector((state) => state.delete.isDelete);

  //open modal
  const [open, setOpen] = useState(false);
  // delete modal
  const [openDelete, setopenDelete] = useState(false);
  //for getting the value of input Comment
  const [InputComment, setInputComment] = useState({
    projectId: projectId,
    comment: "",
    userId: JSON.parse(localStorage.getItem("userData"))?.id,
  });
  //for getting input value of reply
  const [reply, setreply] = useState("");

  //fpr the followers modal list
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //for the deletre modal
  const openDeleteModal=()=>setopenDelete(true)

  return (
    <>
      {/* <div className="  flex flex-col  pt-[90px] pb-[30px]  justify-center items-center "> */}
      {/* <div className=" opacity-0  scale-75 flex md:focus:scale-100  md:group-hover:opacity-100 transition-all ease-linear  duration-500 group-hover:flex space-x-3 items-baseline"></div> */}
      <div className="">
        <div className=" max-h-max w-[90vw] md:w-[80vw] max-w-[600px] border-2 border-white   rounded-lg  p-3 hover:scale-105 transition-all linear duration-700  group">
          <div className=" md:flex  justify-start items-center  md:space-x-2  mb-2    ">
            <h3 className="min-w-[170px]  max-w-[400px] truncate  bg-slate-900 group-hover:border-[1px] group-hover:border-white py-2 rounded-lg px-3">
        {title}
            </h3>
            <div className="flex  justify-center items-center   px-2    ">
         <span  className=" hover:bg-slate-900 cursor-pointer rounded-full p-[6px]"  disabled={githubLink?.length > 0 && "true"}  >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </span> 
               <span  className=" text-[14px]  cursor-pointer " disabled={liveLink?.length > 0 && "true"}   >Show Live</span>  
              {/* <span className="text-[14px]  cursor-pointer border-x-2 border-white px-1 rounded-md">Images</span> */}
            </div>
          </div>
          <p className=" text-justify  min-h-[60px]  line-clamp-3   px-2 my-3">
     {description}
          </p>

          <div className=" w-full flex justify-between items-center mt-1 ">
            <span className="text-gray-400 font-medium">05 Jan, 2023</span>
            <div className="flex justify-between">
              <div className="scale-0  opacity-0 flex  group-hover:scale-75  md:group-hover:opacity-100 transition-transform ease-linear  duration-500  space-x-3 items-baseline">
                <i
                  onClick={() => setopenDelete(true)}
                  className="cursor-pointer hover:opacity-75 text-2xl  fi fi-rs-trash"
                ></i>
                <i className="cursor-pointer hover:opacity-50 text-xl fi fi-rr-pencil"></i>
              </div>
            </div>
          <i
              onClick={onOpenModal}
              className=" cursor-pointer flex lg:hidden group-hover:flex items-center text-[28px] fi fi-rr-angle-double-small-right lg:arrow"
            ></i>  
          </div>
        </div>
    <ProjectModal  open={open} close={onCloseModal} openDeleteModal={openDeleteModal} title={title} description={description} githubLink={githubLink} liveLink={liveLink} projectId={projectId} creatorId={creatorId} />
    

    <Modal
        styles={{
          modal: {
            backgroundColor: "black",
            border: "1px solid grey",
            borderRadius: "18px",
          },
          root: { margin: "98px 0" },
          closeIcon: { color: "red" },
        }}
        open={openDelete}
        onClose={() => {
          setopenDelete(false);
        }}
        top
        showCloseIcon={false}
      >

        <h3 className="m-1 mb-3 text-center">
          Delete Project &nbsp;&nbsp;
          <span className="font-medium text-xl">" hhjghj "</span>
        </h3>
        <p className="text-[12px] md:text-sm">  <span className="text-red-500 font-bold">Note :</span>  projects deleted are permanently removed from the database</p>
        {/* <p className="text-center my-2 text-base">Are you sure to delete?</p> */}
        <div className="mt-3 mb-3 flex space-x-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setopenDelete(false);
            }}
            className=" my-1 border-white  border-[1px] px-6 py-[6px] rounded-lg  hover:bg-white hover:text-black font-medium transition-all ease-linear duration-100"
          >
            No
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              // delete_project(title);
            }}
            className=" my-1 border-white  border-[1px] px-6 py-[6px] rounded-lg  hover:bg-white hover:text-black font-medium transition-all ease-linear duration-100"
          >
            Yes
          </button>
        </div>
      </Modal>


      </div>
      {/* </div> */}
    </> 
  );
}
