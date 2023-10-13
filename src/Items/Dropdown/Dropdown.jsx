import React from 'react'

export default function Dropdown() {
  return (
   <>
<div class="paste-button">
  <button class="d-button">Paste &nbsp; ▼</button>
  <div class="dropdown-content">
    <a id="top" href="/">Keep source formatting</a>
    <a id="middle" href="/">Merge formatting</a>
    <a id="bottom" href="/">Keep text only</a>
  </div>
</div>


   
   </>
  )
}
