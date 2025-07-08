import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_DETAIL_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_DETAIL_URL + resId);
    console.log(RESTAURANT_DETAIL_URL + resId)
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />; // If this was below then we will get error because we have initialised use state with null so initially it wil be null but we fetching name ffrom line 21.

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0]?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage} - {avgRatingString}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
