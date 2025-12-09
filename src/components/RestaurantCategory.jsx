import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, isAccordianOpen, onClick } = props;

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => onClick(data?.title)}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>{">"}</span>
        </div>
        {isAccordianOpen && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
