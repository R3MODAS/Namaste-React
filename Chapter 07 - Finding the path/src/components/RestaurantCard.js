import React from "react";
import { CDN_URL, STAR_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;
  const { name, avgRating, cloudinaryImageId, cuisines, areaName } = resInfo;
  const imgPath = `${CDN_URL}/${cloudinaryImageId}`;

  return (
    <>
      <div className="res-item">
        <img className="res-img" src={imgPath} alt="img" />
        <h2 className="res-name">{name}</h2>

        {!avgRating ? (
          ""
        ) : (
          <div className="res-rating">
            <img className="res-star-img" src={STAR_URL} alt="star-img" />{" "}
            <span>{avgRating}</span>{" "}
          </div>
        )}

        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <div className="res-area">{areaName}</div>
      </div>
    </>
  );
};

export default RestaurantCard;
