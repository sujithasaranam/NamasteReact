import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";

// not sending keys is not acceptable <<< using index <<<< using unique ids as keys
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
            resCardData.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;