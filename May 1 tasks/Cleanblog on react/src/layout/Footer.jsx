import React from "react";
import "../CSS/Footer.css"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="icons">
        <Link className="icons__icons">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link
          to="https://www.facebook.com/elmin.nebiyev.90"
          className="icons__icons"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link to="https://github.com/ElminNabiyev" className="icons__icons">
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
