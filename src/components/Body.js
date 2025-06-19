import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useState } from "react";

// not sending keys is not acceptable <<< using index <<<< using unique ids as keys
const Body = () => {
 let [listresCardData, setfilterResCardData] = useState(resCardData);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{const filterResData = resCardData.filter((restaurant) => restaurant.info.avgRating > 4.5);
        setfilterResCardData(filterResData)
    }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            listresCardData.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;