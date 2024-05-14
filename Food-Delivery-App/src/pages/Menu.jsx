import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const { resId } = useParams()
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
        console.log(json?.data?.cards)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchRestaurantMenuData()
  }, [])

  return (
    <div className='my-24 container mx-auto'>RestaurantMenu</div>
  )
}

export default Menu