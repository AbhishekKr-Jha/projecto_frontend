import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import linkedin from "../../Items/Icons/linkedin.svg";
import instagram from "../../Items/Icons/instagram.svg";
import github from "../../Items/Icons/github.svg";
import { update_function } from "../Services/Apis";
import { useDispatch } from "react-redux";
import { userInfo } from "../../Redux/loginSlice";
import { success,fail } from "../../Items/Toastify";

import Loader from "../../Items/loader/Loader";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const location = useLocation();
  const userData = location.state;
  const [loader,setLoader]=useState(false)
  const [updatedData, setUpdatedData] = useState({
    firstName: userData?.name.split(/\s+/)[0],
    lastName: userData?.name.split(/\s+/)[1],
    email: userData.email,
    userId: JSON.parse(localStorage.getItem("userData"))?.id,
    linkedin: userData.linkedin,
    instagram: userData.instagram,
    github:userData.github ,
  });
  const get_Updated_Data = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    console.log(updatedData);
  };

  const send_updated_data = async (e) => {
    e.preventDefault()
    try {
      setLoader(true)
      console.log("waiting for the data")
      const { data } = await update_function(updatedData);
      
      if (data.success) {
        console.log("data updation successful", data);
        dispatch(
          userInfo({
            name: data.userInfo.firstName + " " + data.userInfo.lastName,
            linkedin: data.userInfo.contact.linkedin,
            github: data.userInfo.contact.github,
            instagram: data.userInfo.contact.instagram,
          })
        );
        success(data.message)
        setTimeout(()=>{
          setLoader(false)

        },2000)
      } else {
        console.log("else is active as ", data);
        fail(data.message)
      
      }
    } catch (error) {
      setLoader(false)
      console.log("error in profile updation ", error);
    }
  };

  return (
    <>
      <div className="fixed">
        <Toaster position="bottom-right" />
      </div>
      { loader ? ( <Loader text="Updating your Bio..." /> ) :
       (  <section className=" element-Wrapper flexC space-y-3 pt-[55px]  pb-[20px] ">
        <h1 className=" text-xl mt-[30px]  md:mt-[40px] mb-[2vh] md:mb-[25px]   md:text-2xl">
          {" "}
          Edit Profile ...
        </h1>
       
        <form className="flexC space-y-3 " onSubmit={send_updated_data}>
          <div>
            <h4 className="text-[16px] mb-1 md:">First Name</h4>
            <input
              onChange={get_Updated_Data}
              value={updatedData.firstName}
              className=" input md:w-[400px]"
              type="text"
              name="firstName"
              autoComplete="off"
            />
          </div>
          <div>
            <h4 className="text-[16px] mb-1">Last Name</h4>
            <input
              onChange={get_Updated_Data}
              value={updatedData.lastName}
              className=" input md:w-[400px]"
              type="text"
              name="lastName"
              autoComplete="off"
            />
          </div>
          <div>
            <h4 className="text-[16px] mb-1">Email</h4>
            <input
              onChange={get_Updated_Data}
              value={updatedData.email}
              className=" input md:w-[400px]"
              type="url"
              name="email"
              disabled
            />
          </div>
          <div>
            <h4 className="text-[16px] mb-1">Contact</h4>
            <div className="flex flex-col gap-y-3 mb-6">
              <div className="input md:w-[400px] flex justify-start gap-3">
                <span className=" w-[12vw] max-w-[27px] bg-white rounded-xl  ">
                  <img src={github} alt="loading..." />
                </span>{" "}
                <input
                  className=" w-[98%] outline-none bg-transparent"
                  onChange={get_Updated_Data}
                  value={updatedData.github}
                  type="url"
                  name="github"
                  autoComplete="off"
                />
              </div>

              <div className="input md:w-[400px] flex justify-start gap-3">
                <span className=" w-[12vw] max-w-[30px]  rounded-xl -ml-1 ">
                  <img src={linkedin} alt="loading..." />
                </span>{" "}
                <input
                  className=" w-[98%] outline-none bg-transparent"
                  onChange={get_Updated_Data}
                  value={updatedData.linkedin}
                  type="url"
                  name="linkedin"
                  autoComplete="off"
                />
              </div>

              <div className="input md:w-[400px] flex justify-start gap-3">
                <span className=" w-[12vw] max-w-[30px]  rounded-xl -ml-1 ">
                  <img src={instagram} alt="loading..." />
                </span>{" "}
                <input
                  className=" w-[98%] outline-none bg-transparent"
                  onChange={get_Updated_Data}
                  value={updatedData.instagram}
                  type="url"
                  name="instagram"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="button ">
            Add
          </button>
        </form>
      </section> )}
    </>
  );
}

export default EditProfile;
