import React from 'react'
import image from '../Image.svg'

export default function Hero1() {
  return (
   <>
   <div className=" element-Wrapper flex hero-Box">
<div className=" hero-left-section">
  <h4>Now showcase<br />your projects <br />to everyone easily!</h4>
  <h1 className='animated-underline'>PROJECTO</h1>
  <h2 className=''>Your project presentor</h2>
</div>
<div className=" flex hero-right-section">
<img src={image} alt="loading..." />
</div>
</div>
    
   
   </>
  )
}
