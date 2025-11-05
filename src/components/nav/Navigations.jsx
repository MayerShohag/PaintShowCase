import { FaHandshake, FaPeopleCarry } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdGroups, MdOutlineMiscellaneousServices } from "react-icons/md";
import { PiBrainFill } from "react-icons/pi";
import { Link } from "react-router";

const Navigations = () => {
     return (
          <>
               <div className="flex gap-2 text-nowrap lg:justify-center border-b border-gray-700 p-3 overflow-auto scrollbar-none">
                    <Link
                         title="home"
                         to="/"
                         className="border  focus-within:bg-white/10 focus-within:text-white cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                    >
                         <div className="flex items-center gap-1">
                              <GoHomeFill className="text-lg"/>
                              <span>Home</span>
                         </div>
                    </Link>
                    <Link
                         title="exhibition"
                         to="/exhibition"
                         className="border  focus-within:bg-white/10 focus-within:text-white cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                    >
                         <div className="flex items-center gap-1">
                              <FaPeopleCarry className="text-lg"/>
                              <span>Exhibition</span>
                         </div>
                    </Link>
                    <Link
                         title="collaboration"
                         to="/collaboration"
                         className="border  focus-within:bg-white/10 focus-within:text-white cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                    >
                         <div className="flex items-center gap-1">
                              <FaHandshake className="text-lg"/>
                              <span>Collaboration</span>
                         </div>
                    </Link>
                    <Link
                         title="inspiration"
                         to="/inspiration"
                         className="border  focus-within:bg-white/10 focus-within:text-white cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                    >
                         <div className="flex items-center gap-1">
                              <PiBrainFill className="text-lg"/>
                              <span>Inspiration</span>
                         </div>
                    </Link>
                    <Link
                         title="services"
                         to="/services"
                         className="border  focus-within:bg-white/10 focus-within:text-white cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                    >
                         <div className="flex items-center gap-1">
                              <MdOutlineMiscellaneousServices className="text-lg"/>
                              <span>Services</span>
                         </div>
                    </Link>
                    <Link
                         title="about"
                         to="/about"
                         className="border  focus-within:bg-white/10 focus-within:text-white cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                    >
                         <div className="flex items-center gap-1">
                              <MdGroups className="text-lg"/>
                              <span>About</span>
                         </div>
                    </Link>
               </div>
          </>
     );
};

export default Navigations;
