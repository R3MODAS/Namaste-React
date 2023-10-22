import { useEffect, useState } from "react";
import Styles from "./Body.module.css";
import { RES_API } from "../../utils/constants";
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import ShimmerUi from "../ShimmerUi/ShimmerUi";
import { Link } from "react-router-dom";

const Body = () => {
    const [RestaurantList, SetRestaurantList] = useState([]);
    const [FilteredList, SetFilteredList] = useState([]);


    useEffect(() => {
        FetchResData();
    }, [])

    const FetchResData = async () => {
        const res = await fetch(RES_API);
        const json = await res.json();
        const ArrayofCards = json.data.cards;
        const restaurant_list = "restaurant_grid_listing";

        const cardObj = ArrayofCards.find((res) => res.card.card.id === restaurant_list);
        SetRestaurantList(cardObj.card.card.gridElements.infoWithStyle.restaurants);
        SetFilteredList(cardObj.card.card.gridElements.infoWithStyle.restaurants);
    }

    const handleSearch = (e) => {
        const SearchText = e.target.value;
        const FilterSearch = RestaurantList.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
        SetFilteredList(FilterSearch);
    }

    const handleTopRated = () => {
        const FilterTopRated = RestaurantList.filter((res) => res.info.avgRating > 4);
        SetFilteredList(FilterTopRated);
    }

    if (RestaurantList.length === 0) {
        return <ShimmerUi />
    }

    return (
        <div className={`Container ${Styles.BodyContainer}`}>
            <div className={Styles.Buttons}>
                <input onKeyUp={handleSearch} type="text" className={Styles.SearchBar} placeholder="Search Here..." />
                <button onClick={handleTopRated} className={`${Styles.TopBtn} CommonBtn`}>Top Rated Restaurants</button>
            </div>
            <div className={`Container ${Styles.ResContainer}`}>
                {
                    FilteredList.map((res) => (
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