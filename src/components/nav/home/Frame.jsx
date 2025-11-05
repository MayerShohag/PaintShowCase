import { useState } from "react";
import Products from "./Products";

const Frame = ({ products }) => {
     const [selectPaint, setSelectPaint] = useState(null);
     const [showModal, setShowModal] = useState(false);

     const handleSelectPaint = (paint) => {
          setSelectPaint(paint);
          setShowModal(true);
     };
     return (
          <>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-5 px-5 py-5 lg:px-20 lg:py-10">
                    {products.map((paint) => (
                         <div
                              title={paint.paintName}
                              key={paint.id}
                              className="w-full h-full relative hover:border-white/50 hover:shadow-[inset_-8px_-8px_20px_white]/10 rounded-xl border p-3 border-gray-700 hover:scale-105 duration-150 transition-all"
                         >
                              <img
                                   className="w-full h-100 object-cover rounded-md "
                                   src={paint.url}
                                   alt={paint.paintName}
                              />
                              <div className="mt-1 text-nowrap overflow-hidden">
                                   <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold">
                                             {paint.painterName}
                                        </span>
                                        <span className="text-xl font-bold">
                                             ${paint.price}
                                        </span>
                                   </div>
                                   <div className="my-1">
                                        <span className="text-xl font-semibold">
                                             {paint.paintName}
                                        </span>
                                   </div>
                                   <div className="flex items-center justify-between">
                                        <span className="text-sm text-white/50">
                                             {paint.location}
                                        </span>
                                        <span className="text-sm text-white/50">
                                             {paint.size}
                                        </span>
                                   </div>
                              </div>
                              <button
                                   onClick={() => handleSelectPaint(paint)}
                                   className="w-full border mt-2 transition-all duration-150 hover:shadow-[inset_3px_3px_10px_white]/10 hover:text-white/80 cursor-pointer py-1 rounded-md border-gray-700"
                              >
                                   View Details
                              </button>
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
