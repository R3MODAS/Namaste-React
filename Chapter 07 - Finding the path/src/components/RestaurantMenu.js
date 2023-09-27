import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENUIMG, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  //   const params = useParams();
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

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const title =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.title;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="res-menu">
      <div className="res-details">
        <h2 className="res-name">{name}</h2>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
      </div>
      <h3 className="title">
        {title} ({itemCards?.length})
      </h3>
      <button className="toggle-btn">Veg only</button>
      {itemCards?.map((item) => (
        <ul key={item.card.info.id} className="menu-item-container">
          <li className="menu-item">
            <div className="menu-left">
              <div className="d-none">
                {item.card.info.itemAttribute.vegClassifier}
              </div>
              <div className="item-name">{item.card.info.name}</div>
              <div className="item-price">₹{item.card.info.price / 100}</div>
              <p className="item-desc">{item.card.info.description}</p>
            </div>
            <div className="menu-right">
              {
                item.card.info.imageId === undefined ? "" : <img src={`${MENUIMG}/${item?.card?.info.imageId}`} alt="img" />
              }
            </div>
          </li>
          <div className="line"></div>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantMenu;
