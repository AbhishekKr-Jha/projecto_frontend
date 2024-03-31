import React from "react";
import aboutImg from "./about3.svg";
export default function About() {
  return (

  
      <section className="flexC mb-3 element-Wrapper pt-[118px] ">
        <img className="img-size " src={aboutImg} alt="loading..." />

        <div className=" w-[95vw] max-w-[1300px] text-center ">
          <h3 className="about-text">
            Welcome to Projeto, a platform where creativity meets collaboration!
            Our mission is to provide a space for individuals like you to
            showcase your projects, ideas, and innovations to a global audience.
            Whether you're a seasoned professional or a passionate hobbyist,
            Projeto is the canvas for your imagination.{" "}
          </h3>
          <h3 className="m-1 mt-4 fw-medium font-[raw]  text-4xl  sm:text-5xl  ">
            Our Vision
          </h3>
          <h3 className=" about-text">
            {" "}
            We envision a world where every project, big or small, finds its
            spotlight. We believe in the power of ideas to inspire, connect, and
            transform. By fostering a community of creators, we aim to be the
            go-to platform for project sharing, collaboration, and discovery.
          </h3>
          <h3 className="m-1 mt-4 fw-medium  font-[raw] text-4xl  sm:text-5xl  ">
            How It Works
          </h3>
     
         <li className="text-left  about-text">
            {" "}
            Join Projeto and set up your unique profile to start sharing your
            projects.
          </li>
          <li className="text-left about-text">
            {" "}
            Showcase your creations by adding links, detailed information and
            description of the project you created. Let the world see the story
            behind it.
          </li>
          <li className="text-left  about-text">
            Explore projects from fellow creators, leave feedback, and connect
            with potential collaborators. Projeto is a thriving community
            waiting for your unique contributions.
          </li>

          <h3 className="  about-text mt-5">
            Join us on this exciting journey of exploration, creation, and
            connection. Let Projeto be the canvas for your ideas, and together,
            let's build a community that celebrates innovation and inspiration.
          </h3>
        </div>
      </section>
     
    // </div>
  );
}
