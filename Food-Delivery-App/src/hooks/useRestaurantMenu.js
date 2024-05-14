import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useRestaurantMenu = (resId) => {
    const [ResInfo, setResInfo] = useState({})
    const [ResMenu, setResMenu] = useState({})

    useEffect(() => {
        fetchRestaurantMenuData()
    }, [])

    const userLocation = useSelector(state => state.location.userLocation)
    const lat = userLocation?.lat ? userLocation?.lat : 12.9715987
    const lng = userLocation?.lng ? userLocation?.lng : 77.5945627

    const fetchRestaurantMenuData = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_FOOD_APP_BASE_URL + `/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`)
            if (!res.ok) {
                const err = res.status
                throw new Error(err.message)
            }
            else {
                const json = await res.json()
                setResInfo(json?.data?.cards?.find(card => card?.card?.card["@type"]?.includes("food.v2.Restaurant"))?.card?.card?.info)
                setResMenu(json?.data?.cards?.find(card => card?.groupedCard))
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    return { ResInfo, ResMenu }
}