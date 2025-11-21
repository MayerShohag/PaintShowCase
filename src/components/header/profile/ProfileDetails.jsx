import { useContext } from "react";
import { AiOutlinePinterest, AiOutlineYoutube } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsFillPostcardHeartFill, BsFillReplyFill } from "react-icons/bs";
import { CgOrganisation, CgWebsite } from "react-icons/cg";
import { CiEdit, CiFacebook } from "react-icons/ci";
import {
     FaAddressCard,
     FaCreditCard,
     FaPen,
     FaQrcode,
     FaQuoteLeft,
     FaUser,
     FaUserPlus,
} from "react-icons/fa";
import { FaArrowTrendUp, FaPaintbrush } from "react-icons/fa6";
import { FiHash } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LuDot, LuLogOut, LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdFavorite, MdPrivacyTip } from "react-icons/md";
import { PiTiktokLogo } from "react-icons/pi";
import { RiAccountBoxFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";
import { LoginContext } from "../../../contexts/ProfileContext";

const ProfileDetails = ({ handleLogout }) => {
     const { user } = useContext(LoginContext);
     return (
          <div className="grid grid-cols-12 gap-5 my-5 mb-20 container mx-auto px-50">
               <div className="col-span-4 border border-gray-700 rounded-2xl p-2">
                    <div className="flex cursor-pointer items-center hover:bg-white/5 px-2 py-0 rounded-xl justify-between">
                         <div className="flex items-center gap-2">
                              <img
                                   className="w-10 h-10 object-cover rounded-lg"
                                   src={user.avatar}
                                   alt={user.name}
                              />
                              <div>
                                   <h1 className="text-xl font-bold">
                                        {user.name}
                                   </h1>
                                   <p>@{user.username}</p>
                              </div>
                         </div>
                         <LuSquareArrowOutUpRight />
                    </div>
                    <hr className="border-gray-700 my-2" />
                    <div>
                         <p className="px-2 py-1">Acounts Details</p>
                         <ul className="flex flex-col">
                              <Link
                                   to="/profile"
                                   className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl"
                              >
                                   <FaUser className="text-xl" />
                                   <span>Profile Details</span>
                              </Link>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <RiAccountBoxFill className="text-xl" />
                                   <span>Account</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaPaintbrush className="text-xl" />
                                   <span>Paint Preferences</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5   p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaQrcode className="text-xl" />
                                   <span>Appearance</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5   p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaUserPlus className="text-xl" />
                                   <span>Invite Friends</span>
                              </li>
                         </ul>
                    </div>
                    <hr className="border-gray-700 my-2" />
                    <div>
                         <p className="px-2 py-1">Feed & Settings</p>
                         <ul className="flex flex-col">
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaPen className="text-lg" />
                                   <span>General</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FiHash className="text-xl" />
                                   <span>Tags</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5   p-2 hover:text-white cursor-pointer rounded-xl">
                                   <BsFillPostcardHeartFill className="text-xl" />
                                   <span>Posts</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5   p-2 hover:text-white cursor-pointer rounded-xl">
                                   <BsFillReplyFill className="text-xl" />
                                   <span>Replies</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5   p-2 hover:text-white cursor-pointer rounded-xl">
                                   <MdFavorite className="text-xl" />
                                   <span>Liked</span>
                              </li>
                         </ul>
                    </div>
                    <hr className="border-gray-700 my-2" />
                    <div>
                         <p className="px-2 py-1">Billing & Monitization</p>
                         <ul className="flex flex-col">
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaAddressCard className="text-xl" />
                                   <span>Cards</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaCreditCard className="text-xl" />
                                   <span>Subscriptions</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <CgOrganisation className="text-xl" />
                                   <span>Organizations</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaArrowTrendUp className="text-xl" />
                                   <span>Ads dashboard</span>
                              </li>
                         </ul>
                    </div>
                    <hr className="border-gray-700 my-2" />
                    <div>
                         <p className="px-2 py-1">Help Center</p>
                         <ul className="flex flex-col">
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <MdPrivacyTip className="text-xl" />
                                   <span>Privacy</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <BiSupport className="text-xl" />
                                   <span>Support</span>
                              </li>
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaQuoteLeft className="text-xl" />
                                   <span>FAQ</span>
                              </li>
                         </ul>
                    </div>
                    <hr className="border-gray-700 my-2" />
                    <div
                         onClick={handleLogout}
                         className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl"
                    >
                         <LuLogOut />
                         <span>Log Out</span>
                    </div>
               </div>
               <div className="col-span-8 border border-gray-700 rounded-2xl p-3">
                    <div className="relative h-70">
                         <img
                              className="w-full h-full cursor-pointer hover:contrast-120 rounded-xl object-cover"
                              src={user.avatar}
                              title={user.name}
                              alt={user.name}
                         />
                         <div className="flex gap-4 px-5 ">
                              <img
                                   src={user.avatar}
                                   alt={user.name}
                                   title={user.username}
                                   className="w-50 h-50 rounded-full cursor-pointer absolute top-50 hover:contrast-120 shadow-2xl border-5 object-cover "
                              />
                              <div className="w-10/12 ml-55 mt-2">
                                   <div className="flex items-center justify-between w-full">
                                        <div>
                                             <h1 className="text-4xl font-bold">
                                                  {user.name}
                                             </h1>
                                             <Link
                                                  to="/profile"
                                                  className="hover:underline"
                                             >
                                                  @{user.username}
                                             </Link>
                                             <div className="flex items-center">
                                                  <Link
                                                       to="/profile"
                                                       className="hover:underline"
                                                  >
                                                       {user.followers}{" "}
                                                       followers
                                                  </Link>
                                                  <LuDot className="text-2xl" />
                                                  <Link
                                                       to="/profile"
                                                       className="hover:underline"
                                                  >
                                                       {user.following}{" "}
                                                       followings
                                                  </Link>
                                             </div>
                                             <div className="flex items-center gap-1">
                                                  <IoLocationOutline />
                                                  <span>{user.location}</span>
                                             </div>
                                        </div>
                                        <div className="bg-white/10 cursor-pointer hover:bg-white/15 hover:text-white px-3 flex items-center gap-1 text-xl py-2 rounded-lg">
                                             <CiEdit />
                                             <input
                                                  className="cursor-pointer"
                                                  type="button"
                                                  value="Edit"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <hr className="border-gray-700 my-2" />
                         <div className="">
                              <h1 className="text-2xl font-bold">About</h1>
                              <div className="bg-white/5 p-3 rounded-xl border border-gray-700 mt-2 max-h-53.5 overflow-auto scrollbar-none">
                                   <p className="text-lg">
                                        {user.bio} Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Aliquam
                                        corrupti ad consequatur omnis vitae
                                        neque modi impedit, optio adipisci sequi
                                        labore, necessitatibus sit doloribus
                                        aspernatur nihil. Sed doloribus nostrum
                                        illum nam quibusdam quod dolorum
                                        molestiae architecto magni. Animi nihil
                                        praesentium dolore quas harum maxime
                                        fuga qui similique a odit! Iusto
                                        explicabo deleniti quasi officiis illum
                                        atque quae porro illo quis? Sunt
                                        possimus quos aut autem qui odio quam!
                                        Tempora vel explicabo rerum aspernatur
                                        libero vero vitae quisquam maxime
                                        perspiciatis velit consequuntur quidem
                                        nisi laborum nemo, exercitationem odio
                                        ut incidunt? Animi voluptatum ducimus ab
                                        sequi perferendis exercitationem est
                                        debitis nesciunt. Dolor?
                                   </p>
                              </div>
                              <div className="mt-5">
                                   <h1 className="text-xl mb-2 font-bold">
                                        Social Links
                                   </h1>
                                   <div className="grid grid-cols-2 gap-2">
                                        <div className="border flex items-center px-2 rounded-xl border-gray-700">
                                             <AiOutlinePinterest className="text-4xl" />
                                             <input
                                                  type="text"
                                                  id="pinterest"
                                                  className="w-full py-2 px-2 text-xl outline-none"
                                                  placeholder="Pinterest profile link"
                                             />
                                        </div>
                                        <div className="border flex items-center px-2 rounded-xl border-gray-700">
                                             <AiOutlineYoutube className="text-4xl" />
                                             <input
                                                  type="text"
                                                  id="Youtube"
                                                  className="w-full py-2 px-2 text-xl outline-none"
                                                  placeholder="Youtube profile link"
                                             />
                                        </div>
                                        <div className="border flex items-center px-2 rounded-xl border-gray-700">
                                             <CiFacebook className="text-4xl" />
                                             <input
                                                  type="text"
                                                  id="Facebook"
                                                  className="w-full py-2 px-2 text-xl outline-none"
                                                  placeholder="Facebook profile link"
                                             />
                                        </div>
                                        <div className="border flex items-center px-2 rounded-xl border-gray-700">
                                             <RiTwitterXFill className="text-4xl" />
                                             <input
                                                  type="text"
                                                  id="X"
                                                  className="w-full py-2 px-2 text-xl outline-none"
                                                  placeholder="X profile link"
                                             />
                                        </div>
                                        <div className="border flex items-center px-2 rounded-xl border-gray-700">
                                             <PiTiktokLogo className="text-4xl" />
                                             <input
                                                  type="text"
                                                  id="TikTok"
                                                  className="w-full py-2 px-2 text-xl outline-none"
                                                  placeholder="TikTok profile link"
                                             />
                                        </div>
                                        <div className="border flex items-center px-2 rounded-xl border-gray-700">
                                             <CgWebsite className="text-4xl" />
                                             <input
                                                  type="text"
                                                  id="Your"
                                                  className="w-full py-2 px-2 text-xl outline-none"
                                                  placeholder="Your website link"
                                             />
                                        </div>
                                   </div>
                                   <div className="border mt-2 flex cursor-pointer bg-white/5 hover:bg-white/8 items-center justify-center px-2 rounded-xl border-gray-700">
                                        <GoPlus className="text-2xl" />
                                        <input
                                             type="button"
                                             value="Add more links"
                                             className="py-2 px-2 text-xl outline-none cursor-pointer"
                                             placeholder="Your website link"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfileDetails;
