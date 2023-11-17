import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  )
}

export default App
