import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import LocationSidebar from "./components/LocationSidebar"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <LocationSidebar />
      <ScrollToTop />
    </>
  )
}

export default App