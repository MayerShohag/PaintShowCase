const Exhibitions = () => {
     return (
          <div className="border border-gray-700 border-t-0 max-w-[900px] mx-auto">
               <h1 className="text-3xl font-bold p-3 border-b border-gray-700">
                    Exhibitions
               </h1>
               <p className="p-2 border-0 border-b flex gap-1 border-gray-700">
                    New date: 
               </p>
               <div className="flex items-center gap-15 my-2">
                    <div className="w-100">
                         <img
                              src="https://www.operagallery.com/storage/exhibitions/Opera-Gallery-New-York_opening.jpg"
                              alt=""
                              className="w-full"
                         />
                    </div>
                    <div className="w-100">
                         <h1 className="text-2xl mb-4 font-semibold">
                              New York Temporary Space Opening, Inaugural
                              Exhibitions
                         </h1>
                         <p className="text-lg">
                              30 October - 29 November 2025
                         </p>
                         <p className="text-sm text-white/50">New York</p>
                    </div>
               </div>
               <p className="p-2 border-0 border-t flex gap-1 border-gray-700">
                    Earliar date: 
               </p>
          </div>
     );
};

export default Exhibitions;
