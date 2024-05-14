import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { followUP_func, unfollow_func } from "./FollowModal_func";
import { followThePerson, unFollowThePerson } from "../../../Redux/loginSlice";

export default function FollowModal({ show, close, data,text,email }) {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.login.userLoginDetails.email);
  
  console.log("the data is",data)
  const follow = async (userName, email) => {
    const result = await followUP_func(userName, email);
    if (result) {
      dispatch(followThePerson(result));
      console.log("follow is running");
    }
  };

  const unFollow = async (userName, email) => {
    const result = await unfollow_func(userName, email);
    if (result) {
      console.log("unfollow is running");
      dispatch(unFollowThePerson(result));
    }
  };
  return (
    <Modal
      styles={{
        modal: {
          backgroundColor: "black",
          border: "2px solid grey",
          borderRadius: "12px",
        },
        root: { margin: "98px 0" },
      }}
      open={show}
      onClose={close}
      center
      showCloseIcon={false}
    >
      <div className="w-[75vw]  sm:w-[400px]  bg-black overflow-y-auto rounded-lg px-3">
        { data.length>0? 
       ( data?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full px-2 py-3 text-sm md:text-lg flex items-center border-b-[1px] border-white"
            >
              <div className=" w-[90%] flex flex-col gap-0  cursor-pointer">
                <span>{item?.userIdentity}</span>
                <span className="text-xs">{item?.email}</span>
              </div>

            {email===userEmail &&  <button
                onClick={() =>
                  item.userStatus
                    ? unFollow(item?.userIdentity, item?.email)
                    : follow(item?.userIdentity, item?.email)
                }
                type="button"
                className=" ml-0 py-[5px] px-4  rounded-md  text-sm  font-semibold border-[1px] hover:bg-slate-700 border-white  "
              >
                {/* {console.log("the userstatyus valu eid ",item.userStatus)} */}
                {item.userStatus ? "UnFollow" : "Follow"}
              </button>}

              <hr className="" />
            </div>
          );
        })):(<span className="w-full text-md flex justify-center">Currently you have 0 {text}</span>)
      }
        {/* </div>    */}
      </div>
    </Modal>
  );
}
