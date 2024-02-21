import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [RestaurantInfo, setRestaurantInfo] = useState({});
  const [RestaurantMenu, setRestaurantMenu] = useState([])

  const userLocation = useSelector(store => store.location.userLocation)
  const lat = userLocation?.lat ? userLocation?.lat : 22.51800
  const lng = userLocation?.lng ? userLocation?.lng : 88.38320

  useEffect(() => {
    fetchRestaurantMenu();
  }, [])

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`)
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
      <div className="container mx-auto mt-24 mb-10">
          <h1>Hello</h1>
      </div> 
  )
}

export default RestaurantMenu