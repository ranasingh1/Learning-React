import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../constants/constants";
import { Link } from "react-router-dom";

    const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);



  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {

      const data =  await fetch(swiggy_api_URL);
      const json = await data.json();

    async function checkJsonData(jsonData){
       for (let i = 0; i < jsonData?.data?.cards.length;i++) {

        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (checkData!==undefined){
          return checkData;
        }

           }
    }

    const resData = await checkJsonData(json);
     setRestaurants(resData);
     setFilteredRestaurants(resData)
      console.log(json);
    } catch (error) {
      console.log(error);
    }
   }

  // early   return
  if(!restaurants) return null;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data =filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
      
        {filteredRestaurants.length===0?<h1>No restaurant match your filter</h1>:filteredRestaurants.map((restaurant) => {
          return (
         <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} >   <RestaurantCard  {...restaurant.info} /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
