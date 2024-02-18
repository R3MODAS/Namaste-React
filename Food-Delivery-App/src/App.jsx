import { Route, Routes } from "react-router-dom"
import { Checkout, Home } from "./pages"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App