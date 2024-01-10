import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestraunts, setResList] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunts.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setResList(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestraunts.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
