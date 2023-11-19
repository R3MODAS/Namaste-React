import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import { useSelector } from "react-redux"

const Header = () => {

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="p-3 shadow-lg fixed w-full z-10 bg-white h-[85px]">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={LOGO_URL} alt="logo" className="h-16 rounded-full" />
          </Link>
          <div className="ml-6 cursor-pointer text-sm font-ProximaNovaThin text-[#686b78]">
            <span>Kanchrapara, West Bengal, India</span>
          </div>

        </div>

        <ul className="flex gap-14 items-center text-customblack-1 font-GrotMed">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart({cartItems.length})</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header