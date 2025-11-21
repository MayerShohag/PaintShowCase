import { GoBell } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";
import Search from "./Search";
import { CiFilter, CiUser } from "react-icons/ci";
import { useContext, useState } from "react";
import Aside from "../aside/Aside";
import { HiMiniXMark } from "react-icons/hi2";
import { LoginContext } from "../../contexts/ProfileContext";
const Header = () => {
     const [hamburger, setHamburger] = useState(false);
     const { user, isLogin } = useContext(LoginContext);
     let content = hamburger ? (
          <div className="rounded-r-xl w-50 absolute h-130 overflow-auto scrollbar-none left-0 top-13 bg-gray-900">
               <Aside />
          </div>
     ) : null;
     const handleHamburger = () => {
          setHamburger((prev) => !prev);
     };

     return (
          <>
               <section className="grid grid-cols-2 py-2 px-3 border-b border-gray-700 backdrop-blur-3xl">
                    <div className="flex items-center gap-3">
                         <div className="md:hidden">
                              {content}
                              {hamburger ? (
                                   <HiMiniXMark
                                        title="Cancel Filter"
                                        onClick={handleHamburger}
                                        className="text-2xl cursor-pointer"
                                   />
                              ) : (
                                   <CiFilter
                                        title="Filter Painting"
                                        onClick={handleHamburger}
                                        className="text-2xl cursor-pointer"
                                   />
                              )}
                         </div>
                         <div className="w-fit">
                              <h1 className="md:leading-3 leading-0 text-[10px] md:text-[15px]">
                                   <Link
                                        title="PaintShowCase"
                                        to="/"
                                        className="font-[Audiowide]"
                                   >
                                        <span className="text-xl font-bold md:text-3xl md:font-bold">
                                             Paint
                                        </span>
                                        <br />
                                        ShowCase
                                   </Link>
                              </h1>
                         </div>
                         <Search />
                    </div>

                    <div className="flex gap-2 items-center justify-end">
                         <div>
                              <Link
                                   title="Notifications"
                                   to="/notifications"
                                   className="flex hover:ring transition-all duration-200 hover:ring-gray-700 hover:text-white items-center gap-1 bg-[#1C1F26] p-2 rounded-xl"
                              >
                                   <GoBell className="text-lg md:text-2xl" />
                                   <span className=" md:text-xl text-sm">
                                        0
                                   </span>
                              </Link>
                         </div>

                         <div>
                              <Link
                                   title="Cart"
                                   to="/cart"
                                   className="flex hover:ring transition-all duration-200 hover:ring-gray-700 hover:text-white items-center gap-1 bg-[#1C1F26] p-2 rounded-xl"
                              >
                                   <IoCartOutline className="text-lg md:text-2xl" />
                                   <span className="md:text-xl text-sm">0</span>
                              </Link>
                         </div>
                         <div className="profile relative">
                              <Link
                                   to="/profile"
                                   title="Profile"
                                   className="flex hover:ring cursor-pointer transition-all duration-200 hover:ring-gray-700 hover:text-white items-center gap-2 bg-[#1C1F26] p-1 rounded-xl"
                              >
                                   {isLogin ? (
                                        <img
                                             src={user.avatar}
                                             className="w-9 h-9 rounded-lg object-cover"
                                             alt={user.name}
                                             title={user.name}
                                        />
                                   ) : (
                                        <CiUser className="text-lg md:text-2xl lg:text-[34px]" />
                                   )}
                              </Link>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Header;
