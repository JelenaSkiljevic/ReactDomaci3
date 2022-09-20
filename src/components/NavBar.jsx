import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom";

const NavBar = ({cartNum}) => {
  return (
    <div className='navBar'>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
        <Link to="/products">CoffeeShop</Link>
        <Link to="/cart" className="cart-items">
        <BsFillCartFill className="icon-cart"  />
        <div className="cart-num">{cartNum}</div>
      </Link>
    </div>
  )
}

export default NavBar