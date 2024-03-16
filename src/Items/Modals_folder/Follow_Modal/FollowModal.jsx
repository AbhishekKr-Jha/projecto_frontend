import { Modal } from '@mui/material'



export default function FollowModal({show,close}) {
  return (

       <Modal
        open={show}
        onClose={close}
        center 
      >

{/* <div className="w-[30%] sm:w-[400px] h-[20vh] bg-black overflow-y-auto rounded-lg px-5 border-2 border-white"> */}
      { ["anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com","anurag@gmail.com"].map((item,index)=>{
        return <div key={index} className="px-2 py-3 text-sm md:text-lg flex items-center border-b-[1px] border-white">
        <span className='cursor-pointer' >{item}</span> <button type="button" className=' ml-0 py-1 px-4  rounded-md  text-sm  font-semibold border-[1px] hover:bg-slate-700 border-white  '>Follow</button> 
        <hr className='' />
               </div>
      }) }

        {/* </div>    */}

      </Modal>


   
  )
}


