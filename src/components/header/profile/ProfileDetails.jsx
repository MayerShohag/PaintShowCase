import { BiSupport } from "react-icons/bi";
import { BsFillPostcardHeartFill, BsFillReplyFill } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
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
import { LuLogOut, LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdFavorite, MdPrivacyTip } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";

const ProfileDetails = ({ setIsLogin }) => {
     return (
          <div className="grid grid-cols-12 gap-5 my-5 mb-20 container mx-auto px-50">
               <div className="col-span-4 border border-gray-700 rounded-2xl p-2">
                    <div className="flex cursor-pointer items-center hover:bg-white/5 px-2 py-1 rounded-xl justify-between">
                         <div className="flex items-center gap-2">
                              <img
                                   className="w-10 h-10 object-cover rounded-xl"
                                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                   alt=""
                              />
                              <div>
                                   <h1>name</h1>
                                   <p>username</p>
                              </div>
                         </div>
                         <LuSquareArrowOutUpRight />
                    </div>
                    <hr className="border-gray-700 my-2" />
                    <div>
                         <p className="px-2 py-1">Acounts Details</p>
                         <ul className="flex flex-col">
                              <li className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl">
                                   <FaUser className="text-xl" />
                                   <span>Profile Details</span>
                              </li>
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
                         onClick={() => setIsLogin(false)}
                         className="flex items-center gap-2 hover:bg-white/5  p-2 hover:text-white cursor-pointer rounded-xl"
                    >
                         <LuLogOut />
                         <span>Log Out</span>
                    </div>
               </div>
               <div className="col-span-8 border border-gray-700 rounded-2xl p-3">
                    <p>profile</p>
               </div>
          </div>
     );
};

export default ProfileDetails;
