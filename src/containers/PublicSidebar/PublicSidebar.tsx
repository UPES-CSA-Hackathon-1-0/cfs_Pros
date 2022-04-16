import React from "react";
import { useNavigate } from "react-router-dom";
import "./PublicSidebar.scss";

const PublicSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="public-sidebar">
      <div>
        <p
          className="sidebar-elements"
          onClick={() => navigate("/public-workplace")}
        >
          Workplace
        </p>
        <p
          className="sidebar-elements"
          onClick={() => navigate("/public-events")}
        >
          Event Tracker
        </p>
        <p
          className="sidebar-elements"
          onClick={() => navigate("/user-dashboard")}
        >
          Back to Dashboard
        </p>
      </div>
    </div>
  );
};

export default PublicSidebar;
