import React from "react";
// import contact_image from './contact_image.svg'
import i1 from "./i1.svg";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      {/* <div className=" flexC  "> */}
        <section className="flexC element-Wrapper pt-[85px] md:pt-[100px]  lg:flex-row lg:flex lg:space-x-12">
          <div className=" flexC  mt-[5vw] md:m-0"> 
          <div className="border-solid border-l-8  rounded-full ">
            <img className=" img-size w-[54vw] "  src={i1} alt="loading..." /></div>
            <h3 className="text-center mt-2 text-base md:text-lg font-medium lg:text-xl">Need Help? <br/>PROJECTO is here.</h3>
          </div> 
          <div className="flex contact-right-section">
            <form >
              <div className=" flexC ">
                <input
                  className="input md:w-[400px]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  autoComplete="off"
                />
                <textarea
                  type="text"
                  className="ContactTextarea w-[90vw] md:w-[400px] mb-2"
                  name="message"
                  placeholder="Your Query"
                />
                <button type="submit" className="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      {/* </div> */}
    </>
  );
}
