const Comment = ({ paint }) => {
     return (
          <>
               <div className="user-comment flex border border-gray-700 p-3 rounded-2xl gap-2">
                    <div className="w-11 h-11">
                         <img
                              src={paint.url}
                              className="w-full h-full object-cover object-top rounded-xl"
                              alt={paint.paintName}
                              title={paint.painterName}
                         />
                    </div>
                    <div className="w-10/12">
                         <input
                              type="text"
                              className="bg-white/10 rounded-xl outline-none px-4 placeholder:text-xl text-xl min-w-full h-full"
                              placeholder="Leave a comment..."
                         />
                    </div>
                    <div className="">
                         <button className="border border-gray-700 hover:bg-white/10 transition-all duration-150 cursor-pointer hover:border-transparent text-lg font-bold h-full  w-full px-3 rounded-xl">
                              Post
                         </button>
                    </div>
               </div>
          </>
     );
};

export default Comment;
