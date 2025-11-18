import { CiLock, CiStar } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { Link } from "react-router";
import InitialCart from "./InitialCart";
import CartFrame from "./CartFrame";

const Cart = ({paint}) => {
     return (
          <div className="container mx-auto h-screen px-20 pt-15">
               <div className="grid grid-cols-12 gap-5">
                    <div className="border col-span-7 rounded-2xl p-5 border-gray-700">
                         <div>
                              <h1 className="text-2xl font-bold">
                                   Products Cart
                              </h1>
                              <hr className="border-gray-700 my-2" />
                         </div>
                         <div>
                              <CartFrame paint={paint}/>
                         </div>
                         {/* <InitialCart /> */}
                    </div>
                    <div className="border col-span-5 flex flex-col gap-3 rounded-2xl p-4 pr-0 border-gray-700">
                         <div className="flex items-center gap-2 border border-gray-700 bg-white/5 hover:bg-white/8 rounded-xl p-2 rounded-r-none border-r-0">
                              <CiStar className="text-2xl" />
                              <div>
                                   <h1 className="font-bold">
                                        Thousands Of Five-Star Reviews
                                   </h1>
                                   <p className="text-gray-500">
                                        We deliver world-class customer service
                                        to all of our art buyers.
                                   </p>
                              </div>
                         </div>
                         <div className="flex items-center gap-2 border border-gray-700 bg-white/5 hover:bg-white/8 rounded-xl rounded-r-none border-r-0 p-2">
                              <IoShieldCheckmarkOutline className="text-2xl" />
                              <div>
                                   <h1 className="font-bold">
                                        Satisfaction Guaranteed
                                   </h1>
                                   <p className="text-gray-500">
                                        Our 14-day satisfaction guarantee allows
                                        you to buy with confidence.
                                   </p>
                              </div>
                         </div>
                         <div className="flex items-center gap-2 border border-gray-700 bg-white/5 hover:bg-white/8 rounded-xl p-2 rounded-r-none border-r-0">
                              <CiLock className="text-2xl" />
                              <div>
                                   <h1 className="font-bold">
                                        Safe & Secure Shopping
                                   </h1>
                                   <p className="text-gray-500">
                                        All payments and transactions are secure
                                        and encrypted.
                                   </p>
                              </div>
                         </div>
                         <div className="flex items-center gap-2 border border-gray-700 bg-white/5 hover:bg-white/8 rounded-xl p-2 rounded-r-none border-r-0">
                              <PiCurrencyCircleDollarLight className="text-2xl" />
                              <div>
                                   <h1 className="font-bold">
                                        Support An Artist With Every Purchase
                                   </h1>
                                   <p className="text-gray-500">
                                        We pay our artists more on every sale
                                        than other galleries.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="border col-start-8 col-end-13  rounded-2xl p-5 border-gray-700">
                         <h1 className="text-2xl font-bold">Need More Help?</h1>
                         <hr className="border-gray-700 my-1" />
                         <div className="flex justify-center gap-5 mt-5">
                              <Link
                                   to="/about"
                                   className="border border-gray-700 rounded-lg text-lg px-5 py-2 hover:bg-white/5 hover:border-transparent"
                              >
                                   Contact Customer Support
                              </Link>
                              <Link
                                   to="/about"
                                   className="border border-gray-700 rounded-lg text-lg px-5 py-2 hover:bg-white/5 hover:border-transparent"
                              >
                                   Enjoy it or Reviews
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Cart;
