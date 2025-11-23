import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router";

const MiniProfile = ({ paint, user }) => {
     return (
          <>
               <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <div className="w-12 h-12" title={user.name}>
                              <Link to={`/${user.username}`}>
                                   <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-full object-cover object-top h-full rounded-xl"
                                   />
                              </Link>
                         </div>
                         <div className="flex flex-col">
                              <div>
                                   <Link to={`/${user.username}`}>
                                        <span className="text-sm hover:text-gray-50 text-gray-300 font-bold">
                                             {user.name}
                                        </span>
                                        <span> •</span>
                                        <span className="hover:text-gray-200">
                                             <span> @</span>
                                             {user.username}
                                        </span>
                                        <span> •</span>
                                   </Link>
                                   <span> {paint.date}</span>
                              </div>
                              <div className="flex gap-2">
                                   <span className="bg-gray-800 rounded-full p-1" title="reputation">
                                        <AiOutlineThunderbolt />
                                   </span>
                                   <span className="font-semibold hover:underline" title="reputation">{user.followers}</span>
                                   <span>•</span>
                                   <button className="w-fit bg-gray-800 px-1 rounded-md">
                                        {paint.content || "Admin"}
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="flex items-center gap-2">
                         <div>
                              <Link
                                   to="/"
                                   className="flex items-center gap-2 border hover:text-white border-gray-700 hover:bg-white/10 hover:border-transparent duration-150 rounded-lg px-2 py-1"
                              >
                                   <BsBoxArrowUpRight />
                                   <p> Repost</p>
                              </Link>
                         </div>
                         <div className="">
                              <button className="border border-gray-700 hover:text-white cursor-pointer hover:bg-white/10 duration-150 hover:border-transparent rounded-lg p-2">
                                   <CiMenuKebab />
                              </button>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default MiniProfile;
