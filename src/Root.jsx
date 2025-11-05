import { Outlet } from "react-router";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Navigations from "./components/nav/Navigations";
import Context from "./contexts/Context";

const Root = () => {
     return (
          <div className="bg-[#0e1217] text-[#A8B3CF] grid grid-cols-12 mx-auto relative">
               <Context>
                    <header className="col-span-full sticky top-0 z-10">
                         <Header />
                    </header>
                    <aside className="hidden md:block md:col-start-1 md:col-end-4 lg:col-start-1  lg:col-end-3 h-screen overflow-auto scrollbar-none">
                         <Aside />
                    </aside>
                    <main className="col-span-12 md:col-start-4 h-screen overflow-auto scroll-smooth scrollbar-thin lg:col-start-3 lg:col-end-13 md:border-l border-gray-700 md:col-span-12">
                         <Navigations />
                         <Outlet />
                    </main>
               </Context>
          </div>
     );
};

export default Root;
