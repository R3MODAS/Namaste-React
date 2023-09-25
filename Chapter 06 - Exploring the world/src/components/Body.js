import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [Reslist, setReslist] = useState([]);
  const [Filterlist, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9430915&lng=88.43611480000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json.data)
    setReslist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (Reslist.length === 0) {
    return <Shimmer />;
  }

  // console.log("Body Rendered");

  return (
    <div className="body">
      <div className="buttons">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filterTopRes = Reslist.filter((res) => res.info.avgRating > 4);
            setFilteredList(filterTopRes);
          }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredSearch = Reslist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredSearch);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {Filterlist?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} item={restaurant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
