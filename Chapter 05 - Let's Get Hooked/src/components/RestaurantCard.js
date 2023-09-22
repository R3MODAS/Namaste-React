import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { item } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;

  const imgsrc = `${CDN_URL}/${cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img className="res-logo" src={imgsrc} alt="img" />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating">
        <img
          className="res-star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
          alt="star"
        />
        {avgRating}
      </h4>

      <div className="res-items">{cuisines.join(", ")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;