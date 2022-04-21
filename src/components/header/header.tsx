import React from "react";
import { ReactComponent as Logo } from "../../assets/header-logo.svg";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "./header.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logos">
        <Logo className="logo" />
        <CartIcon className="cart" />
      </div>

      <hr className="line" />
      <CartDropdown/>
    </div>
  );
};
export default Header;
