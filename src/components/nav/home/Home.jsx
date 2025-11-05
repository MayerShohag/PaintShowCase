import { useContext } from "react";
import Frame from "./Frame";
import { OwnContext } from "../../../contexts/Context";

const Home = () => {
     const { products } = useContext(OwnContext);
     return (
          <>
               <Frame products={products} />
          </>
     );
};

export default Home;
