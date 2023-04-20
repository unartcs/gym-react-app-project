import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [hamburgerState, setHamburgerState] = useState(false);
  const hamburgerHandler = () => {
    setHamburgerState(!hamburgerState);
  };
  return (
    <Element name="navbar">
      <div className="navbar-wrapper">
        <div className="hamburger-menu" onClick={hamburgerHandler}>
          <GiHamburgerMenu />
          {hamburgerState ? (
            <ul className="hamburger-menu-ul">
              <NavLink to="/">
                <li className="hamburger-item">Home</li>
              </NavLink>
              <HashLink to="/#about" spy={true}>
                <li className="hamburger-item">About us</li>
              </HashLink>
              <NavLink to="/Classes">
                <li className="hamburger-item">Classes</li>
              </NavLink>
              <NavLink to="/Schedule">
                <li className="hamburger-item">Schedule</li>
              </NavLink>
              <li className="hamburger-item">Locations</li>
              <NavLink to="/Team">
                <li className="hamburger-item">Our Team</li>
              </NavLink>
              <NavLink to="/Gallery">
                <li className="hamburger-item">Gallery</li>
              </NavLink>
              <li className="hamburger-item">Contact</li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <h1 className="navbar-title">
          <span>Fitness</span>Center
        </h1>
        <ul className="navbar-menu-ul">
          <NavLink to="/">
            <li className="menu-item">Home</li>
          </NavLink>
          <HashLink to="/#about" spy={true}>
            <li className="menu-item">About us</li>
          </HashLink>
          <NavLink to="/Classes">
            <li className="menu-item">Classes</li>
          </NavLink>
          <NavLink to="/Schedule">
            <li className="menu-item">Schedule</li>
          </NavLink>
          <li className="menu-item">Locations</li>
          <NavLink to="/Team">
            <li className="menu-item">Our Team</li>
          </NavLink>
          <NavLink to="/Gallery">
            <li className="menu-item">Gallery</li>
          </NavLink>
          <li className="menu-item">Contact</li>
        </ul>
        <ul className="navbar-menu-socials">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </Element>
  );
}

export default Navbar;
