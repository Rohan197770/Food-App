import { CDN_URL } from "../utils/constant";

const RestaurantCard =(props)=>
{
    const {resData}=props;

    const{
        cloudinaryImageId,
    name,
    avgRating,
cuisines,
costForTwo,
sla,areaName,veg}=resData?.info;
    
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId
        }/>
        <h3>{name}</h3>
        {/* //resData.data.name(we can also write in this form) */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>{areaName}</h4>
        <h4>{veg}</h4>

        </div>
    )
}
export default RestaurantCard;