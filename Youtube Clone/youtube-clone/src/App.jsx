import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import { Provider } from "react-redux"
import store from "./utils/store"
import Home from "./pages/Home";
import MainContainer from "./components/MainContainer";
import Watch from "./pages/Watch";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    children : [
      {
        path : "/",
        element : <MainContainer />
      },
      {
        path : "/watch",
        element : <Watch />
      }
    ]
  }
  
])

function App() {
  
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
