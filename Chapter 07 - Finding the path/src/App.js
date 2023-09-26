import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import "./css/index.css";
import "./css/responsive.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    errorElement : <Error />
  },
  {
    path : "/about",
    element : <About />
  },
  {
    path : "/contact",
    element : <Contact />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
