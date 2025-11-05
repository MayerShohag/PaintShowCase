import { createContext, useEffect, useState } from "react";

export const OwnContext = createContext(null);

export default function Context({ children }) {
     const [products, setProducts] = useState([]);
     useEffect(() => {
          getProducts();
     }, []);

     const getProducts = async () => {
          const res = await fetch(`http://localhost:3000/products`);
          const data = await res.json();
          setProducts(data);
     };

     const getFilterProducts = async (category) => {
          const res = await fetch(
               `http://localhost:3000/products?category=${category}`
          );
          const data = await res.json();
          setProducts(data);
          if (category === "hightolow") {
               let highToLow = data.sort((a, b) => b.price - a.price);
               setProducts(highToLow);
          } else if (category === "lowtohigh") {
               let lowToHigh = data.sort((a, b) => a.price - b.price);
               setProducts(lowToHigh);
          }
     };
     return (
          <OwnContext.Provider
               value={{
                    products,
                    getProducts,
                    getFilterProducts,
               }}
          >
               {children}
          </OwnContext.Provider>
     );
}
