import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>Kira's Flower Shop</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/productlist">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}