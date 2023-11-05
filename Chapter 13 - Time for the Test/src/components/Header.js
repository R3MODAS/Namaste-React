import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState("Login");

    const handleToggle = () => {
        setToggle(
            toggle === "Login" ? "Logout" : "Login"
        )
    }

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    
    return(
        <header className="bg-black p-3">
            <nav className="container mx-auto flex items-center justify-between">
                <Link to="/">
                    <img src={LOGO_URL} alt="logo" className="h-16 rounded-full" />
                </Link>

                <ul className="flex gap-14 items-center text-white font-GrotMed">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <li onClick={handleToggle}><button className="bg-white text-black h-10 w-20 rounded cursor-pointer">{toggle}</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;