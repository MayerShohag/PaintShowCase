import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Notifications from "../components/header/Notifications";
import Cart from "../components/header/Cart";
import Profile from "../components/header/Profile";
import Home from "../components/nav/home/Home";
import Exhibitions from "../components/nav/Exhibitions";
import Collaborations from "../components/nav/Collaborations";
import Inspiration from "../components/nav/Inspiration";
import Services from "../components/nav/Services";
import About from "../components/nav/About";
import Post from "../components/post/Post";
import Products from "../components/nav/home/Products";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Root />,
          children: [
               { path: "/", index: true, element: <Home /> },
               { path: "/notifications", element: <Notifications /> },
               { path: "/cart", element: <Cart /> },
               { path: "/profile", element: <Profile /> },
               { path: "/exhibition", element: <Exhibitions /> },
               { path: "/collaboration", element: <Collaborations /> },
               { path: "/inspiration", element: <Inspiration /> },
               { path: "/services", element: <Services /> },
               { path: "/about", element: <About /> },
               { path: "/post", element: <Post /> },
               { path: "/products", element: <Products /> },
          ],
     },
]);
