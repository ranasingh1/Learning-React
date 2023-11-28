import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurant_menu_api, MENU_ITEM_TYPE_KEY, IMAGE_CDN } from "../constants/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu= ()=>{
 const [restaurant , setRestaurant] = useState("");  
    const {id} = useParams();
     
    useEffect(()=>{
        getRestaurantInfo();
    },
    [])

 async function getRestaurantInfo(){
//enuItemsData[1].card.itemCards.flat().map(x=>x.card?.info)
 const data = await fetch(restaurant_menu_api+ id);
const json = await data.json();
console.log(json.data);
const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
                            console.log(menuItemsData);

 setRestaurant(menuItemsData);                           
 }   
  
   return! restaurant?(<Shimmer/>) :(
      <div className="menu-list" >
      {Object.values(restaurant?.map((menu, index) =>(<div key={index}>
          <div >
            <img src={IMAGE_CDN+menu.imageId}></img>
            </div>
         <div> <h1 >{menu.name}</h1></div></div>)))}
      </div>
   )

}

export default RestaurantMenu;