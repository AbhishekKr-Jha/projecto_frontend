import React, { useState } from 'react'

export default function CheckConnection({visibility}) {
    const [loadingText,setLoadingText]=useState("Connecting to server...")
    setTimeout(() => {
        setLoadingText("Server is taking too long to connect...")
    }, 5000); 
  return (
    // <div className='flex gap-0 absolute top-16 sm:top-20 left-[30px] text-sm sm:text-lg'>
    <div className="">
      <div class="flex-col  w-full flex items-center justify-center">
  <div class="w-8 h-8 sm:w-10 sm:h-10 border-4 text-blue-400  animate-spin border-white flex items-center justify-center border-t-black rounded-full">
  </div>
</div>
{visibility && <p className='my-2'>{loadingText}</p>}
</div>
// {/* <p className="-mx-6">{loadingText}</p> */}
//     // </div>
  )
}
