import React from 'react'
// import search from './search.svg'
import NoResult from './NoResult.svg'
import '../../Items/Search_icon.css'




export default function EmailSearch() {
  return (
   <>
   
   <div className=" flexC element-Wrapper lg:pt-[55px]" style={{gap:"20px"}}>
   <h1 className='text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px]'>Enter Email to search for Projects</h1> 
    <div className=" flex box-wrapper serach-Box" style={{gap:"15px"}} >
          
     
       <input  className='input w-[85vw] md:w-[400px] mb-2' type="email"  id="email" name="email" placeholder="E-mail address" required autocomplete="off"/>
       <button class="search_button">
  <span class="search_span">🔎</span>
</button>
       </div>
 <div className="noResult_img hidden">
    <img width="120px"  src={NoResult} alt="loading..."/>
 </div>
        
        
      
   </div>
   
   </>
  )
}
