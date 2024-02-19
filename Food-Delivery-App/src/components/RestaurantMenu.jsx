import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [RestaurantInfo, setRestaurantInfo] = useState({});
  const [RestaurantMenu, setRestaurantMenu] = useState([])

  useEffect(() => {
    fetchRestaurantMenu();
  }, [])

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(`${RESTAURANT_MENU_API}/${resId}`)
      if (!response.ok) {
        const err = response.status;
        throw new Error(err)
      }
      else {
        const json = await response.json();
        const RestaurantItemType = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        const RestaurantMenuData = json?.data?.cards.find(x => x?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(x => x?.card?.card?.["@type"] === RestaurantItemType)
        const RestaurantInfo = json?.data?.cards.find(x => (x?.card?.card?.info))?.card?.card?.info
        setRestaurantMenu(RestaurantMenuData)
        setRestaurantInfo(RestaurantInfo)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>RestaurantMenu</div>
  )
}

export default RestaurantMenu