import ReactDOM from "react-dom/client";
import data from "./resdata.json";

//! Dynamic Data with one Object
/*
const resData = {
  info: {
    id: "303893",
    name: "Haji Biryani House",
    cloudinaryImageId: "hgzhzbqryqw59tzslics",
    locality: "Kalyani",
    areaName: "Kanchrapara Loco",
    costForTwo: "₹350 for two",
    cuisines: ["Biryani", "Mughlai", "Indian"],
    avgRating: 3.7,
    feeDetails: {
      restaurantId: "303893",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 1900,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 1900,
    },
    parentId: "18592",
    avgRatingString: "3.7",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 0.6,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "0.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-20 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
};
*/

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          alt="logo"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

//! Static Data
/*
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo" src={props.resimg} alt="img" />
      <h3 className="res-name">{props.resname}</h3>
      <h4 className="res-rating">
        <img
          className="res-star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
          alt="star"
        />
        {props.resrating}
      </h4>
      <div className="res-items">{props.cuisine}</div>
      <div className="res-location">{props.reslocation}</div>
    </div>
  );
};
*/

//! Dynamic Data
/*
const RestaurantCard = (props) => {
  const {resData} = props;
  const imgcdn = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  console.log(resData.info)
  console.log(resData.info.cuisines)

  return (
    <div className="res-card">
      <img className="res-logo" src={`${imgcdn}/${resData.info.cloudinaryImageId}`} alt="img" />
      <h3 className="res-name">{resData.info.name}</h3>
      <h4 className="res-rating">
        <img
          className="res-star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
          alt="star"
        />
        {resData.info.avgRating}
      </h4>
      
      <div className="res-items">{resData.info.cuisines.join(", ")}</div>
      <div className="res-location">{resData.info.areaName}</div>
    </div>
  );
}; 
*/

//! Dynamic Data with JSON
const RestaurantCard = (props) => {
  const {item} = props;
  const {name,avgRating,cuisines,areaName,cloudinaryImageId} = item;

  const imgsrc =
    `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

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

const Body = () => {
  const resData = data?.resData;

  return (
    <div className="body">
      <div className="res-container">
        {/* Static Data  */}
        {/* <RestaurantCard
          resname="Dominos Pizza"
          resrating="4.5"
          cuisine="Pizzas, Italian, Pastas, Desserts"
          resimg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/el6s8c8kmhrummfvsoty"
          reslocation="Kalyani"
        />
        <RestaurantCard
          resname="KFC"
          resrating="4.3"
          cuisine="Burgers, Biryani, American, Snacks, Fast Food"
          resimg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
          reslocation="Kanchrapara Loco"
        /> */}

        {/* Dynamic Data */}
        {/* <RestaurantCard resData = {resData} /> */}

        {/* Dynamic Data with JSON */}
        {resData.map((item) => (
          <RestaurantCard key={item.info.id} item={item.info} />
        ))}

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
