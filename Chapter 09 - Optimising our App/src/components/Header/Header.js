import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import Styles from "./Header.module.css";
import useOnlineStatus from "../../utils/useOnlineStatus"

const Body = () => {
    const OnlineStatus = useOnlineStatus();
    return(
        <header className={Styles.Header}>
            <nav className={`Container ${Styles.Navbar}`}>
                <Link to="/">
                    <img className={Styles.Logo} src={LOGO_URL} alt="logo" />
                </Link>

                <ul className={Styles.NavItems}>
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