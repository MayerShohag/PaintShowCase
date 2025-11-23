import { useContext } from "react";
import { LoginContext } from "../../../contexts/ProfileContext";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuDot } from "react-icons/lu";
import Profile from "../profile/Profile";

const Notifications = () => {
     const { user, isLogin } = useContext(LoginContext);
     return (
          <>
               {isLogin ? (
                    <div className="max-w-[1014px] mx-auto border border-gray-700 border-t-0">
                         <h1 className="p-4 text-3xl font-bold">
                              Notifications
                         </h1>
                         <div className="">
                              <h2 className="border-y border-gray-700 bg-white/5  p-4 text-gray-300 text-2xl font-bold">
                                   Today
                              </h2>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Your painting, "Crimson
                                                       Sunset," sold for $1,200!
                                                       💰
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Liked your comment on the
                                                       'Oil Painting Tutorial:
                                                       Blending Techniques'
                                                       video. 👍
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Your listing for the
                                                       'Starry Night'
                                                       reproduction expires
                                                       soon. ⏳
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Your painting, "Crimson
                                                       Sunset," sold for $1,200!
                                                       💰
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* yesterday */}
                         <div className="">
                              <h2 className="border-y border-gray-700 bg-white/5  p-4 text-gray-300 text-2xl font-bold">
                                   Yesterday
                              </h2>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Your painting, "Crimson
                                                       Sunset," sold for $1,200!
                                                       💰
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Liked your comment on the
                                                       'Oil Painting Tutorial:
                                                       Blending Techniques'
                                                       video. 👍
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Your listing for the
                                                       'Starry Night'
                                                       reproduction expires
                                                       soon. ⏳
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                              <div className="border-b cursor-pointer border-gray-700 hover:bg-white/6 p-2 ">
                                   <div className="flex py-2 justify-between items-center">
                                        <div className="flex items-start gap-3">
                                             <div>
                                                  <img
                                                       src={user.avatar}
                                                       className="w-11 h-11 object-cover rounded-lg"
                                                       alt={user.name}
                                                  />
                                             </div>
                                             <div>
                                                  <div className="flex items-center">
                                                       <span className="hover:underline cursor-pointer text-gray-300 font-bold">
                                                            {user.name}
                                                       </span>
                                                       <LuDot />
                                                       <span className="hover:underline cursor-pointer">
                                                            @{user.username}
                                                       </span>
                                                  </div>
                                                  <p>
                                                       Your painting, "Crimson
                                                       Sunset," sold for $1,200!
                                                       💰
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-white/30">
                                                  23 Nov 2025
                                             </p>
                                             <HiOutlineDotsVertical className="cursor-pointer hover:bg-white/10 rounded text-2xl p-1" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               ) : (
                    <Profile />
               )}
          </>
     );
};

export default Notifications;
