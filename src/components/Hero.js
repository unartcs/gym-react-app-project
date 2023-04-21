import React from "react";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-text-container">
        <h2>
          Are you ready to be <br />
          the best version of yourself?
        </h2>
        <NavLink to="/Classes">
          <p className="hero-button">Classes</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
