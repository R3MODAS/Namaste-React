import { useEffect, useState } from "react";
import { RESTAURANT_API} from "../utils/constants"

const useRestaurant = () => {
    const [ImageCarousel, setImageCarousel] = useState([]);
    const [TopChains, setTopChains] = useState([]);
    const [AllRestaurants, setAllRestaurants] = useState([]);
    const [FilteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const fetchRestaurantData = async () => {
        try {
            const response = await fetch(RESTAURANT_API);
            if (!response.ok) {
                const err = response.status;
                throw new Error(err)
            }
            else {
                const json = await response.json();

                const restaurants = json?.data?.cards?.find((x) => x?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants

                const imgCarousel = json?.data?.cards?.find(x => x?.card?.card?.id === "whats_on_your_mind")?.card?.card?.gridElements?.infoWithStyle?.info

                const topChains = json?.data?.cards?.find(x => x?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants

                setImageCarousel(imgCarousel)
                setTopChains(topChains)
                setAllRestaurants(restaurants)
                setFilteredRestaurants(restaurants)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return [ImageCarousel, setImageCarousel, TopChains, setTopChains, AllRestaurants, setAllRestaurants, FilteredRestaurants, setFilteredRestaurants]
}

export default useRestaurant