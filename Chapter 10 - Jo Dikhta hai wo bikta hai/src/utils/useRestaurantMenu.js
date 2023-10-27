import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ResInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchResMenu();
    }, [])

    const fetchResMenu = async () => {
        const res = await fetch(MENU_API + resId);
        const json = await res.json();
        const Type = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const FilteredItems = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => (item?.card?.card["@type"] === Type));
        setResInfo(FilteredItems);
    }

    return ResInfo;
}

export default useRestaurantMenu;