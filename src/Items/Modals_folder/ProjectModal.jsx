import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useSelector } from "react-redux";
import CommentsBox from "../project_card/CommentsBox";
import { getComment_function } from "../../components/Services/Apis";
import { AddComments } from "../../components/User_pages/After_login/Projects_func_comp/AddComments";
import "react-responsive-modal/styles.css";
import { useNavigate } from "react-router-dom";

export default function ProjectModal({
  open,
  close,
   openDelete,
  title,
  description,
  githubLink,
  liveLink,
  creatorId,
  projectId,
  createdAt
}) {
  const userLoginDetails = useSelector((state) => state.login);

  const userId = JSON.parse(localStorage.getItem("userData"))?.id;
const navigate=useNavigate()
 
  //for getting the value of input Comment
  const [inputCommentValue, setInputCommentValue] = useState({
    projectId: projectId,
    comment: "",
    userId: userId,
  });
  useEffect(() => {
    getProjectComments();
  }, [open]);

  //for setting the comments
  const [comments, setComments] = useState([]);

  //getting all the comments of the project
  const getProjectComments = async () => {
    try {
      const { data } = await getComment_function(projectId);  
      if (data.success) {
        setComments(data.comments);
      } else {
        console.log("getcomments  entered in console");
      }
    } catch (error) {
      console.log(error);
    }
  };

//redirecting link
const redirectLink = (textLink) => {
  window.location.href = textLink;
};

  return (
    <Modal
      styles={{
        modal: { 
          backgroundColor: "black",
          borderRadius: "18px",
          paddingTop: "60px",
          margin: "0 -8px",
        },
        root: {},
      }}
      classNames={{ modal: " sc2", root: "bg-black " }}
      open={open}
      onClose={close}
      center
      closeIcon={<i className=" text-3xl ri-arrow-left-line "></i>}
    > 
      <div className="  overflow-y-auto  w-[85vw]  sm:max-w-[500px]  lg:max-w-[600px] sc2  max-h-[800px] border-2 px-2 lg:px-3 py-3  rounded-lg ">
        <div className="  p-1 ">
          <div className=" mb-6">
            <div className=" md:flex  justify-start items-center  md:space-x-2  mb-2    ">
              <h3 className=" text-base min-w-[170px] max-w-[400px] bg-slate-900 group-hover:border-[1px] group-hover:border-white py-2 rounded-md px-3  ">
                {title}
              </h3>
              <div className="flex  justify-center   my-3 px-2    ">
                {githubLink?.length > 0 && (
                  <span onClick={() => redirectLink(githubLink)} className=" hover:bg-slate-900 cursor-pointer rounded-full p-[6px]">
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
                )}
                {liveLink?.length > 0 && (
                  <span onClick={() => redirectLink(liveLink)} className=" text-[14px]  cursor-pointer ">
                    Show Live
                  </span>
                )}
              </div>
            </div>
            <p className=" text-sm md:text-base  min-h-[50px]  px-2 my-3">
              {description}
            </p>
            <div className=" w-full mt-1 ">
              <span className="text-sm text-gray-400  font-medium">
              {createdAt}
              </span>
              {creatorId === userId && (
                <div className="w-full scale-75  flex justify-center transition-all ease-in  duration-500  space-x-3 items-baseline">
                  <i
                    onClick={openDelete}
                    className="cursor-pointer  text-3xl  fi fi-rs-trash"
                  ></i>
                  <i  onClick={() =>
                    navigate("/update_project", {
                      state: {
                        projectId,
                        creatorId,
                        title,
                        liveLink,
                        githubLink,
                        description,
                      },
                    })
                  } className="cursor-pointer text-2xl fi fi-rr-pencil"></i>
                </div>
              )}
            </div>
          </div>
          <hr className=" mx-auto w-[90%] " />
          <h2 className="my-3 text-2xl lg:text-3xl ">Suggestions</h2>
          {userLoginDetails.isLogin && userId !== creatorId && (
            <div className=" flex flex-col sm:flex gap-y-3 items-start sm:justify-start sm:items-center  gap-3  mt-6">
              <input
                type="text"
                onChange={(e) => {
                  setInputCommentValue({
                    ...inputCommentValue,
                    comment: e.target.value,
                  });
                }}
                value={inputCommentValue.comment}
                placeholder="Enter your Suggestion"
                className="input w-[280px] sm:w-[400px] text-xs md:text-sm rounded-none  border-0 border-b-[0.1px] border-gray-400 focus:border-white "
              />

              {inputCommentValue.comment.length > 0 && (
                <button
                  onClick={async () => {
                    const result = await AddComments(inputCommentValue);
          console.log("the comment result is ",result)
                   setComments((pre)=>[result,...pre])
                   console.log("the setcommment value before is",comments) 
                   setTimeout(() => {
                    console.log("the setcommment value now is",comments)
                   }, 3000);
                    setInputCommentValue({ ...inputCommentValue, comment: "" });
                 
                  }}
                  className=" mx-auto sm:mx-0 py-2 px-6 rounded-lg bg-red-900 text-xs font-thin lg:hover:bg-gray-200 hover:text-black "
                >
                  <i className=" ri-send-plane-2-line cursor-pointer"></i>
                </button>
              )}
            </div>
          )}




          <div className=" my-5 ">
            {comments.length>0 && comments.map((element, index) => {
            
              return (
                <div key={index} className="my-4 lg:my-8">
                  <CommentsBox
                    index={index}
                    userLoginDetails={userLoginDetails}
                    commentorName={element.user}
                    commentorEmail={element.userEmail}
                    comment={element.comment}
                    commentId={element._id}
                    reply={element.reply}
                    creatorId={creatorId}
                    userId={userId}
                    projectId={projectId}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}
