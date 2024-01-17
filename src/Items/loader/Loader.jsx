import React from 'react'
import './Loader.css'

export default function Loader({text}) {
  return (
   <>
   <div classNameName='flexC justify-start relative ' > 
   <div className="banter-loader ">
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
<h3 className='mt-14 text-3xl'>Verifying {text}...</h3>
</div>
   </>
  )
}
