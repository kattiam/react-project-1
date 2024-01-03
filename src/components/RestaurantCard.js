import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

export default RestaurantCard;
