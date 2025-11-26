import { IoCartOutline } from "react-icons/io5";
import { VscGoToEditingSession } from "react-icons/vsc";
import { Link } from "react-router";

const InitialCart = () => {
     return (
          <div className="flex flex-col justify-center items-center h-full mt-30">
               <IoCartOutline className="text-6xl" />
               <p className="text-3xl font-bold my-3">Your Cart is empty.</p>
               <Link
                    className="border mt-5 px-5 border-gray-700 rounded-xl hover:bg-white/10 duration-150 hover:border-transparent flex items-center gap-1 py-2 text-lg "
                    to="/"
               >
                    <VscGoToEditingSession />
                    <span>Browse Paint</span>
               </Link>
          </div>
     );
};

export default InitialCart;
