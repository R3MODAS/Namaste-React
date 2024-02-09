import { Route, Routes } from "react-router-dom"
import { Checkout, Home } from "./pages"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App