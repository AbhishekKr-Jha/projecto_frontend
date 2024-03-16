export const showInput=(index)=>{
const button=document.getElementById(`replyBtn${index}`)
const input= document.getElementById(`inputelem${index}`)
button.style.display = button.style.display === "none" ? "block" : "none";
input.style.display = input.style.display === "none" ? "flex" : "none";
}


// export const hideInput=(index)=>{
//     const button=document.getElementById(`replyBtn${index}`)
//     const input= document.getElementById(`inputelem${index}`)
//     button.style.display="block"
//     input.style.display="none"
// }