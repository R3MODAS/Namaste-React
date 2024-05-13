import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useRestaurant = () => {
    const [CarouselData, setCarouselData] = useState([])
    const [TopChainRestaurants, setTopChainRestaurants] = useState([])
    const [AllRestaurants, setAllRestaurants] = useState([])
    const [FilteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const userLocation = useSelector(state => state.location.userLocation)
    const lat = userLocation?.lat ? userLocation?.lat : 12.9715987
    const lng = userLocation?.lng ? userLocation?.lng : 77.5945627    

    const fetchRestaurantData = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_FOOD_APP_BASE_URL + `/api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            if (!res.ok) {
                const err = res.status
                throw new Error(err.message)
            }
            else {
                const json = await res.json()
                setCarouselData(json?.data?.cards?.find(card => card?.card?.card?.id?.includes("whats_on"))?.card?.card?.imageGridCards?.info)

                setTopChainRestaurants(json?.data?.cards?.find(card => card?.card?.card?.id?.includes("top_brands"))?.card?.card?.gridElements?.infoWithStyle?.restaurants)

                setAllRestaurants(json?.data?.cards?.find(card => card?.card?.card?.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants)

                setFilteredRestaurants(json?.data?.cards?.find(card => card?.card?.card?.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    return [CarouselData, setCarouselData, TopChainRestaurants, setTopChainRestaurants, AllRestaurants, setAllRestaurants, FilteredRestaurants, setFilteredRestaurants]
}
