import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import { CARD_API } from "../utils/constants";
import ImageCarousel from "../components/ImageCarousel"

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
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleTopRated = () => {
    const filterTop = ResList.filter((res) => res.info.avgRating > 4);
    setFilterList(filterTop);
  };
  const handleSearch = () => {
    const filterSearch = ResList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filterSearch);
  };

  if (ResList?.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <ImageCarousel />
      <div className="res-buttons">
        <button className="common-btn top-filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
          <input
            className="search-input"
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={handleSearch}
          />
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
