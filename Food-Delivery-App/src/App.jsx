import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

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
