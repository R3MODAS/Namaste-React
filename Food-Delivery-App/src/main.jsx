import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Checkout, Error, Home } from './pages'
import RestaurantMenu from './components/RestaurantMenu'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)
