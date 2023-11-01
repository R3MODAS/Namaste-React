import { useContext } from "react";
import { CARD_IMG_CDN, STAR_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  const {loggedInUser} = useContext(UserContext);

  const { name, cloudinaryImageId: imgId, locality, avgRating, cuisines, sla } = resInfo;
  const cardImg = `${CARD_IMG_CDN}/${imgId}`;

  const truncateName = (name) => {
    return name.length > 35 ? name.substring(0, 35) + "..." : name;
  }

  const truncateCuisine = (Cuisines) => {
    return Cuisines.length > 35 ? Cuisines.substring(0, 35) + "..." : Cuisines;
  }

  return (
    <div className="group-hover:scale-95 transition-transform">
      <div className="w-[300px] h-[200px] relative ResImg rounded-lg">
        <img className="object-cover w-full h-full rounded-lg" src={cardImg} alt="res-img" />
      </div>
      <h3 className="font-bold font-GrotMed text-customblack-1 text-base mt-1">{truncateName(name)}</h3>
      <h3 className="flex gap-1 font-GrotMed">
        <span className="flex items-center gap-1 text-customblack-1">
          {
            avgRating && (
              <div className="flex justify-center items-center gap-1 text-sm">
                <img src={STAR_URL} alt="star" className="w-5" />
                <span>{avgRating} • </span>
              </div>
            )
          }
        </span>
        <span className="text-sm">{sla.slaString}</span>
      </h3>
      <p className="text-customblack-2 text-sm">{truncateCuisine(cuisines.join(", "))}</p>
      <div className="text-customblack-2 text-sm">{locality}</div>
      {/* <div>{loggedInUser}</div> */}
    </div>
  )
}

export const OfferResCard = (RestaurantCard) => {
  return (props) => {
    const {resInfo} = props;
    const { aggregatedDiscountInfoV3 } = resInfo;
    const { header, subHeader } = aggregatedDiscountInfoV3;
    return(
      <>
        <RestaurantCard {...props} />
        <div className="absolute bottom-[35%] left-[15px] text-white font-ProximaNovaBlack text-xl group-hover:scale-95 transition-transform">{header} {subHeader}</div>
      </>
    )
  }
}

export default RestaurantCard