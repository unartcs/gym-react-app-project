import React from "react";
import ClassData from "../data/ClassData";
import { TbClock } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import Schedule from "../components/Schedule";
import { Element } from "react-scroll";
import { HashLink } from "react-router-hash-link";


function Classes() {
  return (
    <div className="class-wrapper">
      <div className="class-grid-container">
        {ClassData.map((item) => {
          return (
            <div
              className="class-grid-box"
              style={{
                backgroundImage: `url("${process.env.PUBLIC_URL}/imgs/classes/${item.image}")`,
              }}
            >
              <div className="class-info-wrapper">
                <h2 className="class-name">{item.name}</h2>
                <div className="class-info">
                  <h3 className="class-teacher">
                    <BsPerson />
                    {item.teacher}
                  </h3>
                  <h3 className="class-time">
                    <TbClock />
                    {item.time}
                  </h3>
                </div>

                <HashLink to="/Classes/#schedule">
                  <h4 className="class-button">More Info</h4>
                </HashLink>
              </div>
            </div>
          );
        })}
      </div>
      <Element name="schedule">
        <Schedule />
      </Element>
    </div>
  );
}

export default Classes;
