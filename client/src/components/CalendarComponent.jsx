import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {

  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <div className="pageContainer">
        <h1 className="heading">Calendar</h1>
      <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
};

export default CalendarComponent;
