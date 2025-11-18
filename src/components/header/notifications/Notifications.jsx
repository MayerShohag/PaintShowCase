import { Outlet } from "react-router";
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
                              <Outlet />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Notifications;
