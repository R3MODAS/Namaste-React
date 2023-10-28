import { useParams } from "react-router-dom";
import { MENU_IMG_CDN } from "../utils/constants";
import { BiSolidUpArrow } from "react-icons/bi";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi"

const RestaurantMenu = () => {
    const { resId } = useParams();

    const ResInfo = useRestaurantMenu(resId);

    if (ResInfo?.length === 0) {
        return <ShimmerUi />
    }

    return (
        <div className="container mx-auto">

            <ul className="p-[20px]">
                {
                    ResInfo?.map((item) => (
                        <li id={item.card.card.title} key={item.card.card.title}>
                            <h3 className="mt-10 mb-10 flex justify-between items-center text-customblack-3 font-ProximaNovaBold text-xl">
                                {item.card.card.title} ({item.card.card.itemCards.length})
                                <BiSolidUpArrow />
                            </h3>
                            <div>
                                {item.card.card.itemCards.map((item) => (
                                    <div key={item.card.info.id}>
                                        <div className="flex justify-between">
                                            <div className="w-[700px]">
                                                <h4 className="text-base text-customblack-3 mr-2 font-ProximaNovaSemiBold">{item.card.info.name}</h4>
                                                <span className="text-sm MenuPrice text-customblack-3 font-ProximaNovaMed">{item.card.info.price / 100}</span>
                                                <p className="text-sm mt-[10px] font-ProximaNovaThin text-customblack-4">{item.card.info.description}</p>
                                            </div>
                                            <div className="w-[118px] h-[96px] relative">
                                                {
                                                    item.card.info.imageId && <img className="w-full h-full rounded-md object-cover" src={MENU_IMG_CDN + item.card.info.imageId} alt="menu-img" />
                                                }
                                                <button className="absolute bottom-0 left-[-10%] w-[70px] h-[30px] flex justify-center items-center translate-x-2/4 cursor-pointer bg-gray-50 border border-black text-sm">Add</button>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                    </div>
                                )
                                )}
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default RestaurantMenu