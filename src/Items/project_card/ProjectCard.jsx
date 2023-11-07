import React, { useState, useEffect } from "react";
import "./project_card.css";
import { Box, Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProject_function,
  getComment_function,
  postComment_function,
} from "../../components/Services/Apis";
import { useDispatch, useSelector } from "react-redux";
import { delete_project_state, project_deleted } from "../../Redux/deleteSlice";
// import Modals from '../../Items/modal/Modals'
// import { modal_open } from '../../Redux/modalSlice'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CommentBox from "../CommentBox";
import AddCommentIcon from "@mui/icons-material/AddComment";

export default function ProjectCard({
  projectId,
  creatorId,
  title,
  liveLink,
  githubLink,
  description,
}) {
  // console.log(projectId)
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const isDelete = useSelector((state) => state.delete.isDelete);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [Comment, setComment] = useState([]);
  const [InputComment, setInputComment] = useState({
    projectId: projectId,
    comment: "",
    userId: JSON.parse(localStorage.getItem("userData"))?.id,
  });
  const [ProjectCreator, setProjectCreator] = useState(false);
  const [CanComment, setCanComment] = useState(false);
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

  const edit_project = async () => {
    navigate("/update_project");
  };

  const delete_project = async (title) => {
    console.log("title is--", title);
    try {
      const user = JSON.parse(localStorage.getItem("userData")).id;
      const { data } = await deleteProject_function({ user, title });
      if (data.success) {
        console.log(data.message);
        console.log(isDelete);
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
  const visitLink=(link)=>{
window.location.href=link
  }
  return (
    <>
      <div className="flexC">
        <div class="project-card hover:md:scale-110">
          <div class="border"></div>
          <div class="content">
            <div className="card1 ">
              <div className="flex justify-between -mt-5">
                <div className="flex  space-x-1 ">
                  <p class="card-title">{title}</p>
                  {githubLink?.length > 0 && (
                    <Link onClick={()=>visitLink(githubLink)} className="mb-1 ml-[-30px] hover:bg-slate-900 rounded-full">
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
                    </Link>
                  )}
                  {liveLink?.length > 0 && (
                    <span onClick={()=>visitLink(liveLink)} className="text-[14px] animated-underline cursor-pointer ">
                      Show Live
                    </span>
                  )}
                </div>

                {ProjectCreator && (
                  <div className="flex    project-card-icons ">
                    <span onClick={edit_project} className="">
                      <IconButton className=" animated-underline cursor-pointer">
                        <i className="ri-pencil-line"></i>
                      </IconButton>
                    </span>
                    <span onClick={() => delete_project(title)}>
                      <IconButton className="animated-underline cursor-pointer">
                        <i class="ri-delete-bin-5-fill"></i>
                      </IconButton>
                    </span>
                  </div>
                )}
              </div>

              <p class="card-des">{description}</p>
              <p class="card-text">
                <span>
                  <button className="bg-red-700" onClick={onOpenModal}>
                    View More
                  </button>
                </span>

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
                >
                  <div className="m-2 mt-5 ">
                    <div className="flex justify-between -mt-5">
                      <div className="flex  space-x-1 mb-2">
                        <p className="card-title m">{title}</p>
                        {githubLink?.length > 0 && (
                          <Link to={`/${githubLink}`} className="mb-1 ml-[-30px] hover:bg-slate-900 rounded-full">
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
                          <a to='/https://www.youtube.com/' className="text-[14px] animated-underline cursor-pointer ">
                            Show Live
                          </a>
                        )}
                      </div>
                    </div>
                    <p>{description}</p>
                    {ProjectCreator && (
                      <div className="flex    project-card-icons  mb-2">
                        <span onClick={edit_project} className="">
                          <IconButton className=" animated-underline cursor-pointer">
                            <i className="ri-pencil-line"></i>
                          </IconButton>
                        </span>
                        <span onClick={() => delete_project(title)}>
                          <IconButton className="animated-underline cursor-pointer">
                            <i class="ri-delete-bin-5-fill"></i>
                          </IconButton>
                        </span>
                      </div>
                    )}
                    <hr className="w-[28vw] max-w-[280px] mx-auto bg-white h-[2px]" />
                  </div>
                  <div
                    onClick={() => {
                      openComment(projectId);
                    }}
                    className="animated-underline text-[4vw] sm:text-[22px] md:text-[25px] lg:text-[28px]' cursor-pointer"
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
                    setProjectCreator(false);
                  }}
                  center
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

                <svg
                  class="arrow-icon"
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
          <span class="bottom-text">PROJECTO</span>
        </div>
      </div>
    </>
  );
}
