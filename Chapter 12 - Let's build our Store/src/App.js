import ReactDOM from "react-dom/client";
import "./css/index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux"; // acts as a bridge between react and redux as it is providing the store to the react
import Header from "./components/Header";
import About from "./pages/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import ShimmerUi from "./components/ShimmerUi";
import appStore from "./utils/appStore";
const Body = lazy(() => import("./pages/Body"));

const Home = () => {
  return (
    <Provider store={appStore}>
        <Header />
        <Outlet />
    </Provider>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Suspense fallback = {<ShimmerUi />}><Body /></Suspense>
      }, {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={Router} />);
