import { LOGO_URL } from "../../utils/constants";
import Styles from "./Header.module.css";

const Body = () => {
    return(
        <header className={Styles.Header}>
            <nav className={`Container ${Styles.Navbar}`}>
                <img className={Styles.Logo} src={LOGO_URL} alt="logo" />

                <ul className={Styles.NavItems}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Body;