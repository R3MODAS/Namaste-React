import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="flex">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Home