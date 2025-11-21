const Loading = () => {
     return (
          <div className="flex flex-col items-center justify-center h-screen bg-white">
               <div className="relative w-24 h-24 mb-6 animate-spin">
                    <div className="absolute top-0 left-0 w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full"></div>
               </div>
               <p className="text-gray-700 text-lg font-semibold animate-pulse">
                    Loading Your Pages...
               </p>
          </div>
     );
};

export default Loading;
