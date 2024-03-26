import React, { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({text}) {
  const [changeText,setChangeText]=useState(false)
  useEffect(() => {
   setTimeout(() => {
    setChangeText(true)
   }, 5000);
  },[])
  
  return (
   <>
   <div className='h-screen relative flex  justify-center items-center' > 
   <div className="banter-loader">
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
</div>
<p className='mt-28 text-2xl md:text-3xl text-center'>{changeText?"Server is taking too long ...":text}</p>

</div>
   </>
  )
}
