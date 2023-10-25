import { useParams } from "react-router-dom";
import Styles from "./Menu.module.css";
import {MENU_IMG_CDN } from "../../utils/constants";
import { BiSolidUpArrow } from "react-icons/bi";
import ShimmerMenu from "../ShimmerUi/ShimmerMenu";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const ResInfo = useRestaurantMenu(resId); // Custom Hook

    if(ResInfo.length === 0){
        return <ShimmerMenu />
    }

    return (
        <div className={`Container`}>

            <ul className={Styles.MenuItemContainer}>
                {
                    ResInfo.map((item, index) => (
                        <li id={item.card.card.title} key={item.card.card.title}>
                            <h3 className={Styles.MenuCategory}>
                                {item.card.card.title} ({item.card.card.itemCards.length})
                                <BiSolidUpArrow />
                            </h3>
                            <div>
                                {item.card.card.itemCards.map((item) => (
                                    <div key={item.card.info.id}>
                                        <div className={Styles.MenuItem}>
                                            <div className={Styles.MenuLeft}>
                                                <h4 className={Styles.MenuItemName}>{item.card.info.name}</h4>
                                                <span className={Styles.MenuItemPrice}>{item.card.info.price / 100}</span>
                                                <p className={Styles.MenuItemDesc}>{item.card.info.description}</p>
                                            </div>
                                            <div className={Styles.MenuRight}>
                                                {
                                                    item.card.info.imageId && <img src={MENU_IMG_CDN + item.card.info.imageId} alt="menu-img" />
                                                }
                                                <button className={Styles.MenuAddBtn}>Add</button>
                                            </div>
                                        </div>
                                        <div className={Styles.Divider}></div>
                                    </div>
                                )
                                )}
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default RestaurantMenu