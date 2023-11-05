import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MENU_API, STAR_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi"
import RestaurantCategory from "./RestaurantCategory";
import { AiOutlineArrowLeft } from "react-icons/ai"

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [ResInfo, setResInfo] = useState({});
    const [ResMenuInfo, setResMenuInfo] = useState([]);
    const [ShowIndex, setShowIndex] = useState(0);
    const navigate = useNavigate();

    const handleShowItem = (index) => {
        if (index === ShowIndex) {
            setShowIndex(null)
        }
        else {
            setShowIndex(index)
        }
    }

    useEffect(() => {
        fetchResMenu();
    }, [])

    const fetchResMenu = async () => {
        const res = await fetch(MENU_API + resId);
        const json = await res.json();
        setResInfo(json?.data.cards[0].card.card.info);
        const Type = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const categories = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => (item?.card?.card["@type"] === Type));
        setResMenuInfo(categories);
    }

    const { name, cuisines, areaName, sla, avgRatingString, totalRatingsString } = ResInfo;

    const PrevPage = () => {
        navigate(-1);
    }

    if (ResMenuInfo?.length <= 0) {
        return <ShimmerUi />
    }

    return (
        <div className="container mx-auto p-[20px] relative">

            <div className="absolute top-5 left-60 text-2xl cursor-pointer" onClick={PrevPage}>
                <AiOutlineArrowLeft />
            </div>

            <div className="w-6/12 mx-auto flex justify-between items-center m-2">
                <div>
                    <h2 className="font-ProximaNovaSemiBold text-xl">{name}</h2>
                    <p className="text-sm text-customblack-5 font-ProximaNovaThin">{cuisines.join(", ")}</p>
                    <div className="text-sm text-customblack-5 font-ProximaNovaThin">{areaName}, {sla.lastMileTravelString}</div>
                </div>
                <div>
                    <div className="flex items-center justify-center mb-2 gap-1 font-ProximaNovaMed">
                        <img src={STAR_URL} alt="star-img" className="w-5" />
                        <span className="text-sm">{avgRatingString}</span>
                    </div>
                    <div className="font-ProximaNovaMed text-sm text-customblack-2">{totalRatingsString}</div>
                </div>
            </div>

            <ul className="w-6/12 mx-auto m-5">
                {
                    ResMenuInfo.map((category, index) => (
                        <RestaurantCategory key={category.card.card.title} data={category?.card?.card} ShowItems={index === ShowIndex ? true : false} handleShowItem={() => handleShowItem(index)} />
                    ))
                }
            </ul>

        </div>
    )
}

export default RestaurantMenu