import React from "react";
import aboutImg from "./aboutImg2.svg";

export default function About() {
  return (
    <div className="  element-Wrapper pt-[50px] ">
      <div className="flexC  my-6">
<img className="my-3 w-[70vw] md:w-[45vw] lg:w-[360px] max-w-[360px]" src={aboutImg} alt="loading..." />

<div className="w-[96vw]  md:w-[88vw] lg:w-[900px] ">
  <h3 className="text-center  text-base md:text-lg m-2">Welcome to Projeto, a platform where creativity meets collaboration! Our mission is to provide a space for individuals like you to showcase your projects, ideas, and innovations to a global audience. Whether you're a seasoned professional or a passionate hobbyist, Projeto is the canvas for your imagination. </h3>
  <h3 className="m-1 fw-medium text-center text-[10vw]  sm:text-[30px] md:text-[44px] ">Our Vision</h3>
  <h3 className="text-center  text-base md:text-lg m-2"> We envision a world where every project, big or small, finds its spotlight. We believe in the power of ideas to inspire, connect, and transform. By fostering a community of creators, we aim to be the go-to platform for project sharing, collaboration, and discovery.
  </h3>
  <h3 className="m-1 fw-medium text-center text-[10vw]  sm:text-[30px] md:text-[44px] ">How It Works</h3>

  <li className="text-left  text-base m-2"> Join Projeto and set up your unique profile to start sharing your projects.
  </li>
  <li className="text-left text-base m-2"> Showcase your creations by adding links, detailed information and description of the project you created. Let the world see the story behind it.</li>
  <li className="text-left text-base  m-2">Explore projects from fellow creators, leave feedback, and connect with potential collaborators. Projeto is a thriving community waiting for your unique contributions.</li>
  <h3 className="text-center  text-base md:text-lg m-6">Join us on this exciting journey of exploration, creation, and connection. Let Projeto be the canvas for your ideas, and together, let's build a community that celebrates innovation and inspiration.</h3>
  </div>

      </div>
    </div>
  );
}
