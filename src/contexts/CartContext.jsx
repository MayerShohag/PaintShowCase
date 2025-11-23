import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
     const [selectCart, setSelectCart] = useState({});
     return (
          <CartContext.Provider
               value={{
                    selectCart,
                    setSelectCart,
               }}
          >
               {children}
          </CartContext.Provider>
     );
};
