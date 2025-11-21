import { Link } from "react-router";

const NotFound = () => {
     return (
          <div className="flex flex-col items-center justify-center h-screen bg-[#0e1217]">
               <h1 className="text-8xl font-bold text-white/80 mb-2 flex">
                    <span>4</span>
                    <span className="w-20 h-25 bg-linear-to-r from-red-400 via-purple-500 to-blue-400 rounded-full mb-6 animate-pulse"></span>
                    <span>4</span>
               </h1>
               <p className="text-2xl text-white/80">Oops!</p>
               <p className="text-2xl text-white/80 mb-6">
                    This page is not available right now!
               </p>

               <Link
                    to="/"
                    className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition"
               >
                    Go Back Home
               </Link>
          </div>
     );
};

export default NotFound;
