import Paint from "./Paint";

const Post = () => {
     return (
          <>
               <div className="border border-t-0 border-gray-700 min-h-screen max-w-200 mx-auto">
                    <h1 className="text-3xl font-bold px-5 py-4">
                         Post a New Painting
                    </h1>
                    <hr className="border-gray-700" />

                    <form className="px-20 pb-5 pt-3 space flex flex-col gap-2">
                         <div>
                              <label className="block font-medium mb-1">
                                   Painting Name
                              </label>
                              <input
                                   type="text"
                                   name="paintName"
                                   className="w-full border border-gray-700 rounded px-3 py-2"
                                   placeholder="The Old Guitarist, Girl before a Mirror, Mona Lina"
                              />
                         </div>

                         <div>
                              <label className="block font-medium mb-1">
                                   Category
                              </label>
                              <input
                                   type="text"
                                   name="category"
                                   className="w-full border border-gray-700 rounded px-3 py-2"
                                   placeholder="Paintings, Sculpture, Drawing, Conceptual, Expressionism"
                              />
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">
                                        Price (USD)
                                   </label>
                                   <input
                                        type="number"
                                        name="price"
                                        placeholder="$500"
                                        className="w-full border-gray-700 border rounded px-3 py-2"
                                   />
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">
                                        Size
                                   </label>
                                   <input
                                        type="text"
                                        name="size"
                                        className="w-full border border-gray-700 rounded px-3 py-2"
                                        placeholder={`"59.1 x 39.4 in", "35.3 x 24.6 in", "15.7 x 31.5 in"`}
                                   />
                              </div>
                         </div>

                         <Paint />

                         <div>
                              <label className="block font-medium mb-1">
                                   Description
                              </label>
                              <textarea
                                   name="artworkDescription"
                                   className="w-full border-gray-700 border rounded px-3 py-2"
                                   rows="4"
                                   placeholder="Write a detailed description of the painting, its inspiration, colors, and story..."
                              />
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">
                                        Medium
                                   </label>
                                   <input
                                        type="text"
                                        name="medium"
                                        className="w-full border-gray-700 border rounded px-3 py-2"
                                        placeholder="Acrylic Paint, Watercolor, Ink, Pastel"
                                   />
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">
                                        Style
                                   </label>
                                   <input
                                        type="text"
                                        name="style"
                                        className="w-full border-gray-700 border rounded px-3 py-2"
                                        placeholder={`Abstract, Contemporary, Modern etc.`}
                                   />
                              </div>
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">
                                        Orientation
                                   </label>
                                   <input
                                        type="text"
                                        name="orientation"
                                        className="w-full border-gray-700 border rounded px-3 py-2"
                                        placeholder={`Landscape, Portrait`}
                                   />
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">
                                        Condition
                                   </label>
                                   <input
                                        type="text"
                                        name="condition"
                                        className="w-full border border-gray-700 rounded px-3 py-2"
                                        placeholder="Excellent, Good, Poor, Restored"
                                   />
                              </div>
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">
                                        Weight
                                   </label>
                                   <input
                                        type="text"
                                        name="weight"
                                        className="w-full border border-gray-700 rounded px-3 py-2"
                                        placeholder="5.4 kg"
                                   />
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">
                                        Date / Age
                                   </label>
                                   <input
                                        type="text"
                                        name="date"
                                        className="w-full border border-gray-700 rounded px-3 py-2"
                                        placeholder="Old/New"
                                   />
                              </div>
                         </div>

                         <div>
                              <label className="block font-medium mb-1">
                                   Shipping Info
                              </label>
                              <textarea
                                   name="shippingInfo"
                                   className="w-full border border-gray-700 rounded px-3 py-2"
                                   rows="2"
                                   placeholder="Worldwide shipping available."
                              />
                         </div>

                         <div>
                              <label className="block font-medium mb-1">
                                   Tags (comma separated)
                              </label>
                              <input
                                   type="text"
                                   name="tags"
                                   className="w-full border border-gray-700 rounded px-3 py-2"
                                   placeholder="abstract, summer, vintage, oil painting"
                              />
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">
                                        Year Created
                                   </label>
                                   <input
                                        type="number"
                                        name="yearCreated"
                                        className="w-full border-gray-700 border rounded px-3 py-2"
                                        placeholder="1958"
                                   />
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">
                                        Availability
                                   </label>
                                   <input
                                        type="text"
                                        name="availability"
                                        className="w-full border-gray-700 border rounded px-3 py-2"
                                        placeholder="In Stock"
                                   />
                              </div>
                         </div>

                         <button
                              type="submit"
                              className="mt-4 bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                         >
                              Post Painting
                         </button>
                    </form>
               </div>
          </>
     );
};

export default Post;
