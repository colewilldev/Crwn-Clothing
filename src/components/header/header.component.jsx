import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

export const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
    </div>
  </div>
);
