import { IoCartOutline } from "react-icons/io5";
import { SlDislike, SlLike } from "react-icons/sl";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { TfiCommentAlt } from "react-icons/tfi";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { LoginContext } from "../../../../contexts/ProfileContext";

const Reaction = ({ paint }) => {
     const { setSelectCart } = useContext(CartContext);
     const { user, setUser } = useContext(LoginContext);
     const handleCart = (paint) => {
          setSelectCart((prev) => [...prev, paint]);
     };
     return (
          <>
               <div className="border border-t-0 mx-auto border-gray-700 rounded-full shadow-[inset_-8px_-8px_20px_white]/8 hover:shadow-[inset_8px_8px_20px_white]/10 bg-black/20 mt-1 md:mt-2 lg:p-3 p-2 flex justify-between">
                    <button className="p-2 rounded-full flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <SlLike title="Like" />
                    </button>
                    <button className="p-2 rounded-full flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <SlDislike title="Dislike" />
                    </button>
                    <button className="p-2 rounded-full flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <TfiCommentAlt title="Comment" />
                    </button>
                    <button className="p-2 rounded-full flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white">
                         <PiBookmarkSimpleLight title="Bookmark" />
                    </button>
                    <button
                         onClick={() => {
                              handleCart(paint);
                              setUser({ ...user, cart: user.cart + 1 });
                         }}
                         className="p-2 rounded-full flex items-center cursor-pointer hover:bg-white/10 transition-all duration-150 text-2xl hover:text-white"
                    >
                         <IoCartOutline title="Add to Cart" />
                    </button>
               </div>
          </>
     );
};

export default Reaction;
