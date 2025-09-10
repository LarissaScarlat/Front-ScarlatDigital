import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home.jsx";
import Tech from "./pages/Tech.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
