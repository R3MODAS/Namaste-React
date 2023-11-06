import RestaurantCard, { OfferResCard } from "../components/RestaurantCard"
import ShimmerUi from "../components/ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Online from "../components/Online";
import { useState, useEffect } from "react";
import Slider from "../components/Slider";
import { RES_API } from "../utils/constants";

const Home = () => {
    const [RestaurantList, SetRestaurantList] = useState([]);
    const [FilteredList, SetFilteredList] = useState([]);
    const [SearchText, setSearchText] = useState("");
    const [Title, setTitle] = useState("");
    const OnlineStatus = useOnlineStatus();

    useEffect(() => {
        FetchResData();
    }, [])

    const FetchResData = async () => {
        try {
            const res = await fetch(RES_API);
            const json = await res.json();

            // Title of the Restaurant Section
            const titleObj = json?.data?.cards?.find((card) => card?.card?.card["@type"] === "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent")
            setTitle(titleObj.card.card.title);

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
            {/* Image Slider */}
            <Slider />

            {/* Restaurant Section  */}
            {
                Title && <h2 className="font-GrotBlack text-3xl text-center">{Title}</h2>
            }

            {/* Filters */}
            <div className="filter-section flex items-center justify-around mt-3 mb-10">
                <div className="flex items-center justify-center gap-5">
                    <button className="filter-btn shadow-md cursor-pointer font-GrotReg text-sm text-customblack-1 pt-2 pb-2 pl-3 pr-3 rounded-2xl">Fast Delivery</button>
                    <button onClick={handleTopRated} className="filter-btn shadow-md cursor-pointer font-GrotReg text-sm text-customblack-1 pt-2 pb-2 pl-3 pr-3 rounded-2xl">Rating 4.0+</button>
                    <button className="filter-btn shadow-md cursor-pointer font-GrotReg text-sm text-customblack-1 pt-2 pb-2 pl-3 pr-3 rounded-2xl">Offers</button>
                    <button className="filter-btn shadow-md cursor-pointer font-GrotReg text-sm text-customblack-1 pt-2 pb-2 pl-3 pr-3 rounded-2xl">Rs. 300-Rs. 600</button>
                    <button className="filter-btn shadow-md cursor-pointer font-GrotReg text-sm text-customblack-1 pt-2 pb-2 pl-3 pr-3 rounded-2xl">Less than Rs. 300</button>
                </div>

                <div className="flex justify-center gap-5">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={SearchText}
                        type="text" placeholder="Search" className="filter-btn pl-5 w-52 h-12 rounded-lg text-sm font-GrotReg" />
                    <button onClick={handleSearch} className="bg-black rounded-lg text-white w-[120px] text-sm h-12 font-GrotReg">Search</button>
                </div>
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