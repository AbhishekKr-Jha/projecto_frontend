import React, { useState } from "react";
import { showInput } from "../ExtraFunction";

export default function CommentsBox({
  index,
  userLoginDetails,
  commentorName,
  comment,
  commentId,
  creatorId,
  reply,
  userId,
}) {
  //for getting input value of reply
  const [inputReplyValue, setInputReplyValue] = useState("");

//submit your comment
const submitComment=async()=>{

}

  return (
    <>
      <div className="flex justify-start gap-2">
        <span className=" w-[22px] h-[22px] md:w-7 md:h-7 rounded-full bg-orange-500 text-sm md:text-lg flex items-center justify-center uppercase pr-[1px]">
        {commentorName[0]}
        </span>
        <span className="text-xs md:text-base cursor-pointer hover:underline ">
          akjha4127@gmail.com
        </span>
      </div>

      <p className="text-xs md:text-base ">
       {comment}
      </p>

      {reply.length > 0 && (
        <div className="my-3 px-7 flex justify-start items-center gap-2 text-xs md:text-sm ">
          <span className="  w-6 h-6  rounded-full bg-blue-500 flex justify-center items-center uppercase  ">{userLoginDetails.userLoginDetails.name[0]}</span>
          <p className="" >
           {reply}
          </p>
        </div>
      )}

      { userLoginDetails.isLogin && creatorId === userId && !reply.length > 0 && (
        <button
          id={`replyBtn${index}`}
          style={{ display: "block" }}
          onClick={() => showInput(index)}
          autoFocus={false}
          className=" my-3 py-2 px-4  rounded-lg bg-red-900  cursor-pointer font-semibold   text-xs hover:bg-gray-200 hover:text-black "
        >
          Reply
        </button>
      )}

      <div
        id={`inputelem${index}`}
        style={{ display: "none" }}
        className={` flex-col
} justify-start items-start gap-y-0 `}
      >
        <div className="my-2 flex justify-start items-center gap-2  ">
          <span className="rounded-full bg-blue-500   w-7 h-7 "></span>
          <input
            onChange={(e) => setInputReplyValue(e.target.value)}
            type="text"
            autoFocus
            placeholder="Enter your Suggestion"
            className="input w-[250px] sm:w-[400px] text-xs md:text-sm rounded-none  border-0 border-b-[0.5px] border-gray-400"
          />
        </div>
        <div className="m-4 flex gap-10">
          <button
            onClick={() => showInput(index)}
            className="py-2 px-4  rounded-lg bg-red-900 text-xs font-semibold hover:bg-gray-200 hover:text-black"
          >
            Cancel
          </button>

          {inputReplyValue.length > 0 && (
            <i className="text-2xl ri-send-plane-2-line cursor-pointer"></i>
          )}
        </div>
      </div>
    </>
  );
}
