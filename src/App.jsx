import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/auth/Login";
import TimesheetPage from "./pages/TimesheetPage";
import TimesheetWeekPage from "./pages/TimesheetWeekPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Step 1: Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Step 2: Timesheet Page */}
        <Route path="/timesheet" element={<TimesheetPage />} />

        {/* Step 3: Timesheet Week Page */}
        <Route path="/timesheet/week" element={<TimesheetWeekPage />} />
      </Routes>
    </Router>
  );
};

export default App;
