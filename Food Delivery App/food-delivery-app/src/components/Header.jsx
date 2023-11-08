import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
  return (
    <header className="p-3 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="h-16 rounded-full" />
        </Link>

        <ul className="flex gap-14 items-center text-customblack-1 font-GrotMed">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart(0)</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header