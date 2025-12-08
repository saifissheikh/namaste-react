import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines } = restInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {restInfo?.costForTwo}
      </h2>
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
