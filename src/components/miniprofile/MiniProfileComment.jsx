import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router";

const MiniProfileComment = ({paint}) => {
     return (
          <>
               <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <div className="w-12 h-12" title={paint.painterName}>
                              <Link to="/mayershohag">
                                   <img
                                        src={paint.url}
                                        alt={paint.paintName}
                                        className="w-full object-cover object-top h-full rounded-xl"
                                   />
                              </Link>
                         </div>
                         <div className="flex flex-col">
                              <div>
                                   <Link to="/mayershohag">
                                        <span className="text-sm hover:text-gray-200 font-bold">
                                             {paint.painterName}
                                        </span>
                                        <span className="hover:text-gray-200">
                                             <span> @</span>
                                             {paint.painterName}
                                        </span>
                                        <span> •</span>
                                   </Link>
                                   <span> 31 oct 2025</span>
                              </div>
                              <div className="flex gap-2">
                                   <span className="bg-gray-800 rounded-full p-1">
                                        <AiOutlineThunderbolt />
                                   </span>
                                   <span className="font-semibold">2.3K</span>
                                   <span>•</span>
                                   <button className="w-fit bg-gray-800 px-1 rounded-md">
                                        admin
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default MiniProfileComment;
