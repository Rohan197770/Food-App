import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>
{
    //local state variable -Super powerful variable
    const [listOfRestaurants,setlistOfRestaurants]=useState(resList);
    //we are making another copy beacause we have to search on the all restaurant card
    const [filteredRestaurent,setfilteredRestaurent]=useState(resList);
    const [searchText,setsearchText]=useState("");
    useEffect(()=>
    {
       fetchData();
    },[]);

    const fetchData = async() =>
    {
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2446059&lng=77.47296899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();

        console.log(json);
        //optional chaning
        // setlistOfRestaurants(json.data.cards[2].data.data.cards);
        // setfilteredRestaurent(json.data.cards[2].data.data.cards);
    };
    //Conditional Rendering
    // if(listOfRestaurants.length==0)
    // {
    //     // return <h1>Loading....</h1>
    //     return <Shimmer/>;
    // }
    // we can write the same if condition as ternary opertaor
    return  filteredRestaurent.length==0?<Shimmer/> : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-Box" value={searchText} onChange={(e)=>
                    {
                        setsearchText(e.target.value);
                    }}/>
                    <button onClick={()=>
                    {
                        // filter the restaurant card and update the UI
                        
                        const filteredList= listOfRestaurants.filter(
                            (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        // we have filteredRestaurentI have to just update our state varibale which is listdo restaurant
                        setfilteredRestaurent(filteredList);

                    }}>Search</button>
                </div>
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
                    filteredRestaurent.map((restaurant) => (<RestaurantCard key={restaurant.data.id}resData={restaurant}/>))
                }
                
                 {/* <RestaurantCard
                resData={resList[14]}/> */}
                 
                {/* <RestaurantCard resName="KFC" cuisine="Burger,Fast Food"/> */}
                

            </div>
        </div>
    ); 
};
export default Body;
