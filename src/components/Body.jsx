import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnelineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();
  const { setUserInfo, loggedInUser } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants"
    );
    const json = await data.json();

    const fetchedRestaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    fetchedRestaurants.push({
      info: {
        id: "455674",
        name: "Burger Hub",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
        locality: "Park Street",
        areaName: "Downtown",
        costForTwo: "₹300 for two",
        promoted: true,
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.5,
        avgRatingString: "4.5",
        totalRatingsString: "15K+ ratings",
        veg: false,
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2,
          slaString: "25 mins",
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
      },
    });
    setRestList(fetchedRestaurants);
    setFilteredRestList(fetchedRestaurants);
  };

  const handleOnClick = () => {
    const filteredList = restaurantList.filter(
      (rest) => rest.info.avgRating > 4.2
    );
    setFilteredRestList(filteredList);
  };

  if (isOnline === false) {
    return <h1>Looks like, there is no internet. Please check!!!</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4  rounded-lg"
            onClick={() => {
              const filteredRest = restaurantList.filter((rest) =>
                rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestList(filteredRest);
            }}
          >
            search
          </button>
          <button
            onClick={handleOnClick}
            className="px-4 py-1 bg-gray-100 rounded-lg"
          >
            Top Rated Restaurants
          </button>
          <label>Username: </label>
          <input
            className="px-4 py-1 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestList?.map((rest) => (
          <Link to={"/restaurants/" + rest.info.id} key={rest.info.id}>
            {rest.info.promoted ? (
              <RestaurantCardPromoted resData={rest.info} />
            ) : (
              <RestaurantCard resData={rest.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
