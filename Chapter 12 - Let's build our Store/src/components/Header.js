import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)

    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;
    // console.log(store);
    
    return(
        <header className="bg-black p-3">
            <nav className="container mx-auto flex items-center justify-between">
                <Link to="/">
                    <img src={LOGO_URL} alt="logo" className="h-16 rounded-full" />
                </Link>

                <ul className="flex gap-14 items-center text-white font-GrotMed">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cart">Cart({cartItems.length})</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;