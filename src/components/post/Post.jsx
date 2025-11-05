const Post = () => {
     return (
          <>
               <div className="border border-t-0 border-gray-700 max-w-200 mx-auto">
                    <div className="flex gap-2 border-0 border-b p-2 border-gray-700">
                         <button className="border cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg">
                              New Post
                         </button>
                         <button className="border cursor-pointer border-gray-700 font-medium hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-150 rounded-lg">
                              Share Link
                         </button>
                    </div>

                    <form className="px-20 py-5  flex flex-col gap-2">
                         <div className="flex gap-2">
                              <input
                                   type="text"
                                   className="w-6/12 py-2 px-3 bg-white/5 text-xl outline-none rounded-md transition-all duration-150 focus:rounded-xl focus:border-l-6 border border-gray-700"
                                   placeholder="Post Title"
                              />
                              <input
                                   type="image"
                                   className="w-6/12 py-2 px-3 bg-white/5 text-xl outline-none  transition-all duration-150 focus:rounded-xl focus:border-l-6 rounded-md border border-gray-700"
                                   src=""
                                   alt="upload paint"
                              />
                         </div>
                         <div className="flex gap-2">
                              <input
                                   type="number"
                                   className="w-6/12 py-2 px-3 bg-white/5 text-xl outline-none  transition-all duration-150 focus:rounded-xl focus:border-l-6 rounded-md border border-gray-700"
                                   placeholder="Price: 0000"
                              />
                              <input
                                   type="text"
                                   src=""
                                   className="w-6/12 py-2 px-3 bg-white/5 text-xl outline-none  transition-all duration-150 focus:rounded-xl focus:border-l-6 rounded-md border border-gray-700"
                                   placeholder="Location: Mohakhali, Dhaka"
                              />
                         </div>
                         <div className="flex gap-2">
                              <input
                                   type="text"
                                   placeholder="Size: 45 x 21 in"
                                   className="w-6/12 py-2 px-3 bg-white/5 text-xl outline-none  transition-all duration-150 focus:rounded-xl focus:border-l-6 rounded-md border border-gray-700"
                              />
                              <select
                                   name=""
                                   id=""
                                   className="w-6/12 py-2 px-3 bg-white/5 text-xl outline-none  transition-all duration-150 focus:rounded-xl focus:border-l-6 rounded-md border border-gray-700"
                              >
                                   <option disabled selected>
                                        Category
                                   </option>
                                   <option value="paintings" className="">
                                        Paintings
                                   </option>
                                   <option value="drawings">Drawings</option>
                                   <option value="mixed-media">
                                        Mixed Media
                                   </option>
                                   <option value="sculpture">Sculpture</option>
                              </select>
                         </div>
                         <textarea
                              rows={7}
                              placeholder="Description"
                              className="w-full py-2 resize-none transition-all duration-150 focus:rounded-3xl focus:border-l-6 bg-white/5 px-3 text-xl outline-none rounded-md border border-gray-700"
                         ></textarea>

                         <button
                              type="submit"
                              className="bg-white/5 w-30 mx-auto py-2 rounded-md transition-all duration-150 hover:bg-accent/50 text-xl font-semibold cursor-pointer"
                         >
                              Post
                         </button>
                    </form>
               </div>
          </>
     );
};

export default Post;
