import Styles from "./Body.module.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import ShimmerUi from "../ShimmerUi/ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Online from "../NetworkStatus/Online";
import useRestaurantList from "../../utils/useRestaurantList";

const Body = () => {
    const [RestaurantList, FilteredList] = useRestaurantList();
    const OnlineStatus = useOnlineStatus();

    const handleSearch = (e) => {
        const SearchText = e.target.value;
        const FilterSearch = RestaurantList.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
        SetFilteredList(FilterSearch);
    }

    const handleTopRated = () => {
        const FilterTopRated = RestaurantList.filter((res) => res.info.avgRating > 4);
        SetFilteredList(FilterTopRated);
    }

    if (RestaurantList?.length === 0) {
        return <ShimmerUi />
    }

    if(OnlineStatus === false){
        return <Online />
    }

    return (
        <div className={`Container ${Styles.BodyContainer}`}>
            <div className={Styles.Buttons}>
                <input onKeyUp={handleSearch} type="text" className={Styles.SearchBar} placeholder="Search Here..." />
                <button onClick={handleTopRated} className={`${Styles.TopBtn} CommonBtn`}>Top Rated Restaurants</button>
            </div>
            <div className={`Container ${Styles.ResContainer}`}>
                {
                    FilteredList?.map((res) => (
                        <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                            <RestaurantCard resInfo={res.info} />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Body;