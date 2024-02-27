import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = ()=>
{
    //local state variable -Super powerful variable
    const [listOfRestaurants,setlistOfRestaurants]=useState(resList);
    return(
        <div className="Body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>
                {
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.data.avgRating>4
                    );
                    setlistOfRestaurants(filteredList);
                }}>Top Rated Restaurants </button>
            </div>
            <div className="res-container">

                {
                    listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.data.id}resData={restaurant}/>))
                }
                
                 {/* <RestaurantCard
                resData={resList[14]}/> */}
                 
                {/* <RestaurantCard resName="KFC" cuisine="Burger,Fast Food"/> */}
                

            </div>
        </div>
    ); 
};
export default Body;
