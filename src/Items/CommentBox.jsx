import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import { replyComment_function } from "../components/Services/Apis";

export default function CommentBox({
  commentorName,
  comment,
  projectId,
  commentId,
  creatorId,
  reply,
  index,
}) {
  // console.log("-->", reply.length);
  // console.log("____", commentId);
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
              <span className="replyBtn">
                <IconButton
                  onClick={() => {
                    console.log(">>>>>>>>>>>>>>>>>>>>>", index);
                    const replyBox =
                      document.getElementsByClassName("replyBox")[index];
                    if (replyBox) {
                      replyBox.style.display = "flex";
                    }
                    const replyBtn =
                      document.getElementsByClassName("replyBtn")[index];
                    // console.log(replyBtn)
                    if (replyBtn) {
                      replyBtn.style.display = "block";
                    }
                    console.log(">--->", Reply);
                    console.log("-->:::::", commentorName);
                    // const a= document.getElementsByClassName("replyBox")[index]
                    // const b=  document.getElementsByClassName("replyBtn")[index]
                    // console.log("a is",a)
                    // console.log("b is",b)
                  }}
                >
                  <ReplyIcon />
                </IconButton>
              </span>
            )}
          <div className="p-2 rounded-2xl flex-wrap hidden bg-red-800 border-white border-solid border-[1px] replyBox">
            <textarea
              value={Reply.reply}
              onChange={(e) => {
                setReply({ ...Reply, [e.target.name]: e.target.value });
              }}
              type="text"
              placeholder="Your Reply"
              name="reply"
              // className="bg-slate-800 rounded-none border-t-0 border-l-0 border-r-0 input w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] max-w-[600px] focus:border-white focus:border-b-2 "
            className="border-none input w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] max-w-[600px]"
              rows="2"
              autoFocus={true}
              onBlur={() => {
                const replyBox =
                  document.getElementsByClassName("replyBox")[index];
                if (replyBox) {
                  replyBox.style.display = "none";
                }
                const replyBtn =
                  document.getElementsByClassName("replyBtn")[index];
                if (replyBtn) {
                  replyBtn.style.display = "block";
                }
              }}
            />
            {Reply.reply && (
              <Box className="self-center">
                <IconButton onClick={submitReply}>
                  <SendIcon />
                </IconButton>
              </Box>
            )}
            {/* <button><i class="ri-send-plane-fill"></i></button> */}
          </div>
        </div>
        <p className="text-base sm:text-lg ">{comment}</p>
        {SuccessfulReply.length > 0 && (
          <span>
            <h3 className="text-sm">{SuccessfulReply}</h3>
          </span>
        )}

        <hr className=" mt-3  w-[75vw] max-w-[660px] mx-auto bg-white h-[2px]" />
      </div>
    </>
  );
}
