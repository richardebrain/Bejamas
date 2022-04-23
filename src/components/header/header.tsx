import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/header-logo.svg";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "./header.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = () => {
  const [state, setState] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setState(!state);
  };
  return (
    <div className="header">
      <div className="header__logos">
        <Logo className="logo" />
        <CartIcon className="cart" onClick={handleClick} />
      </div>

      <hr className="line" />
      {state ? null : <CartDropdown handleClick={handleClick}/>}
    </div>
  );
};
export default Header;
