import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;
  // console.log(resInfo?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} -{costForTwoMessage}
      </p>
      {/* categories accordians */}

      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
