import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="home-wrapper">
      <Hero />
      <Element name="about">
        <About />
      </Element>
    </div>
  );
}

export default Home;
