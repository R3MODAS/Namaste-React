import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/responsive.css";
import Header from "./components/Header/Header"
import Body from "./components/Body/Body";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />
      }, {
        path: "/about",
        element: <About />
      }, {
        path: "/contact",
        element: <Contact />
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={Router} />);
