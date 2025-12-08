import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo } = resData;
  return (
    <div className="m-4 p-4 w-[350px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img className="rounded-lg" src={CDN_URL + resData?.cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-4 px-3 py-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
