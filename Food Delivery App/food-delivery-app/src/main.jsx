import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import RestaurantMenu from './components/RestaurantMenu.jsx'

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
