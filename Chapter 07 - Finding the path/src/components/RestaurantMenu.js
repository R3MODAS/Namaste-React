import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_IMG } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName } = resInfo?.cards[0]?.card?.card?.info;

  const title =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.title;

  const items =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="res-menu container">
      <h2 className="rest-name">{name}</h2>
      <p className="rest-cuisine">{cuisines.join(", ")}</p>
      <div className="rest-area">{areaName}</div>
      <div className="dotted-line"></div>
      <div className="res-menu-container">
        <h3 className="title">
          {title} ({items?.length})
        </h3>
        <ul>
          {items?.map((item) => (
            <li className="res-menu-list" key={item.card.info.id}>
              <div className="item-left">
                <div className="item-name">{item.card.info.name}</div>
                <div className="item-price">₹{item.card.info.price / 100}</div>
                <p className="item-desc">{item.card.info.description}</p>
              </div>
              <div className="item-right">
                {item.card.info.imageId && (
                  <img
                    src={`${MENU_IMG}/${item.card.info.imageId}`}
                    alt="menu-img"
                  />
                )}
                <button className="add-btn">Add</button>
              </div>
              {console.log(item.card.info)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
