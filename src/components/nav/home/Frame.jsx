import { useContext, useState } from "react";
import Products from "./Products";
import Reaction from "./reaction/Reaction";
import { OwnContext } from "../../../contexts/Context";
import { LoginContext } from "../../../contexts/ProfileContext";

const Frame = ({ products }) => {
     const [selectPaint, setSelectPaint] = useState(null);
     const { showModal, setShowModal } = useContext(OwnContext);
     const { user } = useContext(LoginContext);

     const handleSelectPaint = (paint) => {
          setSelectPaint(paint);
          setShowModal(true);
     };
     return (
          <>
               <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto lg:grid-cols-3 grid-flow-dense lg:gap-5 md:gap-2 gap-2 p-1 pt-2 md:p-4 lg:px-20 lg:py-10">
                    {products.map((paint) => (
                         <div
                              title={`Name: ${paint.paintName}\nArtist Name: ${user.name}\nPrice: $${paint.price}\nSize: ${paint.size}`}
                              key={paint.id}
                              className="w-full h-full relative rounded-b-[30px] rounded-t-[17px] lg:rounded-[17px_17px_33px_33px] border border-b-0 p-0 border-gray-700 lg:hover:scale-103 duration-150 transition-all"
                         >
                              <img
                                   className="w-full h-80 mb-2 cursor-zoom-in md:h-70 lg:h-100 object-cover rounded-t-2xl lg:rounded-t-2xl"
                                   src={paint.url}
                                   alt={paint.paintName}
                                   onClick={() => handleSelectPaint(paint)}
                              />
                              <div>
                                   <Reaction paint={paint}/>
                              </div>
                         </div>
                    ))}
               </div>
               <Products
                    paint={selectPaint}
                    show={showModal}
                    close={setShowModal}
               />
          </>
     );
};

export default Frame;
