import React from "react";
import ClassData from "../data/ClassData";
import { TbClock } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

function Classes() {
  const requireImg = (link) => {
    return require(link);
  };
  return (
    <div className="class-wrapper">
      <h1>Classes</h1>
      <div className="class-grid-container">
        {ClassData.map((item) => {
          return (
            <div
              className="class-grid-box"
              style={{ backgroundImage: `url("/imgs/classes/${item.image}")` }}
            >
              <div className="class-info-wrapper">
                <h2 className="class-name">{item.name}</h2>
                <div className="class-info">
                <h3 className="class-teacher"><BsPerson/>{item.teacher}</h3>
                  <h3 className="class-time"><TbClock/>{item.time}</h3>
                </div>
                <h4 className="class-button">More Info</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Classes;
