import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GeoLocationPage from "./pages/GeoLocation";
import CompaniesPage from "./pages/Companies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/task2" element={<GeoLocationPage />} />
        <Route path="/task3" element={<CompaniesPage />} />
      </Routes>
    </div>
  );
}

export default App;
