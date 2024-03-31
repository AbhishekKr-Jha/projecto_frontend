import toast from "react-hot-toast";

export const success = (text) => toast.success(text);

export const fail = (text) => toast.error(text);
