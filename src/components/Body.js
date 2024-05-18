import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../constants/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import useOnline from "../../utils/useOnline";

    const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
 const {user, setUser} = useContext(UserContext);


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

  const online = useOnline();

  if(!online){
    return <h1>You are offline! </h1>
  }

  // early   return
  if(!restaurants) return null;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          data-testid = "search-input"
          type="text"
          placeholder="Search for restaurants"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button data-testid="searchBtn"
          className="search-btn"
          onClick={() => {
            const data =filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
       <input type="text" className="search input" value={user.name} onChange={(e)=> setUser({...user,
        name:e.target.value,
        email:"xyz"
        })} />   

      </div>
      <div className="restaurant-list" data-testid ="res-list"> 
      
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
