import { IoCloseOutline } from "react-icons/io5";

const CartFrame = ({ paint }) => {
     return (
          <div className="border relative w-full p-3 flex items-start gap-5 border-gray-700 rounded-xl">
               <span className="absolute right-2 top-2 cursor-pointer hover:bg-white/10 text-xl rounded-sm">
                    <IoCloseOutline />
               </span>
               <div className="w-3/12">
                    <img
                         src={paint.url}
                         className="w-full h-50 rounded-lg"
                         alt={paint.paintName}
                    />
               </div>
               <div className="w-9/12">
                    <h1 className="text-xl font-bold">{paint.paintName}</h1>
                    <p className="text-lg">{paint.painterName}</p>
                    <p>{paint.category}</p>
                    <div className="flex items-center justify-between">
                         <p>Shipping</p>
                         <p>included</p>
                    </div>
                    <div className="flex items-center justify-between">
                         <p>Price </p>
                         <p>${paint.price}</p>
                    </div>
                    <div>size: {paint.size}</div>
               </div>
          </div>
     );
};

export default CartFrame;
