import RestaurantCard, { OfferResCard } from "../components/RestaurantCard"
import ShimmerUi from "../components/ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Online from "../components/Online";
import { useState, useEffect } from "react";
import { RES_API } from "../utils/constants";

const Home = () => {
    const [RestaurantList, SetRestaurantList] = useState([]);
    const [FilteredList, SetFilteredList] = useState([]);
    const [SearchText, setSearchText] = useState("");
    const OnlineStatus = useOnlineStatus();

    useEffect(() => {
        FetchResData();
    }, [])

    const FetchResData = async () => {
        try {
            const res = await fetch(RES_API);
            const json = await res.json();
            const ArrayofCards = json?.data?.cards;
            const restaurant_list = "restaurant_grid_listing";
            const cardObj = ArrayofCards.find((res) => res?.card?.card?.id === restaurant_list);
            SetRestaurantList(cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            SetFilteredList(cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearch = () => {
        const FilterSearch = RestaurantList.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
        SetFilteredList(FilterSearch);
    }

    const handleTopRated = () => {
        const FilterTopRated = RestaurantList.filter((res) => res.info.avgRating > 4);
        SetFilteredList(FilterTopRated)
    }

    const RestaurantCardOffer = OfferResCard(RestaurantCard);

    if (RestaurantList.length <= 0) {
        return <ShimmerUi />
    }

    if (OnlineStatus === false) {
        return <Online />
    }

    return (
        <div className="container mx-auto">

            <div className="flex items-center justify-center gap-5 m-5 font-GrotReg">
                <input className="w-64 h-14 px-6 text-customblack-1 rounded-lg border border-black" onKeyUp={handleSearch} type="text" placeholder="Search Here..." />
                <button className="bg-black text-white w-64 h-14 rounded-lg" onClick={handleTopRated}>Top Rated Restaurants</button>
            </div>

            {/* Restaurant Card Section */}
            <div className="flex justify-center items-center flex-wrap gap-10 font-GrotReg">
                {
                    FilteredList?.map((res) => (
                        <Link className="relative group" key={res.info.id} to={"/restaurants/" + res.info.id}>
                            {
                                res.info.aggregatedDiscountInfoV3 ? <RestaurantCardOffer resInfo={res.info} /> : <RestaurantCard resInfo={res.info} />
                            }
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Home;