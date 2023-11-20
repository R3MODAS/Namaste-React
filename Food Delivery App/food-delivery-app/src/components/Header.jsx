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
            <img src={LOGO_URL} alt="logo" className="h-[60px] rounded-full border border-black" />
          </Link>
          <div className="ml-4 cursor-pointer text-lg font-ProximaNovaBold text-black">
            Spicy Pricey
          </div>

        </div>

        <ul className="flex gap-16 items-center text-customblack-1 font-GrotMed">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="ml-6 relative">
            <Link to="/cart">
              {
                cartItems.length > 0 ? <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-[26px]">
                    <svg className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-ProximaNovaSemiBold text-white">{cartItems.length}</span>
                  </span>
                </> : <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-7">
                    <svg className="fill-white stroke-2 stroke-[#282c3f] overflow-hidden" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-ProximaNovaSemiBold">{cartItems.length}</span>
                  </span>
                </>
              }
              <span className="font-ProximaNovaMed text-base">Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header