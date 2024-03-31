import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import Lottie from "lottie-react";
import Compo1 from "./Hero_component/Compo1";
import A2 from "./animations/A2.json";
import h3 from "./animations/h3.svg";
import e3 from "./animations/e3.svg";
import S1 from "./animations/S1.svg";
import c1 from "./animations/c1.svg";
import space2 from "./animations/space2.json";
export default function Hero() {
  return (
    <>
      <div className=" element-Wrapper flex flex-col justify-center  mt-[50px] md:mt-[56px] bg-black  oveflow-hidden">
        <div
          id="first-container"
          className="  relative w-full mb-16 mt-16    px-2  flex flex-col lg:flex-row   justify-around items-center "
        >
          <h2 className="  text-[9.3vw]  sm:text-6xl  sm:leading-[80px] lg:leading-[82px] font-bold font-[raw] tracking-wider uppercase ">
            Now
            <br /> Showcase <br /> Your Projects
            <span className="text-[12vw]  sm:text-[65px] lg:text-[95px]">
              2
            </span>{" "}
            <br />
            Everyone Easily
          </h2>
          <Lottie
            className="mt-6  w-[90%]   sm:w-[80%] md:w-[80%] lg:w-[42%] lg:max-w-[530px] "
            animationData={A2}
          />
        </div>

        <div className="w-[95%]    mx-2 md:mx-10 lg:mx-12 my-16 ">
          <div className="relative  border-white border-2 rounded-lg overflow-hidden">
            <h2 className="z-[12] relative  text-center lg:-ml-3  text-[16vw] md:text-[18vw] 2xl:text-[286px] font-semibold  hero-heading">
              PROJECTO
            </h2>
          </div>
          <div className="relative w-full flex flex-col lg:flex-row justify-center items-start">
            <p className="w-full sm:w-[67%] max-w-[500px] text-[15px] md:text-2xl px-2 mt-5 ">
              A thriving Community for developers where you can connect with
              others and can showcase your work.
            </p>

            <div className=" relative z-10 flex items-start justify-center mx-auto  md:-mt-[100px] lg:-mt-[300px] w-[96%]  sm:w-[78%] md:w-[70%] lg:w-[650px]  a2 ">
              <Lottie className=" w-full   " animationData={space2} />
            </div>
          </div>
        </div>

        <div className="w-full   my-16">
          <div
            className="mb-40 text-5xl  sm:text-6xl lg:text-8xl font-bold tracking-wider
      overflow-x-auto whitespace-nowrap  sliding-text-container  px-2  "
          >
            <div className="slide-box">
              <h3>CREATE</h3>
              <div className="dot"></div>
              <h3>CONNECT</h3>
              <div className="dot"></div>
              <h3>COLLABORATE</h3>
              <div className="dot"></div>
            </div>
            <div className="slide-box">
              <h3>CREATE</h3>
              <div className="dot"></div>
              <h3>CONNECT</h3>
              <div className="dot"></div>
              <h3>COLLABORATE</h3>
              <div className="dot"></div>
            </div>
            <div className="slide-box">
              <h3>CREATE</h3>
              <div className="dot"></div>
              <h3>CONNECT</h3>
              <div className="dot"></div>
              <h3>COLLABORATE</h3>
              <div className="dot"></div>
            </div>
          </div>
          <div className=" w-full relative z-30 flex flex-wrap justify-evenly count-up-container ">
            <span className="count-up">
              <CountUp
                className="counting"
                scrollSpyOnce={true}
                enableScrollSpy={true}
                duration={5}
                end={100}
              />{" "}
              <h4 className="">Registeration</h4>{" "}
            </span>
            <span className="count-up">
              <CountUp
                className="counting"
                scrollSpyOnce={true}
                enableScrollSpy={true}
                duration={5}
                end={100}
              />{" "}
              <h4>Active Users</h4>{" "}
            </span>
            <span className="count-up">
              <CountUp
                className="counting"
                scrollSpyOnce={true}
                enableScrollSpy={true}
                duration={5}
                end={100}
              />{" "}
              <h4>Added Projects</h4>{" "}
            </span>
          </div>
        </div>

        <div className="w-full my-16 md:my-20  ">
          <Compo1
            animation={h3}
            heading="Add Projects"
            para="Add your projects  from a simple web page design  to an advanced website."
          />
          <Compo1
            animation={e3}
            heading="Explore Projects"
            para="Add your projects  from a simple web page design  to an advanced website."
            order="md:-order-2"
          />
          <Compo1
            animation={S1}
            heading="Put a Suggestion"
            para="Add your projects  from a simple web page design  to an advanced website."
          />
          <Compo1
            animation={c1}
            heading="Connect with Others"
            para="Add your projects  from a simple web page design  to an advanced website."
            order="md:-order-2"
          />
        </div>
      </div>
    </>
  );
}
