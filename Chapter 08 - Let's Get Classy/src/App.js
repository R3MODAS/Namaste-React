import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./pages/Body";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import "./css/index.css";
import "./css/responsive.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    children : [
      {path : "/", element : <Body />},
      {path : "/about", element : <About />},
      {path : "/contact", element : <Contact />},
      {path : "/restaurants/:resId", element : <RestaurantMenu />},
    ],
    errorElement : <Error />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
