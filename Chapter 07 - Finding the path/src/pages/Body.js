import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import { CARD_API } from "../utils/constants";

const Body = () => {
  const [ResList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [FilterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topRatedBtn = () => {
    const filterTop = ResList.filter((res) => res.info.avgRating > 4);
    setFilterList(filterTop);
  };
  const searchBtn = () => {
    const filterSearch = ResList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filterSearch);
  };

  if (ResList?.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="res-buttons">
        <button className="common-btn top-filter-btn" onClick={topRatedBtn}>
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="common-btn search-btn" onClick={searchBtn}>
            Search
          </button>
        </div>
      </div>
      <div className="res-container container">
        {FilterList?.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={`/restaurants/${restaurants.info.id}`}
          >
            <RestaurantCard resInfo={restaurants.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
