import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Checkout, Error, Home } from './pages'
import RestaurantMenu from './components/RestaurantMenu'
import { Suspense } from 'react'
import ShimmerHome from './components/ShimmerHome'
import { Provider } from 'react-redux'
import store from './utils/store'

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
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>)
