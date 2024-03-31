import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { followUP_func, unfollow_func } from "./FollowModal_func";
import { followThePerson, unFollowThePerson } from "../../../Redux/loginSlice";

export default function FollowModal({ show, close, data }) {
  const dispatch = useDispatch();
  const userLoginDetails = useSelector((state) => state.login.userLoginDetails);
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
      showCloseIcon={true}
    >
      <div className="max-w-max sm:w-[400px]  bg-black overflow-y-auto rounded-lg px-3">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full px-2 py-3 text-sm md:text-lg flex items-center border-b-[1px] border-white"
            >
              <div className=" w-[90%] flex flex-col gap-0  cursor-pointer"><span>{item?.userIdentity}</span>
              <span className="text-xs">{item?.email}</span>
              </div>


                <button
                  onClick={async () => {
                    const result = await unfollow_func(
                      item.userIdentity,
                      item.email
                    );
                    if (result) {
                      console.log("result is ", result);
                      dispatch(unFollowThePerson(result))          
                    }
                  }}
                  type="button"
                  className=" ml-0 py-[5px] px-4  rounded-md  text-sm  font-semibold border-[1px] hover:bg-slate-700 border-white  "
                >
                  UnFollow
                </button>
          
              {/* {!text &&  <button
onClick={()=>dispatch( followThePerson(followUP_func(item.userIdentity,item.email)))}
                type="button"
                className=" ml-0 py-1 px-4  rounded-md  text-sm  font-semibold border-[1px] hover:bg-slate-700 border-white  "
              >
            follow    
              </button>  } */}
              <hr className="" />
            </div>
          );
        })}
        {/* </div>    */}
      </div>
    </Modal>
  );
}
