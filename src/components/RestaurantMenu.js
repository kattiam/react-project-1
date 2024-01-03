import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import { MENUAPI } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const api_url = MENUAPI+resId;
        const data = await fetch(api_url);
        const json = await data.json();

        console.log(json.data);
        setResInfo(json.data);
    };

    if(resInfo == null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <div className="res-items">
                <ul>
                    {itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs. "}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;