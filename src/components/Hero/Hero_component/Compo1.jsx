import React from 'react'
// import Lottie from "lottie-react";

export default function Compo1({animation,para,heading,order,text_align}) {
  return (
    <> 
   <div className="w-full mx-auto px-6 md:px-12  flex flex-col md:flex-row justify-between  mb-24 ">
<img className='w-[82%]  sm:w-[60%] md:w-[40%] max-w-[500px]  relative z-[38] a4-border' src={animation} alt="load..."  />
{/* <Lottie className= "   w-[88%]  sm:w-[60%] md:w-[50%] lg:w-[500px]  relative z-[38] a4-border "  animationData={animation} /> */}
<div className={`text-center   ${text_align} md:w-[60%]  ${order}`}>
  <h3 className="  text-[8vw]  sm:text-5xl md:text-[42px] xl:text-7xl  font-semibold font-[raw]  tracking-wider ">{heading}</h3>
  <p className="text-justify sm:w-[85%]  max-w-[370px]" >{para}</p>
</div>
</div>
{/* -mt-20 md:-mt-0 */}
         
    </>
  )

}

Compo1.defaultProps = { 
  order:"order-2",
  text_align:"md:text-left",
}
   