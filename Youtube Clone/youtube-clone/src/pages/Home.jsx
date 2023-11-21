import MainContainer from "../components/MainContainer"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="flex">
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Home