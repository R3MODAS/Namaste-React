import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/responsive.css";
import Header from "./components/Header/Header"
import Body from "./components/Body/Body";

const Home = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Home/>);
