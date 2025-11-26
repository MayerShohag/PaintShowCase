import { useContext, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LoginContext } from "../../../contexts/ProfileContext";
import { Bounce, ToastContainer, toast } from "react-toastify";

const CartFrame = ({ selectCart, setSelectCart }) => {
     const [district, setDistrict] = useState([]);
     const [selectArea, SetSelectArea] = useState("");
     const [selectLocality, SetSelectLocality] = useState([]);
     const [selectLocalityName, SetSelectLocalityName] = useState("");
     const [charge, setCharge] = useState(0);
     useEffect(() => {
          fetch(`district.json`)
               .then((res) => res.json())
               .then((data) => setDistrict(data));
     }, []);

     const { user, setUser } = useContext(LoginContext);

     const handleLocality = () => {
          district.forEach((dis) => {
               if (dis.district == selectArea) {
                    SetSelectLocality(dis.localities);
               }
          });
     };

     const handleShipping = () => {
          district.forEach((dis) => {
               if (dis.district == selectArea) {
                    setCharge(dis.shippingCharge);
               }
          });
     };
     const handleDelete = (paintID) => {
          const deletedPaint = selectCart.filter(
               (paint) => paint.id !== paintID
          );
          setSelectCart(deletedPaint);
     };
     const totalPrice = selectCart.reduce(
          (prev, current) => prev + current.price + charge,
          0
     );

     const handleDelivery = () => {
          toast("Delivery Pending...", {
               position: "top-center",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
     };

     return (
          <div>
               {selectCart.map((paint) => (
                    <div
                         key={paint.id}
                         className="border mb-5 relative w-full p-3 bg-gray-900/50 flex items-start gap-5 border-gray-700 rounded-xl"
                    >
                         <span
                              onClick={() => {
                                   handleDelete(paint.id);
                                   setUser({ ...user, cart: user.cart - 1 });
                              }}
                              className="absolute right-2 top-2 cursor-pointer hover:bg-white/10 text-xl rounded-md"
                         >
                              <IoCloseOutline className="text-2xl" />
                         </span>
                         <div className="w-3/12 min-h-fit overflow-hidden rounded-lg">
                              <img
                                   src={paint.url}
                                   className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all duration-200"
                                   alt={paint.paintName}
                              />
                         </div>
                         <div className="w-9/12">
                              <h1 className="text-xl font-bold">
                                   Paint Name: {paint.paintName}
                              </h1>
                              <p className="text-lg">
                                   Painter Name: {paint.painterName}
                              </p>
                              <p>Category: {paint.category}</p>

                              <div className="flex items-center justify-between">
                                   <p>Price: </p>
                                   <p>${paint.price}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                   <p>Size: </p>
                                   <p>{paint.size}</p>
                              </div>
                              <div>
                                   <p>{paint?.paintMedium}</p>
                                   <p>{paint?.paintCondition}</p>
                                   <p>{paint?.paintWeight}</p>
                                   <p>{paint?.paintShipping}</p>
                                   <p>{paint?.isStock}</p>
                              </div>
                         </div>
                    </div>
               ))}
               <div className="border rounded-xl border-gray-700 p-5 bg-gray-900/50">
                    <h1 className="text-center text-2xl font-bold">
                         Pricing Invoice
                    </h1>
                    <hr className="my-2 border-gray-700 mt-4" />

                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                              <p>Shipping</p>
                              <select
                                   name=""
                                   id=""
                                   value={selectArea}
                                   onChange={(e) =>
                                        SetSelectArea(e.target.value)
                                   }
                                   onClick={handleShipping}
                                   className="border border-gray-700 p-1 rounded-md outline-none"
                              >
                                   <option value="">Choose location</option>
                                   {district.map((district) => (
                                        <option
                                             key={district.district}
                                             value={district.district}
                                        >
                                             {district.district}
                                        </option>
                                   ))}
                              </select>
                              <select
                                   value={selectLocalityName}
                                   onChange={(e) =>
                                        SetSelectLocalityName(e.target.value)
                                   }
                                   onClick={handleLocality}
                                   className="border border-gray-700 p-1 rounded-md outline-none"
                              >
                                   <option value="">Choose location</option>
                                   {selectLocality.map((localities) => (
                                        <option
                                             key={localities}
                                             value={localities}
                                        >
                                             {`${localities}, ${localities}`}
                                        </option>
                                   ))}
                              </select>
                         </div>
                         <p>included + ${charge}</p>
                    </div>

                    <div className="flex items-center justify-between">
                         <p className="text-2xl font-bold">Total: </p>
                         <p className="text-right text-2xl font-bold">
                              ${totalPrice}
                         </p>
                    </div>
                    <div className="mt-5">
                         <button
                              onClick={handleDelivery}
                              className="border w-full py-2 border-gray-700 rounded-md hover:bg-accent/50 cursor-pointer duration-200 transition-all hover:border-transparent hover:text-white"
                         >
                              Delivery
                         </button>
                         <ToastContainer />
                    </div>
               </div>
          </div>
     );
};

export default CartFrame;
