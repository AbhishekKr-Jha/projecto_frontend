import React, { useState } from "react";

function InfoBox() {
  const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);
  
  return (
    <div className="fixed bottom-10 z-[1200] right-10">
      <div
        onClick={() => {
          infoBoxVisibility
            ? setInfoBoxVisibility(false)
            : setInfoBoxVisibility(true);
            localStorage.setItem('notificationNumbers',JSON.stringify(1))
        }}
        className=" bg-blue-600 rounded-full px-2 py-1 cursor-pointer"
      >
        <i
          className={`text-3xl  ${
            !infoBoxVisibility ? "ri-question-mark" : "ri-close-line"
          } `}
        ></i>

        {!JSON.parse(localStorage.getItem("notificationNumbers")) &&
          <span className="absolute h-[20px] w-[20px] flex justify-center items-center bottom-0 -left-1 bg-white rounded-full font-semibold text-red-700">
            1
          </span>
        }
      </div>

      <div
        className={` text-xs p-3 bg-black rounded-md border-2 border-white absolute ${
          infoBoxVisibility
            ? " w-[180px] h-[300px] bottom-[80px] opacity-100 "
            : "w-[200px] h-[0px] -bottom-[400px] opacity-0 "
        } left-[-120px] transition-all ease-linear duration-500 `}
      >
        <div className=" ">
          <span className="my-1 font-semibold text-sm">Testing Emails</span>
     
          <div className="mt-4" >abhishekhp935@gmail.com</div>
          <div>pw1234</div>
          <hr  className="my-2" />
          <div>fofero8172@apdiv.com</div>
          <div>789</div>
          <hr  className="my-2" />
          <div className="">davari2366@mnsaf.com</div>
          <div className="">Anurag12@</div>
          <hr  className="my-2" />
        </div>
       <ul  className="mt-4">
        <li>- Profile Image Uploading is not done Yet</li>
        <li>- Some small error may ocuur I will fix it shortly</li>
       </ul>
      </div>
    </div>
  );
}

export default InfoBox;

//thus proble A ----> B if a  zi ndex is 800 can i make z index of b 100 so that it apperars below elemnets whre z index is greater than 100
