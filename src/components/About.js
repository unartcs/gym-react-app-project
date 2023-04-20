import React from "react";
import UpArrow from "./UpArrow";
import { Element } from "react-scroll";
function About() {
  return (
    <div className="about-wrapper" id='about'>
      <div className="about-content">
        <h1>About us</h1>
        <p>
          Proin libero nunc consequat interdum varius. Malesuada proin libero
          nunc consequat interdum. Dignissim enim sit amet venenatis urna cursus
          eget nunc scelerisque. Morbi tristique senectus et netus et malesuada
          fames ac. Aliquam purus sit amet luctus venenatis lectus magna. Velit
          euismod in pellentesque massa placerat. Mi in nulla posuere
          sollicitudin aliquam ultrices.
        </p>
      </div>
      <div className="up-arrow-floater">
        <UpArrow />
      </div>
    </div>
  );
}

export default About;
