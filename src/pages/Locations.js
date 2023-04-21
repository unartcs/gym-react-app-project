import React from "react";
import Contact from "../components/Contact";
import { Element } from "react-scroll";
function Locations() {
  return (
    <div className="locations-wrapper">
      <div className="locations-details-wrapper">
        <div className="opening-hours-wrapper">
          <h1>Opening Hours</h1>
          <ul>
            <li>
              <span>Monday-Friday:</span> 06:00-22:00
            </li>
            <li>
              <span>Saturday:</span> 07:00-19:00
            </li>
            <li>
              <span>Sunday:</span> 08:00-18:00
            </li>
          </ul>
        </div>
        <div className="locations-details-container">
          <h1>Locations</h1>
          <div className="locations-content">
            <ul>
              <h2>Coppenhagen:</h2>
              <li>Taastrup, Skojevej 11</li>
              <li>Husum Nord, Tofttagervej 29</li>
            </ul>
            <ul>
              <h2>Odense:</h2>
              <li>Snestrup, Tarupvej 37</li>
            </ul>
            <ul>
              <h2> Aarhus:</h2>
              <li>Gellerup, Brigittevej 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="embed-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d71984.81167781632!2d12.47927128681758!3d55.67985336807284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdk!4v1682074063955!5m2!1sen!2sdk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Locations;
