import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const SeatSelection = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter((seat) => seat !== index) : [...prev, index]
    );
  };

  return (
    <div className="seat-container">
      <h2>Select Seats for Movie {id}</h2>
      <div className="seat-grid">
        {[...Array(30)].map((_, index) => (
          <Button
            key={index}
            className={`seat-button ${selectedSeats.includes(index) ? "selected" : ""}`}
            onClick={() => toggleSeat(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <h4>Selected Seats: {selectedSeats.join(", ") || "None"}</h4>
      <Button className="confirm-button" disabled={selectedSeats.length === 0}>
        Confirm Booking
      </Button>
    </div>
  );
};

export default SeatSelection;





