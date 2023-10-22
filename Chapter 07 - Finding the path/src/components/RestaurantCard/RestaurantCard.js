import { CARD_IMG_CDN, STAR_URL } from "../../utils/constants";
import Styles from "./Res.module.css";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  const { name, cloudinaryImageId: imgId, locality, avgRating, cuisines, sla } = resInfo;
  const cardImg = `${CARD_IMG_CDN}/${imgId}`;

  const truncateName = (name) => {
    return name.length > 35 ? name.substring(0,35) + "..." : name;
  }

  const truncateCuisine = (Cuisines) => {
    return Cuisines.length > 35 ? Cuisines.substring(0 ,35) + "..." : Cuisines;
  }

  return (
    <>
      <div className={Styles.ResItem}>
        <img src={cardImg} alt="res-img" className={Styles.ResImg} />
        <h3 className={Styles.ResTitle}>{truncateName(name)}</h3>
        <h3 className={Styles.ResRating}>
          <span>
            <img src={STAR_URL} alt="star" className={Styles.ResStarImg} />
            <span>{avgRating} • </span>
          </span>
          <span>{sla.slaString}</span>
        </h3>
        <p className={Styles.ResCuisines}>{truncateCuisine(cuisines.join(", "))}</p>
        <div className={Styles.ResLocal}>{locality}</div>
      </div>
    </>
  )
}

export default RestaurantCard