import React from "react";
import "./Container.css";
function Container() {
  return (
    <div className="container">
      <a href="">Financier.</a>
      <ul className="lists">
        <li className="lists_item">Home</li>
        <li className="lists_item drop">
          Solution
          <ul className="dropdown">
            <li className="dropdown_item">Menu One</li>
            <li className="dropdown_item">Menu Two</li>
            <li className="dropdown_item">Dropdown</li>
          </ul>
        </li>
        <li className="lists_item">Services</li>
        <li className="lists_item">About</li>
        <li className="lists_item">Contact Us</li>
      </ul>
        <button id="btn">=</button>
      <p className="number"><i class="fa-solid fa-phone"></i> +994 051 909 32 92</p>
    </div>
  );
}

export default Container;
