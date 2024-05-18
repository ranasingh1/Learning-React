import { useDispatch, useSelector } from "react-redux";
import store from "../../utils/store";
import CartCard from "./CartCard";
import { removeItems } from "../../utils/cartSlice";

const Cart = ()=>{
  const dispatch = useDispatch();
  const handleRemove = ()=>{
    dispatch(removeItems())
  }
   const cartItems = useSelector(store=>store.cart.items); 
   
    return(
        <div className="cart">
            {cartItems.map((item)=>(
                <div>
                          <CartCard key={item.id} {...item}/>
                          <button onClick={()=>handleRemove()}>Remove</button> 
                          </div>
           ) )}
        </div>
    )
};

export default Cart;