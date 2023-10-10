import { useEffect, useState } from "react";
import { CARD_API, IMG_CAROUSEL } from "../utils/constants";

const ImageCarousel = () => {
  const [ImgData, setImgData] = useState([]);
  const [Heading, setHeading] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    setHeading(json?.data?.cards[1]?.card?.card?.header?.title);
    setImgData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
  };

  return (
    <div className="res-carousel container">
      <h2 className="carousel-heading">{Heading}</h2>
      <div className="carousel-container">
        <div className="img-carousel">
          {ImgData?.map((img) => (
            <div className="img-box" key={img.id}>
              <img
                width={144}
                height={180}
                src={`${IMG_CAROUSEL}/${img.imageId}`}
                alt="img-carousel"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
