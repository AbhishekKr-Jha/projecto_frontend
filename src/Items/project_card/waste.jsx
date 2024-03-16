import React, { useState, useEffect } from "react";
import "./project_card.css";
import { Box, Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProject_function,
  getComment_function,
  postComment_function,
  updateProject_function,
} from "../../components/Services/Apis";
import { useDispatch, useSelector } from "react-redux";
import { delete_project_state, project_deleted } from "../../Redux/deleteSlice";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CommentBox from "../CommentBox";
import { Toaster } from "react-hot-toast";
import { promise } from "../Toastify";

export default function ProjectCard({
  projectId,
  creatorId,
  title,
  liveLink,
  githubLink,
  description,
}) {
  console.log(projectId)
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const isDelete = useSelector((state) => state.delete.isDelete);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [Comment, setComment] = useState([]);
  const [openDelete, setopenDelete] = useState(false);
  const [InputComment, setInputComment] = useState({
    projectId: projectId,
    comment: "",
    userId: JSON.parse(localStorage.getItem("userData"))?.id,
  });
  const [ProjectCreator, setProjectCreator] = useState(false);
  const [CanComment, setCanComment] = useState(false);
  const [updatedProjectData, setupdatedProjectData] = useState({
    title,
    githubLink,
    liveLink,
    description,
    project_id: projectId,
    user: JSON.parse(localStorage.getItem("userData")).id,
  });
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    if (isLogin) {
      if (creatorId === JSON.parse(localStorage.getItem("userData")).id) {
        setProjectCreator(true);
        setCanComment(true);
      } else {
        setCanComment(true);
      }
    }
  });

  const delete_project = async (title) => {
    console.log("title is--", title);
    setopenDelete(false);
    try {
      const user = JSON.parse(localStorage.getItem("userData")).id;
      const { data } = await deleteProject_function({ user, title });
      if (data.success) {
        console.log(data.message);
        console.log(isDelete);
        // promise("deleting","Project Deleted")
        if (!isDelete) {
          console.log("not true--", isDelete);
          dispatch(delete_project_state());
          console.log(" not true after--", isDelete);
        } else {
          console.log(" true--", isDelete);
          dispatch(project_deleted());
          console.log(" true afeter--", isDelete);
        }
      } else {
        dispatch(delete_project_state());
        console.log(isDelete);
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openComment = async (projectId) => {
    try {
      const { data } = await getComment_function(projectId);
      if (data.success) {
        console.log(data.message);
        setComment(data.comments);
        setOpenSecond(true);
      } else {
        console.log(data.message);
      }
      console.log(projectId);
      console.log("ok");
      console.log("===", ProjectCreator);
    } catch (error) {
      console.log(error);
    }
  };

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postComment_function(InputComment);
      if (data?.success) {
        console.log(data?.message);
        setInputComment({ ...InputComment, comment: "" });
        openComment(projectId);
      } else {
        console.log(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const visitLink = (link) => {
    window.location.href = link;
  };
  const updateProject = () => {
    setOpenUpdate(true);
  };
  const update_project_data = (e) => {
    setupdatedProjectData({
      ...updatedProjectData,
      [e.target.name]: e.target.value,
    });
  };
  const save_Updated_Data = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateProject_function(updatedProjectData);
      if (data.success) {
        setOpenUpdate(false);
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("error in projectUPdate", error);
    }
  };
  const closeIcon = <i className="  text-3xl ri-close-fill  " ></i>;
  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
    
        <div className="project-card hover:md:scale-110 ">
          <div className="border"></div>
          <div className="content">
            <div className="card1 ">
              <div className="flexC md:flex-row justify-between -mt-5">
                <div className="flex  justify-between space-x-1">
                  <p className="card-title   mt-2 md:mt-0">{title}</p>
                  {githubLink?.length > 0 && (
                    <span
                      onClick={() => visitLink(githubLink)}
                      className="mb-1 ml-[-30px] hover:bg-slate-900 rounded-full hidden md:block"
                    >
                      <IconButton className="">
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
                      </IconButton>
                    </span>
                  )}
                  {liveLink?.length > 0 && (
                    <span
                      onClick={() => visitLink(liveLink)}
                      className=" cursor-pointer hidden md:block"
                    >
                      <h3 className="text-[14px] animated-underline">
                        Show Live
                      </h3>
                    </span>
                  )}
                </div>

                <div className="flex  space-x-1  ">
                  <div className="flex justify-between ">
                    {githubLink?.length > 0 && (
                      <span
                        onClick={() => visitLink(githubLink)}
                        className="mb-1 ml-[-30px] hover:bg-slate-900 rounded-full cursor-pointer md:hidden"
                      >
                        <IconButton className="">
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
                        </IconButton>
                      </span>
                    )}
                    {liveLink?.length > 0 && (
                      <span
                        onClick={() => visitLink(liveLink)}
                        className=" cursor-pointer  md:hidden"
                      >
                        <h3 className="text-[14px] animated-underline">
                          Show Live
                        </h3>
                      </span>
                    )}
                  </div>
                  {ProjectCreator && (
                    <div className=" flex space-x-1 ">
                      <span onClick={updateProject} className="">
                        <IconButton className=" animated-underline  cursor-pointer">
                          <i className=" ri-pencil-line "></i>
                        </IconButton>
                      </span>
                      <span onClick={() => setopenDelete(true)}>
                        <IconButton className="animated-underline cursor-pointer">
                          <i className="ri-delete-bin-5-fill"></i>
                        </IconButton>
                      </span>
                    </div>
                  )}{" "}
                </div>
              </div>

              <p className="card-des">{description}</p>
              <p className="card-text">
                <span className="mt-1 md:mt-0">
                  <button className="bg-red-700 " onClick={onOpenModal}>
                    View More
                  </button>
                </span>

{/* //todo updating project modal */}
                {/* <Modal
                  styles={{
                    modal: {
                      backgroundColor: "black",
                      border: "2px solid white",
                      borderRadius: "18px",
                    },
                    root: { margin: "98px 0" },
                    closeIcon: { color: "red" },
                  }}
                  open={openUpdate}
                  onClose={() => setOpenUpdate(false)}
                  center
                  closeIcon={closeIcon}
                >
                  <h3 className=" text-xl mb-[4vh] text-center">
                    Update Project...
                  </h3>
                  <form
                    className="flexC space-y-3 "
                    onSubmit={save_Updated_Data}
                  >
                    <input
                      onChange={update_project_data}
                      value={updatedProjectData.title}
                      className=" input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] m-2"
                      type="text"
                      name="title"
                      placeholder="Project Title"
                      minlength="4"
                    />
                    <div className="m-1">
                      <h4 className="text-[16px] mb-1  font-medium">
                        Project Live Link
                      </h4>
                      <input
                        onChange={update_project_data}
                        value={updatedProjectData.liveLink}
                        className=" input w-[90vw]  md:w-[75vw]  lg:w-[60vw] xl:w-[50vw] "
                        type="text"
                        name="live"
                        placeholder="liveLink"
                      />
                    </div>
                    <div className="m-1">
                      <h4 className="text-[16px] mb-1 font-medium">
                        {" "}
                        Git Hub Link
                      </h4>
                      <input
                        onChange={update_project_data}
                        value={updatedProjectData.githubLink}
                        className=" input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] "
                        type="text"
                        name="github"
                        placeholder="githubLink"
                      />
                    </div>
                    <div className="m-1">
                      <h4 className="text-[16px] mb-1 font-medium">
                        About The Project
                      </h4>
                      <textarea
                        onChange={update_project_data}
                        value={updatedProjectData.description}
                        type="text"
                        name="description"
                        className="input w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] "
                        rows="5"
                        minlength="10"
                      ></textarea>
                    </div>

                    <button type="submit" className="button">
                      Update
                    </button>
                  </form>
                </Modal> */}

{/* //todo opening project modal */}
                <Modal
                  styles={{
                    modal: {
                      backgroundColor: "black",
                      border: "2px solid white",
                      borderRadius: "18px",
                    },
                    root: { margin: "98px 0" },
                    closeIcon: { color: "red" },
                  }}
                  open={open}
                  onClose={onCloseModal}
                  center
                  closeIcon={closeIcon}
                >
                  <div className="m-2 mt-5 ">
                    {/* <div className="flex  -mt-5"> */}
                      <div className="flex justify-between space-x-1 -mt-5 mb-2">
                        <p className="card-title m">{title}</p>
                        {githubLink?.length > 0 && (
                          <Link
                            to={`/${githubLink}`}
                            className="mb-1 ml-[-30px] hover:bg-slate-900 rounded-full"
                          >
                            <Button className="">
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
                            </Button>
                          </Link>
                        )}
                        {liveLink?.length > 0 && (
                          <Link
                            to="/https://www.youtube.com/"
                            className="text-[14px] animated-underline cursor-pointer "
                          >
                            Show Live
                          </Link>
                        )}
                      {/* </div> */}
                    </div>
                    <p className=" my-3 ">{description}</p>
                    {ProjectCreator && (
                      <div className="flex    project-card-icons  ">
                        <span onClick={updateProject} className="">
                          <IconButton className=" animated-underline cursor-pointer">
                            <i className="ri-pencil-line"></i>
                          </IconButton>
                        </span>
                        <span onClick={() => delete_project(title)}>
                          <IconButton className="animated-underline cursor-pointer">
                            <i className="ri-delete-bin-5-fill"></i>
                          </IconButton>
                        </span>
                      </div>
                    )}
                    <hr className="w-[28vw] max-w-[280px] mx-auto bg-white h-[2px] my-3" />
                  </div>
                  <div
                    onClick={() => {
                      openComment(projectId);
                    }}
                    className="animated-underline text-[4vw] sm:text-[22px] md:text-[25px] lg:text-[28px]' cursor-pointer "
                  >
                    Comments
                  </div>


                </Modal>

                <Modal
                  styles={{
                    modal: {
                      backgroundColor: "black",
                      border: "4px solid grey",
                      borderRadius: "18px",
                    },
                    root: { margin: "98px 0" },
                    closeIcon: { color: "red" },
                  }}
                  open={openSecond}
                  onClose={() => {
                    setOpenSecond(false);
                    // setProjectCreator(false);
                  }}
                  center
                  closeIcon={closeIcon}
                >
                  {JSON.parse(localStorage.getItem("userData"))?.id !==
                    creatorId && (
                    <div className="flexC md:flex-row">
                      <textarea
                        id="commentInput"
                        value={InputComment.comment}
                        onChange={(e) => {
                          setInputComment({
                            ...InputComment,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        type="text"
                        placeholder="Add Your Comment"
                        name="comment"
                        className=" rounded-none border-t-0 border-l-0 border-r-0 input w-[90vw] md:w-[60vw] lg:w-[40vw] xl:w-[35vw] max-w-[1000px] "
                        rows="1"
                        autoFocus={!openSecond}
                      />
                      {InputComment.comment && (
                        <button
                          onClick={submitComment}
                          id="submitCommentBtn"
                          className=" button self-center mx-3"
                        >
                          Comment
                        </button>
                      )}
                    </div>
                  )}
                  {/* </form> */}
                  <div className="">
                    {Comment.length ? (
                      Comment.map((element, index) => {
                        return (
                          <div key={index}>
                            <CommentBox
                              commentorName={element.user}
                              comment={element.comment}
                              projectId={element.projectId}
                              commentId={element._id}
                              reply={element.reply}
                              creatorId={creatorId}
                              index={index}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="flexC w-[80vw] sm:w-[250px]">
                        <h3 className="m-2">No Comments Yet</h3>
                      </div>
                    )}
                  </div>
                </Modal>

                <Modal
                  styles={{
                    modal: {
                      backgroundColor: "black",
                      border: "4px solid grey",
                      borderRadius: "18px",
                    },
                    root: { margin: "98px 0" },
                    closeIcon: { color: "red" },
                  }}
                  open={openDelete}
                  onClose={() => {
                    setopenDelete(false);
                  }}
                  center
                  showCloseIcon={false}
                >
                  <h3 className="m-1 mb-3 text-center">
                    Delete Project&nbsp;&nbsp;{" "}
                    <span className="font-medium text-xl">" {title} "</span>
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setopenDelete(false);
                      }}
                      className="my-2 border-white border-solid hover:border-dashed border-2 px-5 py-2 rounded-lg "
                    >
                      No
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        delete_project(title);
                      }}
                      className="my-1 border-white border-double hover:border-dashed border-2 px-5 py-2 rounded-lg"
                    >
                      Yes
                    </button>
                  </div>
                </Modal>
                <svg
                  className="arrow-icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <span className="bottom-text">PROJECTO</span>
        </div>
     
    </>
  );
}
