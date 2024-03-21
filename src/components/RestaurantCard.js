import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    areaName,
    veg,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300 ">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      {/* //resData.data.name(we can also write in this form) */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{areaName}</h4>
      
    </div>
  );
};
export default RestaurantCard;
