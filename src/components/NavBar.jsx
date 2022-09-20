import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import logo from '../images/logo.jpg';

const NavBar = () => {
  return (
    <div className='navBar'>
        <img class="logo" src={logo} alt=""  style={{ tintColor: "black"}}/>
        <a href="">Scandinavian Candy</a>
        <a className="cart-items">
        <BsFillCartFill className="icon-cart"  />
        <div className="cart-num">0</div>
      </a>

    </div>
  )
}

export default NavBar