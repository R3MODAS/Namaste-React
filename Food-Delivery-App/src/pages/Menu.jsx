import { useRestaurantMenu } from '@/hooks/useRestaurantMenu'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const {resId} = useParams()
  useRestaurantMenu()

  return (
    <div className='my-24 container mx-auto'>RestaurantMenu</div>
  )
}

export default Menu