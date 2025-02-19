import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Ingredients from "./pages/Ingredients";
import Reservations from "./pages/Reservations";
import DatabaseView from "./pages/DatabaseView";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/database-view" element={<DatabaseView />} />
      </Routes>
    </Router>
  );
}

export default App;
