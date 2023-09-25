import React from 'react'
// import search from './search.svg'
import NoResult from './NoResult.svg'
import '../../Items/Search_icon.css'




export default function EmailSearch() {
  return (
   <>
   
   <div className=" flexC element-Wrapper  search-Container" style={{gap:"20px"}}>
   <h1>Enter Email to search for Projects</h1> 
    <div className=" flex box-wrapper serach-Box" style={{gap:"15px"}} >
          
     
       <input  type="email"  id="email" name="email" placeholder="E-mail address" required autocomplete="off"/>
       <button class="search_button">
  <span class="search_span">🔎</span>
</button>
       </div>
 <div className="noResult_img">
    <img width="120px"  src={NoResult} alt="loading..."/>
 </div>
        
        
      
   </div>
   
   </>
  )
}
