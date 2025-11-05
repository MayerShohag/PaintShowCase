import { BsReply } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { SlDislike, SlLike } from "react-icons/sl";

const CommentReact = () => {
     return (
          <>
               <div className="reaction flex gap-3 w-fit rounded-xl">
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <SlLike title="Like" />
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <SlDislike title="Dislike" />
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <BsReply title="Reply"/>
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <CiMenuKebab />
                    </button>
               </div>
          </>
     );
};

export default CommentReact;
