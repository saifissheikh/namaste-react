import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo } = resData;
  return (
    <div
      className="m-4 p-4 w-[350px] rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="rounded-lg" src={CDN_URL + resData?.cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
