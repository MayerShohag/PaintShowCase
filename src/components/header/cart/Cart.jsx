import { X } from "lucide-react";
import { useState } from "react";

const cartItems = [
     {
          id: 1,
          name: "Crimson Tide",
          artist: "John Doe",
          price: 250,
          qty: 1,
          image: "https://placehold.co/150x150/1e1e1e/ffffff?text=Crimson+Tide",
     },
     {
          id: 2,
          name: "Sunset Serenity",
          artist: "Jane Smith",
          price: 180,
          qty: 2,
          image: "https://placehold.co/150x150/111111/ffffff?text=Sunset+Serenity",
     },
];

const CartItem = ({ item }) => {
     const [count, setCount] = useState(1)
     
     return (
          <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-[#0e1217] text-[#A8B3CF] rounded-xl border border-gray-800 shadow-md mb-4">
               <div className="flex items-center gap-4 md:w-1/2 w-full mb-4 md:mb-0">
                    <img
                         src={item.image}
                         alt={item.name}
                         className="w-24 h-24 object-cover rounded-md"
                    />
                    <div>
                         <h3 className="text-white font-semibold text-lg">
                              {item.name}
                         </h3>
                         <p className="text-gray-400 text-sm">
                              By {item.artist}
                         </p>
                    </div>
               </div>

               <div className="flex items-center gap-6 md:w-1/2 w-full justify-end">
                    <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                         <button onClick={()=> {
                              if(count > 0) setCount(prev => prev - 1)
                         }} className="px-3 py-1 text-gray-200 hover:bg-gray-700 transition">
                              -
                         </button>
                         <span className="px-4 py-1 text-white">
                              {count}
                         </span>
                         <button onClick={()=> setCount(prev=> prev + 1)} className="px-3 py-1 text-gray-200 hover:bg-gray-700 transition">
                              +
                         </button>
                    </div>

                    <p className="text-white font-semibold">
                         ${item.price * item.qty}
                    </p>

                    <button className="text-red-500 hover:text-red-400">
                         <X className="w-5 h-5" />
                    </button>
               </div>
          </div>
     );
};

const Cart = () => {
     const totalPrice = cartItems.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
     );

     return (
          <div className="min-h-screen bg-[#0e1217] text-[#A8B3CF] max-w-[1014px] mx-auto lg:border border-gray-700 lg:border-t-0 p-6">
               <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-300 mb-8" >
                         Your Cart
                    </h2>

                    <div>
                         {cartItems.map((item) => (
                              <CartItem key={item.id} item={item} />
                         ))}
                    </div>

                    <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                         <div className="text-white text-xl font-semibold mb-4 md:mb-0">
                              Total: ${totalPrice}
                         </div>
                         <button className="bg-cyan-600 hover:bg-cyan-500 text-white py-3 px-8 rounded-full font-semibold transition transform hover:scale-[1.03]">
                              Checkout
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Cart;
