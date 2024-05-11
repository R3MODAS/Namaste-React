import { Outlet } from "react-router-dom"
import Navbar from "./components/Common/Navbar"
import ScrollToTop from "./components/Common/ScrollToTop"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
    </>
  )
}

export default App
