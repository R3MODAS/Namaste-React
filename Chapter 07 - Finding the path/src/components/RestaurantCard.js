import { CDN_URL, STAR_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { item } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;

  const imgsrc = `${CDN_URL}/${cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img className="res-logo" src={imgsrc} alt="img" />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating">
        <img className="res-star" src={STAR_URL} alt="star" />
        {avgRating}
      </h4>

      <div className="res-items">{cuisines.join(", ")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
