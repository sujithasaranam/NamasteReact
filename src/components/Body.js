import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

// not sending keys is not acceptable <<< using index <<<< using unique ids as keys
const Body = () => {
 let [listresCardData, setListOfRestaurants] = useState([]);
 let [filteredRestaurants, setfilteredRestaurants] = useState([]);
 let [searchData, setSearchData] = useState("");
 console.log("body rendered")

 useEffect(()=>{
  //console.log("callback function called"); //called after body component was rendered.
  fetchData()
 }, []);

const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8270232&lng=80.240321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // console.log(json)
  // console.log(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
 //console.log("body rendered"); //THis will be called first as useEffect call back function will be called after body was rendered.
 //rendering a component on condition is called conditional rendering. 
 return listresCardData.length == 0 ?  (<Shimmer/>) :
    (
    <div className="body">
      <div className="filter">
        <div>
          <input className="search-container" type="text"  value={searchData} onChange={(e)=>{setSearchData(e.target.value)}}></input>
          <button onClick={()=>{
            const searchFilterData = listresCardData.filter((resCardData) =>  resCardData?.info?.name?.toLowerCase().includes(searchData.toLowerCase()))
            setfilteredRestaurants(searchFilterData)
          }} className="search-btn">search</button>
        </div>
        <button className="filter-btn" onClick={()=>{const filterResData = listresCardData.filter((listresCardData) =>  listresCardData.info.avgRating> 4.5);
        setfilteredRestaurants(filterResData)
    }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;