import { Outlet } from "react-router-dom"
import Navbar from "@/components/Common/Navbar"
import ScrollToTop from "@/components/Common/ScrollToTop"
import LocationSidebar from "./components/Sidebar/LocationSidebar"
import LoginSidebar from "./components/Sidebar/LoginSidebar"
import { Provider } from "react-redux"
import { store } from "./utils/store"

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <LocationSidebar />
      <LoginSidebar />
      <ScrollToTop />
    </Provider>
  )
}

export default App
