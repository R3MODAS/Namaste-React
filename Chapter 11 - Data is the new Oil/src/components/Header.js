import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const OnlineStatus = useOnlineStatus();
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
                    <li><Link to="/">Cart</Link></li>
                    <li>Online Status : 
                        {OnlineStatus ? " ✅ " : " 🔴 "}
                        </li>
                </ul>
            </nav>
        </header>
    )
}

export default Body;