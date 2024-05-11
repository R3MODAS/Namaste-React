import { RES_IMG, RES_IMG_GRAY } from "@/utils/constants"

const TopChainCard = ({ info }) => {

    const { name, cloudinaryImageId, avgRating, sla, cuisines, areaName, availability } = info
    const { slaString } = sla
    const { opened } = availability

    const truncateCuisine = (str) => {
        return str.length >= 33 ? str.slice(0, 33) + "..." : str
    }

    const truncateResName = (str) => {
        return str.length >= 30 ? str.slice(0, 30) + "..." : str
    }

    return (
        <>
            {
                opened ?
                    <>
                        <div className='w-72 h-48'>
                            <img className='w-full h-full object-cover rounded-2xl' src={RES_IMG + cloudinaryImageId} alt={name} />
                        </div>
                        <div className="pt-3 pl-3">
                            <h3 className="font-SfProMed text-lg text-color-1">{truncateResName(name)}</h3>
                            <div className="flex items-center font-SfProMed">
                                <div className="flex items-center gap-x-1">
                                    <img className="w-5" src="assets/rating.png" alt="rating" />
                                    <span>{avgRating} • </span>{slaString}
                                </div>
                            </div>
                            <div className="leading-5 pt-1">
                                <p className="font-SfProReg text-color-3">{truncateCuisine(cuisines?.join(", "))}</p>
                                <span className="font-SfProReg text-color-3">{areaName}</span>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className='w-72 h-48'>
                            <img className='w-full h-full object-cover rounded-2xl' src={RES_IMG_GRAY + cloudinaryImageId} alt={name} />
                        </div>
                        <div className="pt-3 pl-3">
                            <h3 className="font-SfProMed text-lg text-color-1">{truncateResName(name)}</h3>
                            <div className="flex items-center font-SfProMed">
                                <div className="flex items-center gap-x-1">
                                    <img className="w-5" src="assets/rating.png" alt="rating" />
                                    <span>{avgRating} • </span>{slaString}
                                </div>
                            </div>
                            <div className="leading-5 pt-1">
                                <p className="font-SfProReg text-color-3">{truncateCuisine(cuisines?.join(", "))}</p>
                                <span className="font-SfProReg text-color-3">{areaName}</span>
                            </div>
                        </div>

                    </>
            }

        </>
    )
}

export default TopChainCard