
import { GRAY_RES_IMG, RES_IMG } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resInfo } = props;
    const { name, cloudinaryImageId, avgRating, sla, cuisines, areaName, isOpen } = resInfo;

    const truncateCuisines = (cuisines) => {
        return cuisines.length >= 35 ? cuisines.substring(0, 35) + "..." : cuisines
    }

    return (
        <div className='transition-transform hover:scale-95 tracking-tight w-[330px] h-[320px]'>
            {
                isOpen ? <img src={RES_IMG + cloudinaryImageId} className="w-[330px] h-[220px] object-cover rounded-2xl" alt="res-img" /> :
                    <img src={GRAY_RES_IMG + cloudinaryImageId} className="w-[330px] h-[220px] object-cover rounded-2xl" alt="res-img" />
            }
            <h3 className='font-GrotBold text-customblack-1 text-lg'>{name}</h3>

            {
                avgRating ? <div className="flex items-center gap-1">
                    <div>
                        <img src="images/star-icon.png" alt="star-icon" />
                    </div>

                    <div>
                        <span className='text-customblack-1 font-GrotBold text-base'>{avgRating}  •  {sla.slaString}</span>
                    </div>
                </div> :
                    <span className='text-customblack-1 font-GrotBold text-base'>{sla.slaString}</span>

            }
            <p className='font-GrotThin text-base text-customblack-2'>{truncateCuisines(cuisines.join(", "))}</p>
            <span className='font-GrotThin text-base text-customblack-2'>{areaName}</span>
        </div>
    )
}

export default RestaurantCard
