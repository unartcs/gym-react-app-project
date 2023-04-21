import React, { useEffect, useState, useRef } from "react";
import ScheduleData from '../data/ScheduleData'
import ScheduleView from "../components/ScheduleView";
import UpArrow from "./UpArrow";
function Schedule() {
  const enableAnimate = useRef(false)
  const [activeDay, setActiveDay] = useState(ScheduleData['Sunday'])
  const dayHandler = (e) => {
    console.log(e)
    setActiveDay(ScheduleData[e.target.innerHTML])
  }
  useEffect(()=> {
    console.log(enableAnimate.current)
    enableAnimate.current = !enableAnimate.current
  },[activeDay])
  return (
    <div className="schedule-wrapper" id="schedule">
      <div className="schedule-day-wrapper">
        <ul className="schedule-day-ul">
        <li onClick={dayHandler}>Sunday</li>
        <li onClick={dayHandler}>Monday</li>
        <li onClick={dayHandler}>Tuesday</li>
        <li onClick={dayHandler}>Wednsday</li>
        <li onClick={dayHandler}>Thursday</li>
        <li onClick={dayHandler}>Friday</li>
        <li onClick={dayHandler}>Saturday</li>
        </ul>
      </div>
      <ScheduleView activeDay={activeDay} enableAnimate={enableAnimate} key={activeDay.name}/>
      <div className="up-arrow-floater">
        <UpArrow />
      </div>
    </div>
  );
}

export default Schedule;
