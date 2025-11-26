import { useContext } from "react";
import Frame from "./Frame";
import { OwnContext } from "../../../contexts/Context";
import Aside from "../../aside/Aside";

const Home = () => {
     const { products } = useContext(OwnContext);
     return (
          <>
               <div className="grid grid-cols-12">
                    <div className="hidden md:block md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-3 h-screen overflow-auto scrollbar-none">
                         <Aside />
                    </div>

                    <div className="col-span-12 md:col-start-4 h-screen overflow-auto scroll-smooth scrollbar-thin lg:col-start-3 md:border-l pb-5 lg:col-end-13 border-gray-700 md:col-span-12">
                         <Frame products={products} />
                    </div>
               </div>
          </>
     );
};

export default Home;
