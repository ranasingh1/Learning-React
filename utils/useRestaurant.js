import { restaurant_menu_api, MENU_ITEM_TYPE_KEY, IMAGE_CDN } from "../src/constants/constants";
import { useEffect, useState } from "react";

const useRestaurant = (id)=>{
    const [restaurant , setRestaurant] = useState("");  
     
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
return restaurant;
}

export default useRestaurant;
