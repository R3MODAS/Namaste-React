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
import Contact from "./pages/Contact";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
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
    element: <App />,
    children: [
      {
        path: "/",
        element: <Suspense fallback = {<ShimmerUi />}><Home /></Suspense>
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
      },
      {
        path : "/contact",
        element : <Contact />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={Router} />);
