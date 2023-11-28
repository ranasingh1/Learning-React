import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
const Header = () => {

  const[loggedIn, setLoggedIn] = useState(false);
  
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
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
            <li>Cart</li>

          </ul>
          <div>
            <button onClick={()=>setLoggedIn(!loggedIn)} >{loggedIn?'Logout':'Login'}</button>
                     
                      </div>
        </div>
      </div>
    );
  };
export default Header;  