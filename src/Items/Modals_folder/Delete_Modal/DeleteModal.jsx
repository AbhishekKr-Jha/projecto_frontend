import React from "react";
import Modal from "react-responsive-modal";
import { deleteProject_function } from "../../../components/Services/Apis";
import {deleteUserProjects} from "../../../Redux/projectSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fail } from "../../Toastify";

export default function DeleteModal({ open, close,projectId,title }) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
//    console.log(`the project id is ${projectId} and title is ${title}`)
    const deleteProject=async(projectId,title)=>{
        try {
            console.log("the id is",projectId)
            const { data } = await deleteProject_function({
                projectId,title  
            })
            if(data.success){
            close()
            dispatch(deleteUserProjects(projectId))
             navigate('/user_home') 
            console.log("project deleted successfully")
            }else{
fail("Project deletion error")
            }
        } catch (error) {
           console.log("error in project delete function",error) 
        }
        }
  return (
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
      open={open}
      onClose={close}
      top
      showCloseIcon={false}
    >
      <h3 className="m-1 mb-3 text-center">
        Delete Project &nbsp;&nbsp;
        <span className="font-medium text-xl">" hhjghj "</span>
      </h3>
      <p className="text-[12px] md:text-sm">
        {" "}
        <span className="text-red-500 font-bold">Note :</span> projects deleted
        are permanently removed from the database
      </p>
<div className="mt-3 mb-3 flex space-x-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteProject(projectId,title);
          }}
          className=" my-1 border-white  border-[1px] px-6 py-[6px] rounded-lg  hover:bg-white hover:text-black font-medium transition-all ease-linear duration-100"
        >
          Yes
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
     close()
          }}
          className=" my-1 border-white  border-[1px] px-6 py-[6px] rounded-lg  hover:bg-white hover:text-black font-medium transition-all ease-linear duration-100"
        >
          No
        </button>
      </div>
    </Modal>
  );
}
