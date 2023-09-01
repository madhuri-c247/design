import React from "react";
import { HiUserCircle, HiShoppingCart } from "react-icons/hi";
import "../styles/nav.css";
import logo from "../assests/logo-thing.png";

function Navbar() {
  return (
    <div className="nav-main d-flexr">
      <div className="menu-line-div click">
          <hr />
          <hr />
          <hr />
        <div>
          <ul className="menu-list">
            <li>Home</li>
            <li>Installation Videos</li>
            <li>Products</li>
            <li>Clients</li>
            <li>About US</li>
            <li>Blog</li>
            <li>Resources</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
      <img src={logo} alt="logo" />
      <ul className="menu-main d-flexr">
        <li>Home</li>
        <li>Installation Videos</li>
        <li>Products</li>
        <li>Clients</li>
        <li>About US</li>
        <li>Blog</li>
        <li>Resources</li>
        <li>contact us</li>
      </ul>
      <div className="profile-main d-flexr">
        <HiUserCircle className="profile icon" size={"30px"} />
        <HiShoppingCart className="cart icon" size={"30px"} />
      </div>
    </div>
  );
}

export default Navbar;
