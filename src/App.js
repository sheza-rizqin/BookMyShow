import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavbarComponent";
import Movies from "./Components/Movies";
import Events from "./Components/Events";
import Activities from "./Components/Activities";
import Footer from "./Components/Footer";
import SeatSelection from "./Components/SeatSelection";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/seatselection" element={<SeatSelection />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;














