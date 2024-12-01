import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckConnection from "../CheckConn/CheckConnection";

function InfoBox() {
  const serverStatusCheck = useSelector(
    (state) => state.login.isServerConnected
  );
  console.log("----",serverStatusCheck)
  const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);

  return (
    <div className="fixed bottom-10 z-[1200] right-10">
      <div
        onClick={() => {
          infoBoxVisibility
            ? setInfoBoxVisibility(false)
            : setInfoBoxVisibility(true);
          localStorage.setItem("notificationNumbers", JSON.stringify(1));
        }}
        className=" bg-blue-600 rounded-full px-2 py-1 cursor-pointer"
      >
        <i
          className={`text-3xl  ${
            !infoBoxVisibility ? "ri-question-mark" : "ri-close-line"
          } `}
        ></i>

        {!JSON.parse(localStorage.getItem("notificationNumbers")) && (
          <span className="pulse-ball absolute h-[20px] w-[20px] flex justify-center items-center bottom-0 -left-1 bg-white rounded-full font-semibold text-red-700">
            1
          </span>
        )}
      </div>

      <div
        className={` text-xs p-3 bg-black rounded-md border-2 border-white absolute ${
          infoBoxVisibility
            ? " w-[180px] h-[310px] bottom-[80px] opacity-100 "
            : "w-[200px] h-[0px] -bottom-[400px] opacity-0 "
        } left-[-120px] transition-all ease-linear duration-500 `}
      >
        <div className=" ">
          <span className="mb-[4px] font-semibold text-sm animated-underline">
            My Email
          </span>
          <div>akjha4127@gmail.com</div>
          <hr className="my-2" />
          <span className="mb-[2px] font-semibold text-sm animated-underline">
            Testing Emails
          </span>

          <div className="mt-1">abhishekhp935@gmail.com</div>
          <div>pw1234@aryan</div>
          <hr className="my-2 w-[60px] mx-auto" />
          <div>davari2366@mnsaf.com</div>
          <div>abhipw1234</div>
          <hr className="my-2" />
        </div>
        {serverStatusCheck ? (
          <div className="my-4">
          <CheckConnection visibility={true} />
          <p></p>
          </div>
        ) : (
          <ul className="">
            <li>- Profile Image Uploading is not done Yet</li>
            <hr className="my-2 w-[60px] mx-auto" />
            <li>
              -If Logged in please edit your profile to add you social links
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default InfoBox;

//thus proble A ----> B if a  zi ndex is 800 can i make z index of b 100 so that it apperars below elemnets whre z index is greater than 100
