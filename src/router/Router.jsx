import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Notifications from "../components/header/notifications/Notifications";
import Profile from "../components/header/profile/Profile";
import Home from "../components/nav/home/Home";
import Exhibitions from "../components/nav/Exhibitions";
import Collaborations from "../components/nav/Collaborations";
import Inspiration from "../components/nav/Inspiration";
import Services from "../components/nav/Services";
import About from "../components/nav/About";
import Post from "../components/post/Post";
import Products from "../components/nav/home/Products";
import NotificationsToday from "../components/header/notifications/NotificationsToday";
import Cart from "../components/header/cart/Cart";
import ProfileDetails from "../components/header/profile/ProfileDetails";
import Loading from "../Loading";
import NotFound from "../NotFound";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Root />,
          children: [
               { path: "/", index: true, element: <Home /> },
               {
                    path: "/profile",
                    element: <Profile />,
                    children: [
                         {
                              path: "/profile",
                              element: <ProfileDetails />,
                         },
                    ],
               },
               {
                    path: "/notifications",
                    element: <Notifications />,
                    children: [
                         {
                              path: "/notifications/today",
                              element: <NotificationsToday />,
                         },
                    ],
               },
               { path: "/cart", element: <Cart /> },
               { path: "/exhibitions", element: <Exhibitions /> },
               { path: "/collaborations", element: <Collaborations /> },
               { path: "/inspirations", element: <Inspiration /> },
               { path: "/services", element: <Services /> },
               { path: "/about", element: <About /> },
               { path: "/post", element: <Post /> },
               { path: "/products", element: <Products /> },
               {
                    path: "/*",
                    element: <NotFound />,
               },
          ],
     },
]);
