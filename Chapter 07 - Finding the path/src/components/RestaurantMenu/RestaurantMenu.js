import { useParams } from "react-router-dom";
import Styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import { MENU_API, MENU_IMG_CDN } from "../../utils/constants";
import { BiSolidUpArrow } from "react-icons/bi";
import ShimmerMenu from "../ShimmerUi/ShimmerMenu";

const RestaurantMenu = () => {
    const [ResInfo, setResInfo] = useState([]);
    const { resId } = useParams();

    useEffect(() => {
        fetchResMenu();
    }, [])

    const fetchResMenu = async () => {
        const res = await fetch(MENU_API + resId);
        const json = await res.json();
        const Type = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const FilteredItems = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(item => (item.card.card["@type"] === Type));
        setResInfo(FilteredItems);
    }

    const handleMenu = (e) => {
        const tar = e.target;
        console.log(tar)
    }

    if(ResInfo.length === 0){
        return <ShimmerMenu />
    }

    return (
        <div className={`Container`}>

            <ul className={Styles.MenuItemContainer}>
                {
                    ResInfo.map((item, index) => (
                        <li id={item.card.card.title} key={item.card.card.title}>
                            <h3 className={Styles.MenuCategory} onClick={handleMenu}>
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