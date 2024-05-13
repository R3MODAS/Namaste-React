import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@/App'
import { Checkout, Home, Menu  } from '@/pages'
import Error from '@/components/Common/Error.jsx'
import '@/styles/index.css'
import ShimmerHome from '@/components/Shimmer/ShimmerHome'
import ShimmerMenu from '@/components/Shimmer/ShimmerMenu'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<ShimmerHome />}><Home /></Suspense> 
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/restaurants/:resId",
        element: <Suspense fallback={<ShimmerMenu />}><Menu /></Suspense>
      }
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
