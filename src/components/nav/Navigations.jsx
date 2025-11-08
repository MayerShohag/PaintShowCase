import { FaHandshake, FaPeopleCarry } from "react-icons/fa";
import { GoHomeFill, GoPlus } from "react-icons/go";
import { MdGroups, MdOutlineMiscellaneousServices } from "react-icons/md";
import { PiBrainFill } from "react-icons/pi";
import { Link } from "react-router";

const Navigations = () => {
     return (
          <>
               <div className="grid grid-cols-12 border-b items-center border-gray-700">
                    <div className="md:p-2 p-1.5 text-center col-start-1 col-end-3 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-3">
                         <Link
                              to="/post"
                              className="border hover:border-transparent flex items-center justify-center gap-1 transition-all duration-150 w-full border-gray-700 rounded-lg py-2 text-xl font-bold bg-linear-to-r from-white/2 to-white/10 hover:bg-blue-600 hover:text-white "
                         >
                              <GoPlus className="md:text-2xl text-lg" />
                              <span className="hidden md:block">Post</span>
                         </Link>
                    </div>
                    <div className="col-start-3 col-end-13 md:col-start-4 md:col-end-13 lg:col-start-3 lg:col-end-13 border-l border-gray-700">
                         <div className="flex gap-2 text-nowrap lg:justify-center md:p-3 p-1.5 overflow-auto scrollbar-none">
                              <Link
                                   title="home"
                                   to="/"
                                   className="border flex items-center focus-within:bg-white/10 focus-within:text-white cursor-pointer hover:border-transparent border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                              >
                                   <div className="flex items-center gap-1">
                                        <GoHomeFill className="md:text-lg text-sm" />
                                        <span className="md:text-lg text-sm">Home</span>
                                   </div>
                              </Link>
                              <Link
                                   title="exhibitions"
                                   to="/exhibitions"
                                   className="border flex items-center focus-within:bg-white/10 focus-within:text-white cursor-pointer hover:border-transparent border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                              >
                                   <div className="flex items-center gap-1">
                                        <FaPeopleCarry className="md:text-lg text-sm" />
                                        <span className="md:text-lg text-sm">Exhibitions</span>
                                   </div>
                              </Link>
                              <Link
                                   title="collaborations"
                                   to="/collaborations"
                                   className="border flex items-center focus-within:bg-white/10 focus-within:text-white cursor-pointer hover:border-transparent border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                              >
                                   <div className="flex items-center gap-1">
                                        <FaHandshake className="md:text-lg text-sm" />
                                        <span className="md:text-lg text-sm">Collaborations</span>
                                   </div>
                              </Link>
                              <Link
                                   title="inspirations"
                                   to="/inspirations"
                                   className="border flex items-center focus-within:bg-white/10 focus-within:text-white cursor-pointer hover:border-transparent border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                              >
                                   <div className="flex items-center gap-1">
                                        <PiBrainFill className="md:text-lg text-sm" />
                                        <span className="md:text-lg text-sm">Inspirations</span>
                                   </div>
                              </Link>
                              <Link
                                   title="services"
                                   to="/services"
                                   className="border flex items-center focus-within:bg-white/10 focus-within:text-white cursor-pointer hover:border-transparent border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                              >
                                   <div className="flex items-center gap-1">
                                        <MdOutlineMiscellaneousServices className="md:text-lg text-sm" />
                                        <span className="md:text-lg text-sm">Services</span>
                                   </div>
                              </Link>
                              <Link
                                   title="about"
                                   to="/about"
                                   className="border flex items-center focus-within:bg-white/10 focus-within:text-white cursor-pointer hover:border-transparent border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg"
                              >
                                   <div className="flex items-center gap-1">
                                        <MdGroups className="md:text-lg text-sm" />
                                        <span className="md:text-lg text-sm">About</span>
                                   </div>
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Navigations;
