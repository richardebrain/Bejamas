import "./cart-dropdown.scss";
import Button from "../button/button";
import { ReactComponent as Hr } from "../../assets/horizontal.svg";
import { ReactComponent as Delete } from "../../assets/delete-icon.svg";


const CartDropdown = ({handleClick}) => {
  
  return (
    <div className="dropdown">
      <Delete className="del" onClick={handleClick}/>
      <div className="item">
        <div className="item-details">
          <span className="name">Samurai King Resting</span>
          <span className="price">$10000.00</span>
        </div>
      <div
        className="image"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmar6wa9y/image/upload/v1650422733/dog-image_wl3ekl.png')",
        }}
      />
      </div>
     

      <Hr className="hr" />
      <Button>CLEAR</Button>
    </div>
  );
};

export default CartDropdown;
