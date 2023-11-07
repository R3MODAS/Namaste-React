
import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [ResInfo, setResInfo] = useState({});
    const [ResMenuInfo, setResMenuInfo] = useState([]);
    const [ShowIndex, setShowIndex] = useState(0);

    const handleShowItem = (currInd) => {
        if (currInd === ShowIndex) {
            setShowIndex(null);
        } else {
            setShowIndex(currInd);
        }
    }

    useEffect(() => {
        fetchRestaurantMenu();
    }, [])

    const fetchRestaurantMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        const RestaurantType = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const categories = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card.card["@type"] === RestaurantType)
        setResMenuInfo(categories);
    }

    const { name, city, cuisines, avgRating, totalRatingsString, isOpen } = ResInfo;

    if (ResMenuInfo?.length <= 0) {
        return <ShimmerMenu />
    }

    return (
        <>

            {
                isOpen ?
                    <div className="w-6/12 mx-auto menu-container p-[20px]">
                        {/* Restaurant Name */}
                        <div className="flex items-start justify-between pt-5 mb-6">
                            <div>
                                <h2 className="text-customcolor-6 text-xl capitalize mb-1 font-ProximaNovaSemiBold">{name}</h2>
                                <p className="text-customcolor-5 text-sm font-ProximaNovaThin">{cuisines?.join(", ")}</p>
                                <p className="text-customcolor-5 text-sm font-ProximaNovaThin">{city}</p>
                            </div>
                            <div>
                                <button className="p-[8px] cursor-pointer rounded resRating">
                                    <div className="flex items-center gap-1 justify-center avgRating pb-[10px] mb-[8px]">
                                        <img src="/images/star-icon.png" alt="star-img" />
                                        <span className="font-ProximaNovaSemiBold text-sm">{avgRating}</span>
                                    </div>
                                    <span className="font-ProximaNovaSemiBold tracking-tight text-xs totalRatings">{totalRatingsString}</span>
                                </button>
                            </div>
                        </div>
                        <div className="dottedDivider"></div>
                        {/* Restaurant Category */}
                        <ul>
                            {
                                ResMenuInfo?.map((category, index) => (
                                    <li key={category.card.card.title}>
                                        <RestaurantCategory data={category.card.card} ShowItems={
                                            index === ShowIndex ? true : false
                                        } handleShowItem={() => handleShowItem(index)} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    :
                    <div className="w-6/12 mx-auto menu-container p-[20px]">
                        {/* Restaurant Name */}
                        <div className="flex items-start justify-between pt-5 mb-6">
                            <div>
                                <h2 className="text-customcolor-6 text-xl capitalize mb-1 font-ProximaNovaSemiBold">{name}</h2>
                                <p className="text-customcolor-5 text-sm font-ProximaNovaThin">{cuisines?.join(", ")}</p>
                                <p className="text-customcolor-5 text-sm font-ProximaNovaThin">{city}</p>
                            </div>
                            <div>
                                <button className="p-[8px] cursor-pointer rounded resRating">
                                    <div className="flex items-center gap-1 justify-center avgRating pb-[10px] mb-[8px]">
                                        <img src="/images/star-icon.png" alt="star-img" />
                                        <span className="font-ProximaNovaSemiBold text-sm">{avgRating}</span>
                                    </div>
                                    <span className="font-ProximaNovaSemiBold tracking-tight text-xs totalRatings">{totalRatingsString}</span>
                                </button>
                            </div>
                        </div>
                        <h2 className="resMsg font-ProximaNovaThin text-base">Uh-oh! The outlet is not accepting orders at the moment. We&apos;re working to get them back online</h2>
                    </div>
            }

        </>
    )
}

export default RestaurantMenu