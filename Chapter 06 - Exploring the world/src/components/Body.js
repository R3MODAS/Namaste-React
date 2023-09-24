import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [reslist, setReslist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9430915&lng=88.43611480000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    setReslist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(reslist.length === 0){
    return <h1>Loading...</h1>
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} item={restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
