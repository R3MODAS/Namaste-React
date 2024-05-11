import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Checkout, Home, RestaurantMenu } from './pages'
import Error from './components/Common/Error.jsx'

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
        path: "/restaurants/:id",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
