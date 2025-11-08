import { Link } from "react-router";
import NotificationAside from "./NotificationAside";

const Notifications = () => {
     return (
          <>
               <div className="grid grid-cols-12 h-screen">
                    <div className="col-start-1 col-end-3">
                         <NotificationAside />
                    </div>
                    <div className="col-start-3 col-end-13 border-l border-gray-700 scrollbar-thin overflow-auto">
                         <div className="border my-10 border-gray-700 rounded-xl bg-white/3 max-w-[1000px] mx-auto">
                              <Link
                                   to=""
                                   className="flex items-center gap-4 hover:bg-white/5 transition-all duration-150 px-4 py-5"
                              >
                                   <div className="w-full">
                                        <div className="">
                                             <div className="flex items-start justify-between">
                                                  <img
                                                       src="/public/vite.svg"
                                                       alt="image"
                                                       className="w-12 h-12 rounded-md object-cover object-top"
                                                  />
                                                  <span className="text-sm text-white/40">
                                                       31 Oct 2025
                                                  </span>
                                             </div>
                                             <span>
                                                  Shohag Kumar shared a new post
                                                  on ReactTsx
                                             </span>
                                        </div>
                                        <div>
                                             <img
                                                  src="/public/vite.svg"
                                                  alt="image"
                                                  className="w-12 h-12 rounded-md object-cover object-top"
                                             />
                                             <p>
                                                  Form handling in react js: A
                                                  complete guide to controlled
                                                  vs uncontrolled components
                                             </p>
                                        </div>
                                   </div>
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Notifications;
