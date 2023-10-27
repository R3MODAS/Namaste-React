import { CARD_IMG_CDN, STAR_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  const { name, cloudinaryImageId: imgId, locality, avgRating, cuisines, sla } = resInfo;
  const cardImg = `${CARD_IMG_CDN}/${imgId}`;

  const truncateName = (name) => {
    return name.length > 35 ? name.substring(0, 35) + "..." : name;
  }

  const truncateCuisine = (Cuisines) => {
    return Cuisines.length > 35 ? Cuisines.substring(0, 35) + "..." : Cuisines;
  }

  return (
    <>
      <div className="hover:scale-95 transition-transform">
        <img className="w-[300px] h-[200px] object-cover rounded-lg" src={cardImg} alt="res-img" />
        <h3 className="font-bold font-GrotMed text-customblack-1 text-lg">{truncateName(name)}</h3>
        <h3 className="flex gap-1 font-GrotMed">
          <span className="flex items-center gap-1 text-customblack-1">
            {
              avgRating && (
                <>
                  <img src={STAR_URL} alt="star" className="w-5" />
                  <span>{avgRating} • </span>
                </>
              )
            }
          </span>
          <span>{sla.slaString}</span>
        </h3>
        <p className="text-customblack-2 text-base">{truncateCuisine(cuisines.join(", "))}</p>
        <div className="text-customblack-2 text-base">{locality}</div>
      </div>
    </>
  )
}

export default RestaurantCard