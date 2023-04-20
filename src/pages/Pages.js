///This will contain all the routing for the different pages
import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import About from "../components/About";
import Classes from "./Classes";
import Schedule from "./Schedule";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import Team from "./Team";
function Pages() {
  return (
    <div>
      <div className="body-wrapper">
        {/* <Element name="/">
          <Home />
        </Element>
        <Element name="/Schedule">
          <Schedule />
        </Element>
        <Element name="/Classes">
          <Classes />
        </Element> */}

        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/#about" element={<Home a href='#about'/>} /> */}
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </div>
  );
}

export default Pages;
