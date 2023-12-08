import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Home