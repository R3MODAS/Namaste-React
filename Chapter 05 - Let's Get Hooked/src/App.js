import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./css/index.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
