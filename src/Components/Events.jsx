import React from "react";

const events = [
  { title: "Bharat Chauhan Live", image: "public/Images/bharatchauhan.avif" },
  { title: "High Five: A Stand-up Comedy Line Up Show", image: "public/Images/highfive.avif" },
  { title: "The Aman Aujla Show", image: "public/Images/highfive.avif" },
];

const Events = () => {
  return (
    <div style={{ padding: "20px", background: "rgb(9, 9, 9)"}}>
      <h2 style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}>Upcoming Events</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {events.map((event, index) => (
          <div key={index} style={{ textAlign: "center", padding: "10px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <img src={event.image} alt={event.title} width="150px" style={{ borderRadius: "10px" }} />
            <p style={{ color: "#01579b", fontWeight: "bold", marginTop: "10px" }}>{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

