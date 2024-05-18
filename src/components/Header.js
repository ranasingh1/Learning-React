import { useState, useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import isOnline from "../../utils/useOnline"

const Header = () => {
  const[loggedIn, setLoggedIn] = useState(false);
  const {user} = useContext(UserContext);
  const cart = useSelector((store)=>store.cart.items);
  console.log(cart);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <h1 data-testid="online-status">{isOnline?"Online":"Offline"} </h1>
          <ul>
            <Link to = "/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li> About</li>
            </Link>
            <Link to="/contact">
            <li> Contact</li>
            </Link>
            <Link to="/instamart">
              <li>Instamart</li>
            </Link>
            <Link to = "/cart" >
            <li data-testid = "cart">Cart-{cart.length}</li>
            </Link>
          </ul>
        <h1> {user.name}  </h1>
          <div>
            <button onClick={()=>setLoggedIn(!loggedIn)} >{loggedIn?'Logout':'Login'}</button>
                     
                      </div>
        </div>
      </div>
    );
  };
export default Header;  