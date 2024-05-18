import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../constants/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantMenu= ()=>{
   const {id} = useParams();
   
   const restaurant = useRestaurant(id);   
   
   const dispatch = useDispatch();
   
   const handleChange = (item)=>{
      dispatch(addItem(item))
   }
   return! restaurant?(<Shimmer/>) :(
      <div className="menu-list" >
      {Object.values(restaurant?.map((menu, index) =>(<div key={index}>
          <div >
            <img src={IMAGE_CDN+menu.imageId}></img>
            </div>
         <div> <h1 >{menu.name}</h1>
               <button style={{background:'red'}} onClick={()=>handleChange(menu)}> Add Item</button>
         </div></div>)))}  
      </div>
   )

}

export default RestaurantMenu;