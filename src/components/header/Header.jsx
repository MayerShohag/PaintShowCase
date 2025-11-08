import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";
const Header = () => {
     return (
          <>
               <section className="grid grid-cols-2 py-2 px-3 border-b border-gray-700 backdrop-blur-3xl">
                    <div className="flex items-center gap-5">
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
                         <div className="md:w-90 md:h-12 hidden transition-all duration-200 md:flex md:items-center md:gap-2 md:px-3 md:bg-[#1C1F26] md:border md:border-transparent md:rounded-2xl focus-within:ring focus-within:ring-gray-700 focus-within:shadow-[3px_3px_5px_black]">
                              <CiSearch className="text-3xl text-gray-500" />
                              <input
                                   type="search"
                                   className="h-full w-full text-xl outline-none placeholder:text-xl placeholder:text-gray-500 placeholder:font-normal "
                                   placeholder="Search your loved paint"
                              />
                         </div>
                    </div>

                    <div className="flex gap-2 items-center justify-end">
                         <div>
                              <Link
                                   title="Notifications"
                                   to="/notifications"
                                   className="flex hover:ring transition-all duration-200 hover:ring-gray-700 hover:text-white items-center gap-1 bg-[#1C1F26] p-2 rounded-2xl"
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
                                   className="flex hover:ring transition-all duration-200 hover:ring-gray-700 hover:text-white items-center gap-1 bg-[#1C1F26] p-2 rounded-2xl"
                              >
                                   <IoCartOutline className="text-lg md:text-2xl" />
                                   <span className="md:text-xl text-sm">0</span>
                              </Link>
                         </div>
                         <div className="profile">
                              <Link
                                   to="/profile"
                                   title="Profile"
                                   className="flex hover:ring transition-all duration-200 hover:ring-gray-700 hover:text-white items-center gap-2 bg-[#1C1F26] px-2 py-1.5 rounded-2xl"
                              >
                                   <span className="md:text-xl hidden font-semibold sm:block">
                                        SK
                                   </span>
                                   <img
                                        src="/public/vite.svg"
                                        className="w-6 h-6 md:w-8 md:h-8 object-cover object-top rounded-lg "
                                        alt="user profile"
                                   />
                              </Link>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Header;
