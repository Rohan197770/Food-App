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
deliveryTime,address,veg}=resData?.data;
    
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className="res-logo" alt="res-logo" src={CDN_URL
           +
          resData.data.cloudinaryImageId
        }/>
        <h3>{name}</h3>
        {/* //resData.data.name(we can also write in this form) */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{address}</h4>
        <h4>{{veg}==true}</h4>
        </div>
    )
}
export default RestaurantCard;