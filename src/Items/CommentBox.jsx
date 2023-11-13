import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import { replyComment_function } from "../components/Services/Apis";
import { useSelector } from "react-redux";

export default function CommentBox({
  commentorName,
  comment,
  projectId,
  commentId,
  creatorId,
  reply,
  index,
}) {
  const isLogin = useSelector((state) => state.login.isLogin);
  console.log("the index is ", index);
  const [Reply, setReply] = useState({
    commentId,
    projectId,
    userId: JSON.parse(localStorage.getItem("userData"))?.id,
    reply: "",
  });
  const [SuccessfulReply, setSuccessfulReply] = useState(reply);
  const submitReply = async (e) => {
    e.preventDefault();
    try {
      const { data } = await replyComment_function(Reply);
      if (data.success) {
        console.log(data.message);
        setSuccessfulReply(data.reply);
        document.getElementsByClassName("replyBox")[index].style.display =
          "none";
        document.getElementById({ commentId }).style.display = "block";
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-[100%] mt-2 ">
        <div className="flex justify-start flex-wrap">
          <h3 className="text-base sm:text-lg mt-2 mb-2 font-medium">
            {commentorName}
          </h3>
          {JSON.parse(localStorage.getItem("userData"))?.id === creatorId &&
            SuccessfulReply.length === 0 && (
              <span id={commentId} name="replyBtn">
                <IconButton
                  onClick={() => {
                    const replyBox =
                      document.getElementsByClassName("replyBox")[index];
                    if (replyBox) {
                      replyBox.style.display = "flex";
                    }
                    const replyBtn = document.getElementById(commentId);

                    if (replyBtn) {
                      replyBtn.style.display = "none";
                    }
                  }}
                >
                 {isLogin && <ReplyIcon />}
                </IconButton>
              </span>
            )}
        </div>
        {/* border-white    border-solid border-[1px] input w-[70vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] max-w-[500px] */}
        <p className="text-base sm:text-lg ">{comment}</p>
        <span className="p-0 rounded-2xl  hidden   replyBox">
          <input
            value={Reply.reply}
            onChange={(e) => {
              setReply({ ...Reply, [e.target.name]: e.target.value });
            }}
            type="text"
            placeholder="Your Reply"
            name="reply"
            className="  border-white    border-solid border-[1px] focus:border-2 input w-[70vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] max-w-[500px]"
            rows="0"
            autoFocus={true}
            onBlur={() => {
              const replyBox =
                document.getElementsByClassName("replyBox")[index];
              if (replyBox) {
                replyBox.style.display = "none";
              }
              const replyBtn = document.getElementById(commentId);
              if (replyBtn) {
                replyBtn.style.display = "block";
              }
            }}
          />
          {Reply.reply && (
            <Box className="self-center md:mx-1">
              <IconButton onClick={submitReply}>
                <SendIcon />
              </IconButton>
            </Box>
          )}
        </span>
        {SuccessfulReply.length > 0 && (
          <div className=" mt-2 flex justify-start ">
            <div className="bg-red-700 rounded-full   px-[6px]"> R </div>{" "}
            <h3 className="text-sm -mx-7 ">{SuccessfulReply}</h3>
          </div>
        )}

        <hr className=" mt-3  w-[75vw] max-w-[660px] mx-auto bg-white h-[2px]" />
      </div>
    </>
  );
}
