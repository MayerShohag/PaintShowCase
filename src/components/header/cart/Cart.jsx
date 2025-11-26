import { useContext } from "react";
import CartFrame from "./CartFrame";
import InitialCart from "./InitialCart";
import { CartContext } from "../../../contexts/CartContext";
import { LoginContext } from "../../../contexts/ProfileContext";
import Profile from "../profile/Profile";

const Cart = () => {
     const { selectCart, setSelectCart } = useContext(CartContext);
     const { isLogin } = useContext(LoginContext);
     return (
          <div className="container mx-auto max-w-[1014px] border border-t-0 border-gray-700 min-h-screen p-5">
               {isLogin ? (
                    <div>
                         {selectCart.length > 0 ? (
                              <CartFrame
                                   selectCart={selectCart}
                                   setSelectCart={setSelectCart}
                              />
                         ) : (
                              <InitialCart />
                         )}
                    </div>
               ) : (
                    <Profile />
               )}
          </div>
     );
};
export default Cart;
