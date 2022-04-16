import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateDashboard from "../PrivateDashboard/PrivateDashboard";
import PrivateProgress from "../PrivateProgress/PrivateProgress";
import PublicEvents from "../PublicEvents/PublicEvents";
import Sketch from "../Sketch/Sketch";
import UserDashboard from "../UserDashboard/UserDashboard";
import { Workplace } from "../Workplace/Workplace";

const PublicWorkplaceRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/public-workplace" element={<Workplace />} />
        <Route path="/public-events" element={<PublicEvents />} />
        <Route path="/private-workplace" element={<PrivateDashboard />} />
        <Route path="/private-sketch" element={<Sketch />} />
        <Route path="/private-progress" element={<PrivateProgress />} />
      </Routes>
    </Router>
  );
};

export default PublicWorkplaceRoutes;
