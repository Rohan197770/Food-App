import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //local state variable -Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  //we are making another copy beacause we have to search on the all restaurant card
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardVeg= withVegLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    

    //optional chaning
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>Looks Like youre offline!! Please check your Internet Connection</h1>
    );

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              // filter the restaurant card and update the UI

              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // we have filteredRestaurentI have to just update our state varibale which is listdo restaurant
              setfilteredRestaurent(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurent(filteredList); // we have change the setfilteredRestaurent beacuse we are printing that restaurant
          }}
        >
          Top Rated Restaurants{" "}
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurent.map((restaurant) => (
          <Link
            className="res-list"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
               restaurant.info.veg?<RestaurantCardVeg resData={restaurant}/>:<RestaurantCard resData={restaurant}/>
            }
            
          </Link>
        ))}

        {/* <RestaurantCard
                resData={resList[14]}/> */}

        {/* <RestaurantCard resName="KFC" cuisine="Burger,Fast Food"/> */}
      </div>
    </div>
  );
};
export default Body;
