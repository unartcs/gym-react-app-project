import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import ScheduleData from '../data/ScheduleData'
import ScheduleView from "../components/ScheduleView";
function Schedule() {

  const [activeDay, setActiveDay] = useState(ScheduleData['Sunday'])
  const dayHandler = (e) => {
    console.log(e)
    setActiveDay(ScheduleData[e.target.innerHTML])
  }
  return (
    <div className="schedule-wrapper">
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
      <ScheduleView activeDay={activeDay}/>
    </div>
  );
}

export default Schedule;
