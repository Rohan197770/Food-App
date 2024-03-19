import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //local state variable -Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  //we are making another copy beacause we have to search on the all restaurant card
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    //optional chaning
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Conditional Rendering
  // if(listOfRestaurants.length==0)
  // {
  //     // return <h1>Loading....</h1>
  //     return <Shimmer/>;
  // }
  // we can write the same if condition as ternary opertaor
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-Box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurent.map((restaurant) => (
          <Link
            className="res-list"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
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
