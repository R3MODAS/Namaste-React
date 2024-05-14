import RestaurantInfo from '@/components/Menu/RestaurantInfo'
import ShimmerMenu from '@/components/Shimmer/ShimmerMenu'
import { useRestaurantMenu } from '@/hooks/useRestaurantMenu'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const { resId } = useParams()
  const { ResInfo, ResMenu } = useRestaurantMenu(resId)

  if (Object.keys(ResMenu).length <= 0) {
    return <ShimmerMenu />
  }

  return (
    <div className="mx-auto mt-24 mb-10 2xl:w-1/2 md:w-4/5 sm:px-7 px-2">
      <>
        <RestaurantInfo ResInfo = {ResInfo} />
        <hr className='border-1 border-dashed border-b-[#d3d3d3] my-4'></hr>

        {
          ResInfo?.isOpen ?
            <>
              <ul className='main-menu-container'>
                {

                }
              </ul>
            </>
            :
            <h2 className="resMsg font-ProximaNovaMed text-sm">Uh-oh! The outlet is not accepting orders at the moment. We&apos;re working to get them back online</h2>
        }
      </>
    </div>
  )
}

export default Menu