import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <ScrollToTop />
    </>
  )
}

export default App