import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicEvents from "../PublicEvents/PublicEvents";
import UserDashboard from "../UserDashboard/UserDashboard";
import { Workplace } from "../Workplace/Workplace";

const PublicWorkplaceRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/public-workplace" element={<Workplace />} />
        <Route path="/public-events" element={<PublicEvents />} />
      </Routes>
    </Router>
  );
};

export default PublicWorkplaceRoutes;
