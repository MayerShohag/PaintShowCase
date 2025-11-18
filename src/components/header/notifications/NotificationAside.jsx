import { GoBellFill } from "react-icons/go";
import { Link } from "react-router";

const NotificationAside = () => {
     return (
          <>
               <div>
                    <div className="lg:text-2xl md:text-xl flex items-center gap-1 border-b border-gray-700 font-semibold p-2">
                         <GoBellFill />
                         <span>Notifications</span>
                    </div>
                    <div className="">
                         <p className="text-xl px-3 py-1">Today</p>
                         <Link to="/notifications/today" className="flex flex-col gap-2">
                              <div className="border border-l-0 mr-2 rounded-r-lg bg-white/3 hover:bg-white/5 border-gray-700 p-2">
                                   <img className="w-12 h-12 object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwYm95fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" alt="" />
                                   <p>John Doe react your paint</p>
                              </div>
                         </Link>
                    </div>
               </div>
          </>
     );
};

export default NotificationAside;
