import data from "../resdata.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const resData = data?.resData;

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resData.map((item) => (
          <RestaurantCard key={item.info.id} item={item.info} /> // Dynamic data with JSON
        ))}
      </div>
    </div>
  );
};

export default Body;
