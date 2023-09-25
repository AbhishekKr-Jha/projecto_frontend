import React from 'react'
import './Loader.css'

export default function Loader({text}) {
  return (
   <>
   <div classNameName='flexC ' style={{gap:"250px"}}> 
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
<h3 className='m-5'>Verifying {text}...</h3>
</div>
   </>
  )
}
