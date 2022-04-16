import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import PublicSidebar from "../PublicSidebar/PublicSidebar";
import "./PublicEvents.scss";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [];

const PublicEvents = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div style={{ display: "flex" }}>
      <PublicSidebar />
      <div className="public-events">
        <div className="header">
          <img
            src="photos/homebox.png"
            alt="homebox-logo"
            style={{ width: "50px" }}
          />
          <h3>Homebox</h3>
        </div>
        <h2>Add New Event</h2>
        <div>
          <input
            type="text"
            placeholder="Add Title"
            className="event-title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          
          <div className="public-event-date-select">
            <DatePicker
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
                className="event-title"
            />
            <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
                className="event-title"
            />
          </div>
          <p onClick={handleAddEvent} className="event-add-button">
            Add Event
          </p>
        </div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </div>
  );
};

export default PublicEvents;
