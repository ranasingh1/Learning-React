import { IMAGE_CDN } from "../constants/constants";
const CartCard = ({
    name,
    category,
    description,
    imageId,
    
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMAGE_CDN +
            imageId
          }
        />
        <h2>{name}</h2>
        <span>
        <h4>{category}</h4>   
        <h4>{description}</h4>   

        </span>
      </div>
    );
  };
  
export default CartCard;  