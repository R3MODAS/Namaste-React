import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  )
}

export default App