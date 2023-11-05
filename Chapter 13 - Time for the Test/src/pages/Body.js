import RestaurantCard, { OfferResCard } from "../components/RestaurantCard"
import ShimmerUi from "../components/ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Online from "../components/Online";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
    const [RestaurantList, FilteredList, SetFilteredList] = useRestaurantList();
    const OnlineStatus = useOnlineStatus();

    const handleSearch = (e) => {
        const SearchText = e.target.value;
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
            <div className="m-10 flex justify-center items-center flex-wrap gap-10 font-GrotReg">
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

export default Body;