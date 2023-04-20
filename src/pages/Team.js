import React from "react";
import TeamData from "../data/TeamData";

function Team() {
  return (
    <div className="team-wrapper">
      <h1>Meet the team:</h1>
      <div className="team-grid-container">
        {TeamData.map((item) => {
          return (
            <div
              className="team-grid-box"
              style={{ backgroundImage: `url("/imgs/team/${item.image}")` }}
            >
              <div className="team-info">
                <h2 className="team-name">{item.name}</h2>
                <h3 className="team-title">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
