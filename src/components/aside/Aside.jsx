import { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { LiaSortSolid } from "react-icons/lia";
import { MdKeyboardArrowDown, MdOutlineBorderStyle } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from "react-router";
import { OwnContext } from "../../contexts/Context";

const Aside = () => {
     const { getProducts, getFilterProducts } = useContext(OwnContext);
     return (
          <div>
               <div>
                    <div className="p-2 text-center">
                         <Link
                              to="/post"
                              className="border flex items-center justify-center gap-1 transition-all duration-150 w-full border-gray-700 rounded-lg py-2 text-xl font-bold bg-linear-to-r from-white/2 to-white/10 hover:bg-blue-600 hover:text-white "
                         >
                              <GoPlus className="text-2xl" />
                              <span>Post</span>
                         </Link>
                    </div>
                    <hr className="border-0 border-b border-gray-700" />
                    <h1 className="text-3xl font-semibold p-2">
                         Filter Paintings
                    </h1>
                    <hr className="border-0 border-b border-gray-700" />
                    <details open className="pr-2">
                         <summary className="text-xl bg-linear-to-r from-white/10 to-white/1 flex justify-between items-center gap-1 font-semibold hover:bg-white/5 py-1 transition-all duration-150 cursor-pointer border mt-2 px-2 border-l-0 rounded-r-md border-gray-700">
                              <div className="flex items-center gap-1">
                                   <LiaSortSolid />
                                   <span>SORT</span>
                              </div>
                              <MdKeyboardArrowDown />
                         </summary>
                         <label
                              htmlFor="recommended"
                              className="flex gap-1 py-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   onClick={getProducts}
                                   className="w-4 h-4"
                                   id="recommended"
                                   name="sort"
                              />
                              <span>Recommended</span>
                         </label>
                         <label
                              htmlFor="newToOld"
                              className="flex py-1 items-center gap-1 accent-gray-400 border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="newToOld"
                                   name="sort"
                                        onClick={() => getFilterProducts("newtoold")}
                              />
                              <span>Date: New to Old</span>
                         </label>
                         <label
                              htmlFor="oldToNew"
                              className="flex py-1  gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="oldToNew"
                                   name="sort"
                                        onClick={() => getFilterProducts("oldtonew")}
                              />
                              <span>Date: Old to New</span>
                         </label>
                         <label
                              htmlFor="lowToHigh"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="lowToHigh"
                                   name="sort"
                                        onClick={() => getFilterProducts("lowtohigh")}
                              />
                              <span>Price: Low to High</span>
                         </label>
                         <label
                              htmlFor="highToLow"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="highToLow"
                                   name="sort"
                                        onClick={() => getFilterProducts("hightolow")}
                              />
                              <span>Price: High to Low</span>
                         </label>
                    </details>
                    <hr className="border-0 border-b border-gray-700 my-2" />
                    <details open className="pr-2">
                         <summary className="text-xl bg-linear-to-r from-white/10 to-white/1 flex justify-between items-center gap-1 font-semibold hover:bg-white/5 py-1 transition-all duration-150 cursor-pointer border mt-2 px-2 rounded-r-md border-l-0 border-gray-700">
                              <div className="flex items-center gap-1">
                                   <TbCategoryPlus />
                                   <span>CATEGORY</span>
                              </div>
                              <MdKeyboardArrowDown />
                         </summary>
                         <label
                              htmlFor="all"
                              className="flex gap-1 py-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                        onClick={getProducts}
                                   className="w-4 h-4"
                                   id="all"
                                   name="category"
                              />
                              <span>All</span>
                         </label>
                         <label
                              htmlFor="paintings"
                              className="flex py-1 items-center gap-1 accent-gray-400 border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="paintings"
                                   name="category"
                                        onClick={() => getFilterProducts("paintings")}
                              />
                              <span>Paintings</span>
                         </label>
                         <label
                              htmlFor="drawings"
                              className="flex py-1  gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="drawings"
                                   name="category"
                                        onClick={() => getFilterProducts("drawings")}
                              />
                              <span>Drawings</span>
                         </label>

                         <label
                              htmlFor="mixed-media"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="mixed-media"
                                   name="category"
                                        onClick={() => getFilterProducts("mixed-media")}
                              />
                              <span>Mixed Media</span>
                         </label>
                         <label
                              htmlFor="sculpture"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="radio"
                                   className="w-4 h-4"
                                   id="sculpture"
                                   name="category"
                                        onClick={() => getFilterProducts("sculpture")}
                              />
                              <span>Sculpture</span>
                         </label>
                    </details>
                    <hr className="border-0 border-b border-gray-700 my-2" />
                    <details open className="pr-2">
                         <summary className="text-xl bg-linear-to-r from-white/10 to-white/1 rounded-r-md border-l-0 flex items-center justify-between gap-1 font-semibold hover:bg-white/5 py-1 transition-all duration-150 cursor-pointer border mt-2 px-2 border-gray-700">
                              <div className="flex items-center gap-1">
                                   <MdOutlineBorderStyle />
                                   <span>STYLE</span>
                              </div>
                              <MdKeyboardArrowDown />
                         </summary>
                         <label
                              htmlFor="abstract"
                              className="flex gap-1 py-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="checkbox"
                                        onClick={() => getFilterProducts("abstract")}
                                   className="w-4 h-4"
                                   id="abstract"
                              />
                              <span>Abstract</span>
                         </label>
                         <label
                              htmlFor="contemporary"
                              className="flex py-1 items-center gap-1 accent-gray-400 border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="checkbox"
                                   className="w-4 h-4"
                                   id="contemporary"
                                        onClick={() =>
                                             getFilterProducts("contemporary")
                                        }
                              />
                              <span>Contemporary</span>
                         </label>
                         <label
                              htmlFor="modern"
                              className="flex py-1  gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="checkbox"
                                   className="w-4 h-4"
                                   id="modern"
                                        onClick={() => getFilterProducts("modern")}
                              />
                              <span>Modern</span>
                         </label>
                         <label
                              htmlFor="figurative"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="checkbox"
                                   className="w-4 h-4"
                                   id="figurative"
                                        onClick={() => getFilterProducts("figurative")}
                              />
                              <span>Figurative</span>
                         </label>
                         <label
                              htmlFor="minimalism"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="checkbox"
                                   className="w-4 h-4"
                                   id="minimalism"
                                        onClick={() => getFilterProducts("minimalism")}
                              />
                              <span>Minimalism</span>
                         </label>
                         <label
                              htmlFor="conceptual"
                              className="flex py-1 gap-1 accent-gray-400 items-center border pl-2 hover:bg-white/5 transition-all duration-150 border-gray-700 rounded-md text-lg ml-3 mt-2"
                         >
                              <input
                                   type="checkbox"
                                   className="w-4 h-4"
                                   id="conceptual"
                                        onClick={() => getFilterProducts("conceptual")}
                              />
                              <span>Conceptual</span>
                         </label>
                    </details>
                    <hr className="border-0 border-b border-gray-700 my-2" />
               </div>
          </div>
     );
};

export default Aside;
