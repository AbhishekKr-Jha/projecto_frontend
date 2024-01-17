import React from "react";
import "./w.css";

export default function Wastecard() {
  return (
    <div className="  element-Wrapper flex flex-col  pt-[90px] pb-[30px]  justify-center items-center ">
      {/* <div class="flex flex-col justify-center h-[200px] w-[90vw] md:w-[80vw] max-w-[650px] p-2  bg-black task  " draggable="true">
  <div class="tags bg-red-600">
    <span class="tag">Draggable </span>
      hello good noght
  </div>
  <p className="text-lg bg-violet-600">Lorem  an unknown </p>
  <div class="stats bg-orange-200">
    
      <div>Feb 24</div>
      
      <div>hello</div>
   
      
      
      
      </div>
      
    </div> */}

      <div className=" max-h-max w-[90vw] md:w-[80vw] max-w-[600px] border-2 border-white   rounded-lg  p-3 hover:scale-105 transition-all linear duration-500  group">
        {/* //todo title and link blovck */}
        {/* <div className="flex justify-between "> */}

          <div className="flex flex-col sm:flex-row justify-start items-center space-y-0  space-x-2  mb-2    ">
            <h3 className="bg-slate-900 group-hover:border-[1px] group-hover:border-white py-2 rounded-2xl px-3">
              title of your project you choose proct
            </h3>
   <div className="flex  justify-center md:justify-start     ">
    <span className=" hover:bg-slate-900 cursor-pointer rounded-full p-[6px]">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </span>
            <span className=" text-[14px] animated-underline cursor-pointer ">
              Show Live
            </span></div>
          </div>
        {/* </div> */}

        <div className="my-3  w-full h-[90px]  text-justify  ">
          <p className="whitespace-pre-wrap  line-clamp-4   ">
            Lor rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque dolores soluta optio error, impedit distinctio, vel
            aperiam sit.
          </p>
        </div>

        <div className=" w-full flex justify-between items-center mt-1 ">
          <span className="text-gray-400 font-medium">05 Jan, 2023</span>
          <div className=" scale-0 flex md:focus:scale-100 md:group-hover:scale-100 transition-scale linear  duration-500 group-hover:flex space-x-3 items-baseline">
          <i class="cursor-pointer text-2xl  fi fi-rs-trash"></i>
          <i class="cursor-pointer text-xl fi fi-rr-pencil"></i>
          </div>
          <i className=" flex items-center text-[28px] fi fi-rr-angle-double-small-right arrow"></i>
        </div>
      </div>


      <div className=" max-h-max w-[90vw] md:w-[80vw] max-w-[600px] border-2 border-white   rounded-lg  p-3 hover:scale-105 transition-all linear duration-500  group">
        {/* //todo title and link blovck */}
        {/* <div className="flex justify-between "> */}

          <div className="flex flex-col sm:flex-row justify-start items-center space-y-0  space-x-2  mb-2    ">
            <h3 className="bg-slate-900 group-hover:border-[1px] group-hover:border-white py-2 rounded-2xl px-3">
              title of your project you choose proct
            </h3>
   <div className="flex  justify-center md:justify-start     ">
    <span className=" hover:bg-slate-900 cursor-pointer rounded-full p-[6px]">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </span>
            <span className=" text-[14px] animated-underline cursor-pointer ">
              Show Live
            </span></div>
          </div>
        {/* </div> */}

        <div className="my-3  w-full h-[90px]  text-justify  ">
          <p className="whitespace-pre-wrap  line-clamp-4   ">
            Lor rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque dolores soluta optio error, impedit distinctio, vel
            aperiam sit.
          </p>
        </div>

        <div className=" w-full flex justify-between items-center mt-1 ">
          <span className="text-gray-400 font-medium">05 Jan, 2023</span>
          <div className=" scale-0 flex md:focus:scale-100 md:group-hover:scale-100 transition-scale linear  duration-500 group-hover:flex space-x-3 items-baseline">
          <i class="cursor-pointer text-2xl  fi fi-rs-trash"></i>
          <i class="cursor-pointer text-xl fi fi-rr-pencil"></i>
          </div>
          <i className=" flex items-center text-[28px] fi fi-rr-angle-double-small-right arrow"></i>
        </div>
      </div>


      <div className=" max-h-max w-[90vw] md:w-[80vw] max-w-[600px] border-2 border-white   rounded-lg  p-3 hover:scale-105 transition-all linear duration-500  group">
        {/* //todo title and link blovck */}
        {/* <div className="flex justify-between "> */}

          <div className="flex flex-col sm:flex-row justify-start items-center space-y-0  space-x-2  mb-2    ">
            <h3 className="bg-slate-900 group-hover:border-[1px] group-hover:border-white py-2 rounded-2xl px-3">
              title of your project you choose proct
            </h3>
   <div className="flex  justify-center md:justify-start     ">
    <span className=" hover:bg-slate-900 cursor-pointer rounded-full p-[6px]">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </span>
            <span className=" text-[14px] animated-underline cursor-pointer ">
              Show Live
            </span></div>
          </div>
        {/* </div> */}

        <div className="my-3  w-full h-[90px]  text-justify  ">
          <p className="whitespace-pre-wrap  line-clamp-4   ">
            Lor rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque dolores soluta optio error, impedit distinctio, vel
            aperiam sit.
          </p>
        </div>

        <div className=" w-full flex justify-between items-center mt-1 ">
          <span className="text-gray-400 font-medium">05 Jan, 2023</span>
          <div className=" scale-0 flex md:focus:scale-100 md:group-hover:scale-100 transition-scale linear  duration-500 group-hover:flex space-x-3 items-baseline">
          <i class="cursor-pointer text-2xl  fi fi-rs-trash"></i>
          <i class="cursor-pointer text-xl fi fi-rr-pencil"></i>
          </div>
          <i className=" flex items-center text-[28px] fi fi-rr-angle-double-small-right arrow"></i>
        </div>
      </div>


     


    </div>
  );
}

// <div className="h-[200px] w-[90vw] md:w-[80vw] max-w-[650px] hover:scale-105 cursor-pointer  bg-green-700 rounded-lg  p-3">
//         <div className="bg-red-800 w-full h-full flex flex-col justify-start items-start">
//           <h3 className=" " >title</h3>
//           <section className="flex justify-between  w-full   content-end">
//             <h3>02/01/23</h3>
//             <span>dsbh</span>
//           </section>
//         </div>
//</div>
