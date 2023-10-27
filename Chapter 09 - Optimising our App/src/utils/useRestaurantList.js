import { RES_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantList = () => {
    const [RestaurantList, SetRestaurantList] = useState([]);
    const [FilteredList, SetFilteredList] = useState([]);

    useEffect(() => {
        FetchResData();
    }, [])

    const FetchResData = async () => {
        const res = await fetch(RES_API);
        const json = await res.json();
        const ArrayofCards = json?.data?.cards;
        const restaurant_list = "restaurant_grid_listing";

        const cardObj = ArrayofCards.find((res) => res?.card?.card?.id === restaurant_list);
        SetRestaurantList(cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetFilteredList(cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return [FilteredList, RestaurantList];
}

export default useRestaurantList