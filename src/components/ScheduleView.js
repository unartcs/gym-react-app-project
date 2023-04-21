import React from "react";
import { TbClock } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function ScheduleView({ activeDay }) {
  return (
    <div className="active-day-wrapper">
      {/* <div className="active-day-box-header">
        <span>Class</span>
        <span>Time</span>
        <span>Trainer</span>
      </div> */}
      <div className="active-day-box-container" key={Math.random()}>
        {activeDay.map((item) => {
          return (
            <motion.div
              animate={{ opacity: 100 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="active-day-box">
                <div className="active-day-box-class-name-wrapper">
                  <h2>Class:</h2>
                  <p>
                    <CgGym />
                    {item.name}
                  </p>
                </div>
                <div className="active-day-box-class-time-wrapper">
                  <h2>Time:</h2>
                  <p>
                    <TbClock />
                    {item.time}
                  </p>
                </div>
                <div className="active-day-box-class-trainer-wrapper">
                  <h2>Trainer:</h2>
                  <p>
                    <BsPerson />
                    {item.trainer}
                  </p>
                </div>
                <HashLink to="/Locations/#contact">
                  <h4 className="active-day-box-join-button">Join Now!</h4>
                </HashLink>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ScheduleView;
