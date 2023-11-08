import { useState } from "react"
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import ShimmerUi from "../components/ShimmerUi";
import useRestaurant from "../Hooks/useRestaurant";
import { IMG_CAROUSEL, RES_API } from "../utils/constants";

const Home = () => {

    const [AllRestaurants, FilteredRestaurants, setAllRestaurants, setFilteredRestaurants, BannerInfo, setBannerInfo] = useRestaurant(RES_API);
    const [SearchText, setSearchText] = useState("");
    const [ErrorMessage, setErrorMessage] = useState("");

    const handleOffer = () => {
        setFilteredRestaurants(AllRestaurants.filter((res) => res.info.aggregatedDiscountInfoV3))
    }

    const handleFastDelivery = () => {
        setFilteredRestaurants(AllRestaurants.filter((res) => res?.info?.sla?.deliveryTime < 30))
    }

    const handleTopRated = () => {
        setFilteredRestaurants(AllRestaurants.filter((res) => res?.info?.avgRating > 4.0))
    }

    const handleSearch = () => {
        if (SearchText !== "") {
            const filteredData = AllRestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(SearchText?.toLowerCase()));
            setFilteredRestaurants(filteredData);
            setErrorMessage("");
            if (filteredData?.length === 0) {
                setErrorMessage(
                    `Sorry, we couldn't find any results for "${SearchText}"`
                )
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(AllRestaurants);
        }
    }

    const handleRange300to600 = () => {
        let lowRange = "300";
        let highRange = "600";
        const filterPrice = AllRestaurants.filter((res) => {
            const price = res?.info?.costForTwo?.substring(1, 4)
            if (price >= lowRange && price <= highRange) {
                return price;
            }
        })
        setFilteredRestaurants(filterPrice);
    }

    const handleRangelessThan300 = () => {
        let range = "300";
        const filterPrice = AllRestaurants.filter((res) => {
            const price = res?.info?.costForTwo?.substring(1, 4)
            if (price <= range) {
                return price;
            }
        })
        setFilteredRestaurants(filterPrice);
    }

    if (AllRestaurants?.length === 0 && FilteredRestaurants?.length === 0) {
        return <ShimmerUi />
    }

    return (
        <div className="container mx-auto">
            
            <h2 className="font-GrotBlack text-2xl pt-5 pb-5">Best offers for you</h2>
            <div className="flex items-center gap-5">
                {
                    BannerInfo?.map((imgCard) => (
                        <div key={imgCard.id} className="w-[425px] h-[252px]">
                            <img src={IMG_CAROUSEL + imgCard?.imageId} alt="img" className="object-cover" />
                        </div>
                    ))
                }
            </div>

            <h2 className="font-GrotBlack text-2xl pt-10 pb-5">Restaurants with online food delivery in Kanchrapara</h2>

            <div className="buttons flex items-center justify-between pr-24 mb-5 font-GrotReg">
                <div className="flex items-center gap-3">
                    <button className="filterBtn" onClick={handleTopRated}>Ratings 4.0+</button>
                    <button className="filterBtn" onClick={handleFastDelivery}>Fast Delivery</button>
                    <button className="filterBtn" onClick={handleOffer}>Offers</button>
                    <button className="filterBtn" onClick={handleRange300to600}>Rs. 300-Rs. 600</button>
                    <button className="filterBtn" onClick={handleRangelessThan300}>Less than Rs. 300</button>
                </div>
                <div className="flex items-center">
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} value={SearchText} onKeyUp={handleSearch} className="filterBtn searchInput" placeholder="Search" />
                </div>
            </div>

            {ErrorMessage && <div className="text-center mb-3 mt-5 font-ProximaNovaBlack text-2xl">{ErrorMessage}</div>}

            <div className="flex flex-wrap items-center gap-10">
                {
                    FilteredRestaurants?.map((res) => (
                        <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}>
                            <RestaurantCard resInfo={res?.info} />
                        </Link>
                    ))
                }
            </div>

        </div>
    )

}

export default Home