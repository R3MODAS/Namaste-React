import RestaurantCard from "./RestaurantCard";
import data from "../resdata.json";
import { useState } from "react";

const Body = () => {
  //! Using some restaurants
  /*
  const [reslist, setReslist] = useState([
    {
      info: {
        id: "217031",
        name: "Domino's Pizza",
        cloudinaryImageId: "el6s8c8kmhrummfvsoty",
        areaName: "Kalyani",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
      },
    },

    {
      info: {
        id: "209751",
        name: "Panchu Gopal Dey's Food Plaza",
        cloudinaryImageId: "ovwyn7gwgvbk2ttvc1rv",
        areaName: "Kalyani",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "Chinese", "Indian", "South Indian", "Tandoor"],
        avgRating: 4.1,
      },
    },

    {
      info: {
        id: "310829",
        name: "Dron",
        cloudinaryImageId: "hyowrtrk1wuqz2eqba2d",
        areaName: "Kanchrapara Loco",
        cuisines: ["Chinese", "Snacks"],
        avgRating: 3.7,
      },
    },
  ]);

  let listofRestaurants = [
    {
      info: {
        id: "217031",
        name: "Domino's Pizza",
        cloudinaryImageId: "el6s8c8kmhrummfvsoty",
        areaName: "Kalyani",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
      },
    },

    {
      info: {
        id: "209751",
        name: "Panchu Gopal Dey's Food Plaza",
        cloudinaryImageId: "ovwyn7gwgvbk2ttvc1rv",
        areaName: "Kalyani",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "Chinese", "Indian", "South Indian", "Tandoor"],
        avgRating: 3.9,
      },
    }
  ];
  */

  //! Using json data
  const [reslist, setReslist] = useState(data?.resData);

  //? We can do the same thing like this 
  // const arr = useState(data?.resData);
  // const [reslist, setReslist] = arr;
  //  or 
  // const reslist = arr[0];
  // const setReslist = arr[1];
  // console.log(arr);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Logic for filtering the Restaurants whose Rating is > 4
            setReslist(reslist.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {reslist.map((item) => (
          <RestaurantCard key={item.info.id} item={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
