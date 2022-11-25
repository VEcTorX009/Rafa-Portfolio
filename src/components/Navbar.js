import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    
  return (
    <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode==="light"?"light":"dark"}`}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/home"
          style={{ fontFamily: "monospace" }}
        >
          Rafa
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">
                Work
              </Link>
            </li>
              <i className={`fa-regular fa-moon `} style={props.mode==="light"? {color:"black"}:{color:"white"}} onClick={props.toggleMode}></i>
          </ul>
        </div>
      </div>
    </nav>
  );
}
