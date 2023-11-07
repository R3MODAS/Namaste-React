import { useEffect, useState } from "react"
import { IMG_CAROUSEL, RES_API } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import ShimmerUi from "../components/ShimmerUi";

const Home = () => {

    const [ResInfo, setResInfo] = useState([]);
    const [Restaurants, setRestaurants] = useState([]);
    const [CopiedRestaurants, setCopiedRestaurants] = useState([]);
    const [SearchRes, setSearchRes] = useState("");
    const [ShowIcon, setShowIcon] = useState(false);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [])

    const fetchRestaurantDetails = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        setResInfo(json?.data?.cards)
        setRestaurants(json?.data?.cards.find((card) => card?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCopiedRestaurants(json?.data?.cards.find((card) => card?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const BestOffers = ResInfo?.find((card) => card?.card?.card?.id === "topical_banner")?.card?.card?.imageGridCards?.info;

    const handleOffer = () => { }
    const handleFastDelivery = () => { }
    const handleTopRated = () => {
        setCopiedRestaurants(Restaurants.filter((res) => res.info.avgRating > 4.0))
    }

    const handleSearch = () => {
        setShowIcon(true);
        setCopiedRestaurants(Restaurants.filter((res) => res.info.name.toLowerCase().includes(SearchRes)))
    }

    if (CopiedRestaurants?.length <= 0) {
        return <ShimmerUi />
    }

    return (
        <div className="container mx-auto">
            {/* Best Offers Section */}
            <h2 className="font-GrotBlack text-2xl pt-5 pb-5">Best offers for you</h2>
            <div className="flex items-center gap-5">
                {
                    BestOffers?.map((imgCard) => (
                        <div key={imgCard.id} className="w-[425px] h-[252px]">
                            <img src={IMG_CAROUSEL + imgCard?.imageId} alt="img" className="object-cover" />
                        </div>
                    ))
                }
            </div>

            {/* Restaurant Section */}
            <h2 className="font-GrotBlack text-2xl pt-10 pb-5">Restaurants with online food delivery in Kanchrapara</h2>

            {/* Filters */}
            <div className="buttons flex items-center justify-between pr-24 mb-5 font-GrotReg">
                <div className="flex items-center gap-3">
                    <button className="filterBtn" onClick={handleTopRated}>Top Rated 4.0+</button>
                    <button className="filterBtn" onClick={handleFastDelivery}>Fast Delivery</button>
                    <button className="filterBtn" onClick={handleOffer}>Offers</button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center">
                        <input type="text" onChange={(e) => setSearchRes(e.target.value)} value={SearchRes} className="filterBtn searchInput" placeholder="Search" />
                        {ShowIcon && <div className="absolute right-0"><AiOutlineClose /></div>}
                    </div>
                    <button className="filterBtn" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-10">
                {CopiedRestaurants?.map((res) => (
                    <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
                        {/* {console.log(res.info.aggregatedDiscountInfoV3)} */}
                        <RestaurantCard resInfo={res.info} />
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Home