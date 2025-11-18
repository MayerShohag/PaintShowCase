import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
     const [input, setInput] = useState("");
     const [searchData, setSearchData] = useState([]);
     const [isShow, setIsShow] = useState(false);
     const wrapperRef = useRef();
     useEffect(() => {
          const handleClick = (e) => {
               if (
                    wrapperRef.current &&
                    !wrapperRef.current.contains(e.target)
               ) {
                    setIsShow(false);
               }
          };

          document.addEventListener("mousedown", handleClick);
          return () => document.removeEventListener("mousedown", handleClick);
     }, []);

     useEffect(() => {
          if (input.length === 0) setSearchData([]);
          const timer = setTimeout(() => {
               fetch(`http://localhost:3000/products?paintName_like=${input}`)
                    .then((res) => res.json())
                    .then((data) => setSearchData(data));
          }, 300);
          return () => clearTimeout(timer);
     }, [input]);
     return (
          <>
               <div className="relative" ref={wrapperRef}>
                    <div className="md:w-90 md:h-12 hidden transition-all duration-200 md:flex md:items-center md:gap-2 md:px-3 md:bg-[#1C1F26] md:border md:border-transparent rounded-2xl lg:focus-within:rounded-t-2xl lg:focus-within:rounded-b-none focus-within:ring focus-within:ring-gray-700 focus-within:shadow-[3px_3px_5px_black]">
                         <CiSearch className="text-3xl text-gray-500" />
                         <input
                              type="search"
                              className="h-full w-full text-xl outline-none placeholder:text-xl placeholder:text-gray-500 placeholder:font-normal "
                              placeholder="Search your loved paint"
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                              onFocus={() => setIsShow(true)}
                         />
                    </div>
                    {isShow && (
                         <div className="border border-gray-700 ring-gray-700 rounded-b-2xl flex flex-col bg-[#1C1F26] max-h-90 overflow-y-auto scrollbar-none absolute w-full">
                              {searchData?.map((search) => (
                                   <li
                                        onClick={() => {
                                             setIsShow(false);
                                        }}
                                        className="p-2 hover:bg-[#2e3137] flex items-center gap-1 cursor-pointer"
                                        key={search.id}
                                   >
                                        <CiSearch className="text-xl text-gray-500" />
                                        <span>{search.paintName}</span>
                                   </li>
                              ))}
                         </div>
                    )}
               </div>
          </>
     );
};

export default Search;
