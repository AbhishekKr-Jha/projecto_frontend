import React from "react";
import image from "../Image.svg";

export default function Hero1() {
  return (
    // max-text-[72px]
    <>
      <div className=" flex hero-Box pt-[25px]  ">
        <div className=" hero-left-section ml-[2px]">
          <h4 className="uppercase   leading-slug ">
            Now showcase
            <br />
            your projects <br />
            to everyone easily!
          </h4>
          <h1 className="animated-underline">PROJECTO</h1>
          <h2 className="text-3xl mt-1">Your project presentor</h2>
        </div>
        <div className=" flex hero-right-section">
          <img src={image} alt="loading..." />
        </div>
      </div>
    </>
  );
}
