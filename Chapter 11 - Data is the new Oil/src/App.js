import ReactDOM from "react-dom/client";
import "./css/index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
import UserContext from "./utils/UserContext";

const Header = lazy(() => import("./components/Header"));
const Body = lazy(() => import("./pages/Body"));
const About = lazy(() => import("./pages/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const Error = lazy(() => import("./components/Error"));

const Home = () => {
  const [userName, setUserName] = useState("");

  // authentication
  useEffect(() => {
    // Make an Api call and get the username and password
    const data = {
      name: "Remo"
    }
    setUserName(data.name);
  }, [])

  return (
    // Default
    <Suspense fallback={<Loader />}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        {/* Remo */}
        {/* <UserContext.Provider value={{loggedInUser : "Rimo"}}> */}
          {/* Rimo */}
          <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </UserContext.Provider>
    </Suspense>
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
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={Router} />);
