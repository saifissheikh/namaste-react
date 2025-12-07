import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnelineStatus";

const Body = () => {
  const [restaurantList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        </div>
        <button onClick={handleOnClick} className="fltr-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestList?.map((rest) => (
          <Link to={"/restaurants/" + rest.info.id} key={rest.info.id}>
            <RestaurantCard resData={rest.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
