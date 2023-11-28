import { IMAGE_CDN } from "../constants/constants";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    avgRating,
    costForTwo
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMAGE_CDN +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(",")}</h4>
        <span>
        <h4>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwo}</h4>
          <h4>{areaName}</h4>

        </span>
      </div>
    );
  };
  
export default RestaurantCard;  