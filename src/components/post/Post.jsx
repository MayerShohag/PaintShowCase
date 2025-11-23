import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/ProfileContext";
import { RiDragDropLine } from "react-icons/ri";
import Profile from "../header/profile/Profile";

const Post = () => {
     const { user, isLogin } = useContext(LoginContext);
     const [paintTitle, setPaintTitle] = useState("");
     const [paintURL, setPaintURL] = useState(null);
     const [paintCategory, setPaintCategory] = useState("");
     const [paintPrice, setPaintPrice] = useState(0);
     const [paintSize, setPaintSize] = useState("");
     const [paintDescription, setPaintDescription] = useState("");
     const [paintMedium, setPaintMedium] = useState("");
     const [paintStyle, setPaintStyle] = useState("");
     const [paintOrientation, setPaintOrientation] = useState("");
     const [paintCondition, setPaintCondition] = useState("");
     const [paintWeight, setPaintWeight] = useState("");
     const [paintDateAge, setPaintDateAge] = useState("");
     const [paintShipping, setPaintShipping] = useState("");
     const [paintTags, setPaintTags] = useState("");
     const [paintCreateYear, setPaintCreateYear] = useState(0);
     const [isStock, setIsStock] = useState(null);
     const [location, setLocation] = useState({});
     const dateTime = new Date();

     // location
     useEffect(() => {
          navigator.geolocation.getCurrentPosition(async (position) => {
               let latitute = position.coords.latitude;
               let longtitute = position.coords.longitude;
               const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitute}&longitude=${longtitute}`;
               const response = await fetch(url);
               const data = await response.json();
               setLocation(data);
          });
     }, []);

     // image upload
     async function formUpload() {
          if (!paintURL) return alert("Please select a Painting.");
          const formData = new FormData();
          formData.append("file", paintURL);
          formData.append("upload_preset", "postpaint");
          const url = `https://api.cloudinary.com/v1_1/dua5xqaek/image/upload`;
          const response = await fetch(url, {
               method: "POST",
               body: formData,
          });
          const data = await response.json();
          return data.secure_url;
     }

     const handleSubmit = async (e) => {
          if (!isLogin) return alert(`Please Login First`);
          e.preventDefault();
          const url = await formUpload();
          const postData = {
               paintName: paintTitle,
               painterName: user.name,
               category: paintCategory,
               price: paintPrice,
               size: paintSize,
               date: `${dateTime.toDateString()}`,
               location: `${location.locality}, ${location.city}, ${location.countryName}`,
               url,
               paintDescription,
               paintMedium,
               paintStyle,
               paintOrientation,
               paintCondition,
               paintWeight,
               paintDateAge,
               paintShipping,
               paintTags,
               paintCreateYear,
               isStock,
          };
          await fetch(
               `https://691cb4a03aaeed735c91d7ac.mockapi.io/paintshowcase/products`,
               {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                         "content-type": "application/json",
                    },
               }
          );
          setPaintTitle("");
          setPaintURL(null);
          setPaintCategory("");
          setPaintPrice("");
          setPaintSize("");
          setPaintDescription("");
          setPaintMedium("");
          setPaintStyle("");
          setPaintOrientation("");
          setPaintCondition("");
          setPaintWeight("");
          setPaintDateAge("");
          setPaintShipping("");
          setPaintTags("");
          setPaintCreateYear("");
          setIsStock(null);
     };

     return (
          <>
               {isLogin ? (
                    <div className="md:border md:border-t-0 border-gray-700 min-h-screen max-w-200 mx-auto">
                         <h1 className="md:text-3xl text-2xl font-bold px-5 py-4">
                              Post a New Painting
                         </h1>
                         <hr className="border-gray-700" />

                         <form
                              onSubmit={handleSubmit}
                              className="md:px-20 px-10 pb-20 pt-3 space flex flex-col gap-2"
                         >
                              <div>
                                   <label className="block font-medium mb-1">
                                        Painting Name
                                   </label>
                                   <input
                                        type="text"
                                        required
                                        name="paintName"
                                        value={paintTitle}
                                        onChange={(e) =>
                                             setPaintTitle(e.target.value)
                                        }
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
                                        required
                                        value={paintCategory}
                                        onChange={(e) =>
                                             setPaintCategory(e.target.value)
                                        }
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
                                             required
                                             value={paintPrice}
                                             onChange={(e) =>
                                                  setPaintPrice(e.target.value)
                                             }
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
                                             value={paintSize}
                                             required
                                             onChange={(e) =>
                                                  setPaintSize(e.target.value)
                                             }
                                             className="w-full border border-gray-700 rounded px-3 py-2"
                                             placeholder={`"59.1 x 39.4 in", "35.3 x 24.6 in", "15.7 x 31.5 in"`}
                                        />
                                   </div>
                              </div>

                              <div className="mb-4">
                                   <label className="block font-medium mb-2">
                                        Upload Painting
                                   </label>
                                   <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:bg-gray-900 transition">
                                             <img
                                                  src={paintURL}
                                                  alt="Preview"
                                                  className="object-contain h-64 w-full rounded hidden"
                                             />

                                             <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                                                  <RiDragDropLine className="text-6xl" />
                                                  <p className="text-sm">
                                                       Click to upload or drag
                                                       and drop
                                                  </p>
                                             </div>

                                             <input
                                                  type="file"
                                                  onChange={(e) =>
                                                       setPaintURL(
                                                            e.target.files[0]
                                                       )
                                                  }
                                                  accept="image/*"
                                                  className="hidden"
                                             />
                                        </label>
                                   </div>
                              </div>

                              <div>
                                   <label className="block font-medium mb-1">
                                        Description
                                   </label>
                                   <textarea
                                        name="artworkDescription"
                                        value={paintDescription}
                                        required
                                        onChange={(e) =>
                                             setPaintDescription(e.target.value)
                                        }
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
                                             value={paintMedium}
                                             required
                                             onChange={(e) =>
                                                  setPaintMedium(e.target.value)
                                             }
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
                                             required
                                             value={paintStyle}
                                             onChange={(e) =>
                                                  setPaintStyle(e.target.value)
                                             }
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
                                             value={paintOrientation}
                                             required
                                             onChange={(e) =>
                                                  setPaintOrientation(
                                                       e.target.value
                                                  )
                                             }
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
                                             value={paintCondition}
                                             required
                                             onChange={(e) =>
                                                  setPaintCondition(
                                                       e.target.value
                                                  )
                                             }
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
                                             required
                                             value={paintWeight}
                                             onChange={(e) =>
                                                  setPaintWeight(e.target.value)
                                             }
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
                                             value={paintDateAge}
                                             required
                                             onChange={(e) =>
                                                  setPaintDateAge(
                                                       e.target.value
                                                  )
                                             }
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
                                        value={paintShipping}
                                        required
                                        onChange={(e) =>
                                             setPaintShipping(e.target.value)
                                        }
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
                                        value={paintTags}
                                        required
                                        onChange={(e) =>
                                             setPaintTags(e.target.value)
                                        }
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
                                             required
                                             value={paintCreateYear}
                                             onChange={(e) =>
                                                  setPaintCreateYear(
                                                       e.target.value
                                                  )
                                             }
                                        />
                                   </div>

                                   <div>
                                        <label
                                             htmlFor="availability"
                                             className="block text-sm font-semibold mb-1 mt-1"
                                        >
                                             Availability
                                        </label>
                                        <select
                                             value={isStock}
                                             onChange={(e) =>
                                                  setIsStock(e.target.value)
                                             }
                                             id="availability"
                                             required
                                             name="availability"
                                             className="w-full px-2 py-2.5 rounded border border-gray-700 bg-[#111827] text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        >
                                             <option
                                                  value=""
                                                  disabled
                                                  selected
                                                  className="text-gray-500"
                                             >
                                                  Select availability
                                             </option>
                                             <option value="in-stock">
                                                  In Stock
                                             </option>
                                             <option value="stock-out">
                                                  Stock Out
                                             </option>
                                        </select>
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
               ) : (
                    <Profile />
               )}
          </>
     );
};

export default Post;
