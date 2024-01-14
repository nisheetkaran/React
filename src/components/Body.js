import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestraunts, setResList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.089227&lng=91.55234349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        const fetchedRestaurants = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setResList(fetchedRestaurants);
        setFilteredRestaurant(fetchedRestaurants);
    };

    if (listOfRestraunts.length === 0) {
        return <Shimmer />;
    }

    const handleSearch = (e) => {
        const currentInput = e.target.value.toLowerCase();
        setSearchText(currentInput);

        const filteredList = listOfRestraunts.filter((res) =>
            res.info.name.toLowerCase().includes(currentInput)
        );
        setFilteredRestaurant(filteredList);
    };

    const handleTopRatedFilter = () => {
        const filteredList = listOfRestraunts.filter(
            (res) => res.info.avgRating > 4
        );
        setFilteredRestaurant(filteredList);
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input
                        type="text"
                        placeholder="Search for Restaurants"
                        value={searchText}
                        onChange={handleSearch}
                    />
                </div>
                <button className="filter-btn" onClick={handleTopRatedFilter}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
