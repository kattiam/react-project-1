import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        // API call
        getRestaurants();
    }, []);

    const getRestaurants = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9386287&lng=77.54402879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!allRestaurants) return null;

    return allRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />

                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                    
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>

            </div>
            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <Link key={res.info.id} to={"/restaurants/"+res.info.id} ><RestaurantCard resData={res} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
