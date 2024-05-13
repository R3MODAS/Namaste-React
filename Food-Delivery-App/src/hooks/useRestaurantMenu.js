import { useEffect } from "react"

export const useRestaurantMenu = (resId) => {
    useEffect(() => {
        fetchRestaurantMenuData()
    }, [])

    const fetchRestaurantMenuData = async () => {
        try {
            // const res = await fetch(import.meta.env.VITE_FOOD_APP_BASE_URL + `/api/proxy/swiggy/dapi`)
        } catch (err) {
            console.log(err.message)
        }
    }

}