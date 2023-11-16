import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import RestaurantMenu from './components/RestaurantMenu.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Error from './components/Error.jsx'

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
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ],
    errorElement : <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
