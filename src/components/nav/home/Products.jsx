import { IoCloseOutline } from "react-icons/io5";
import Reaction from "./reaction/Reaction";
import Comment from "./reaction/Comment";
import CommentSection from "./reaction/CommentSection";
import MiniProfile from "../../miniprofile/MiniProfile";
import { LoginContext } from "../../../contexts/ProfileContext";
import { useContext } from "react";

const Products = ({ paint, show, close }) => {
     const { user } = useContext(LoginContext);
     if (!show) return null;
     return (
          <>
               <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
                    <div className="bg-black/80 rounded-xl border border-gray-700 overflow-auto scrollbar-none p-4 w-250 h-screen relative ">
                         <button
                              className="absolute top-2 right-2 text-white/70 hover:text-white cursor-pointer hover:bg-white/10 p-1 rounded-md"
                              onClick={() => close(false)}
                         >
                              <IoCloseOutline className="text-xl" />
                         </button>

                         {/* sections starts  */}
                         <div className="grid grid-cols-12">
                              {/* 1st section  */}
                              <div className="col-span-8 pr-4 border-r border-gray-700">
                                   <MiniProfile paint={paint} user={user} />
                                   <hr className="my-4 border-0.5 border-gray-700 " />

                                   <div>
                                        <div className="w-fit mx-auto h-fit my-5">
                                             <img
                                                  src={paint.url}
                                                  title={
                                                       paint.paintName +
                                                       " " +
                                                       paint.size
                                                  }
                                                  className="w-full object-contain object-top-left h-full rounded-xl"
                                                  alt={paint.paintName}
                                             />
                                        </div>

                                        <Reaction paint={paint} />
                                        <hr className="my-5 border-0.5 border-gray-700 " />
                                        <Comment paint={paint} user={user} />

                                        {/* other comments */}
                                        <div className="h-180 overflow-auto scrollbar-none">
                                             <CommentSection paint={paint} />
                                             <CommentSection paint={paint} />
                                             <CommentSection paint={paint} />
                                             <CommentSection paint={paint} />
                                        </div>
                                   </div>
                              </div>

                              {/* 2nd section  */}
                              <div className="col-span-4">
                                   <section className="description border-gray-700 pl-4 relative">
                                        <section>
                                             <div>
                                                  <h1 className="text-2xl my-4 font-bold text-center">
                                                       Paint Details
                                                  </h1>
                                             </div>
                                             <hr className=" border-0.5 border-gray-700 " />
                                             <section className="art-detail">
                                                  <div className="border border-gray-700 mt-3 mb-5 rounded-xl p-3">
                                                       <p className="text-xl font-bold text-center">
                                                            {paint.painterName}
                                                       </p>
                                                       <p className="text-lg font-normal">
                                                            Location:{" "}
                                                            {paint.location}
                                                       </p>
                                                       <p className="text-lg font-normal">
                                                            Category:{" "}
                                                            {paint.category}
                                                       </p>
                                                       <p className="text-lg font-normal">
                                                            Size: {paint.size}
                                                       </p>
                                                       <p className="text-2xl font-bold mt-4">
                                                            <span>
                                                                 Price: $
                                                                 {paint.price}
                                                            </span>
                                                       </p>
                                                       <button className="w-full border mt-2 text-xl duration-150 hover:border-transparent border-gray-700 rounded-md py-2 bg-linear-to-r from-white/10 to-white/2 hover:bg-blue-600 cursor-pointer hover:text-white">
                                                            Purchase
                                                       </button>
                                                  </div>

                                                  <details className="border border-gray-700 mt-3 mb-5 transition-all duration-150 hover:bg-white/5 px-3 py-2 rounded-xl">
                                                       <summary className="font-semibold cursor-pointer text-xl">
                                                            Description
                                                       </summary>
                                                       <hr className="my-2 border-0.5 border-gray-700 " />

                                                       <div className="text-lg p-2">
                                                            <p className="h-78 overflow-auto scrollbar-thin">
                                                                 Lorem ipsum
                                                                 dolor sit amet
                                                                 consectetur
                                                                 adipisicing
                                                                 elit. Nulla
                                                                 sint eligendi
                                                                 aliquid,
                                                                 accusamus sed
                                                                 illum fuga
                                                                 voluptate
                                                                 beatae iure
                                                                 esse doloremque
                                                                 eius incidunt
                                                                 hic voluptas?
                                                                 Ex rerum, nisi
                                                                 expedita
                                                                 consequuntur
                                                                 necessitatibus
                                                                 enim quisquam
                                                                 dolore dolor
                                                                 itaque quaerat
                                                                 aut dicta
                                                                 laborum commodi
                                                                 eligendi
                                                                 excepturi quis
                                                                 repudiandae!
                                                                 Sit praesentium
                                                                 provident ut
                                                                 natus!
                                                            </p>
                                                       </div>
                                                  </details>
                                             </section>
                                        </section>
                                   </section>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Products;
