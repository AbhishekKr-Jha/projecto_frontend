// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// export const success=(text)=>toast.success(text, {
//         position: "top-center",
//         width:"50px", 
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: false,
//         progress: undefined,
//         theme: "dark",
//         });



// export const fail=(text)=>toast.error(text, {
//     position: "top-center",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: false,
//     progress: undefined,
//     theme: "dark",
//     });
    
import toast from "react-hot-toast";

export const success=(text)=>toast.success(text)

export const fail=(text)=>toast.error(text);
