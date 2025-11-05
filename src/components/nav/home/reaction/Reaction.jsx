import { LiaAwardSolid } from "react-icons/lia";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { SlDislike, SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
const Reaction = () => {
     return (
          <>
               <div className="reaction border mx-auto border-gray-700 rounded-2xl mt-5 p-3 flex gap-5 justify-between">
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <SlLike title="Like" />
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <SlDislike title="Dislike" />
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <TfiCommentAlt title="Comment" />
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <PiBookmarkSimpleLight title="Bookmark" />
                    </button>
                    <button className="p-2 rounded-xl flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <LiaAwardSolid title="Award" />
                    </button>
               </div>
          </>
     );
};

export default Reaction;
