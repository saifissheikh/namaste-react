import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          >
            <div>
              <button className="p-2 bg-gray-100 cursor-pointer rounded-lg shadow-lg absolute m-auto">
                Add +
              </button>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-36 rounded-lg"
              />
            </div>
            <div className="py-2 flex flex-col ml-8">
              <span className="">{item?.card.info.name}</span>
              <span> - Rs.{item.card.info.price / 100}</span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
