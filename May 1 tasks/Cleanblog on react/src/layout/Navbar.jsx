import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"
function Navbar() {
const [display,setDisplay]=useState(false)


  // function openNavbar() {
  //   setDisplay(true)
  // }
  return (
    <header>
      <nav>
        <div className="nav__general">
          <Link className="start__bootstrap">
            Start Bootstrap
          </Link>
          {
            display?
            (

          <ul>
            <li>
              <Link to="/" className="header__a">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="header__a">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/samplepost" className="header__a">
                SAMPLE POST
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__a">
                CONTACT
              </Link>
            </li>
          </ul>
            ):
            (null)
          }
          <button onClick={()=>setDisplay(!display)} className="menu">
            MENU <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
