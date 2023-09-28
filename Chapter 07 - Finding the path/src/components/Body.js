import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ResList, setRestList] = useState([]);
  const [Filterlist, setFilterlist] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9430915&lng=88.43611480000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterlist(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topFilter = () => {
    const filterlist = ResList.filter((res) => res.info.avgRating > 4);
    setFilterlist(filterlist);
  };

  const searchBtn = () => {
    const filterlist = ResList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilterlist(filterlist);
  }

  if(ResList?.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="res-buttons">
        <button className="common-btn top-filter-btn" onClick={topFilter}>
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button className="common-btn search-btn" onClick={searchBtn}>Search</button>
        </div>
      </div>
      <div className="res-container container">
        {Filterlist?.map((restaurant) => (
          <Link to={"/restaurants/"+ restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard  resInfo={restaurant.info}  />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;