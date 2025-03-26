import React from "react";

const activities = [
  { title: "The Jungle Tales", image: "public/Images/The Jungle Tales.avif" },
  { title: "Mystery Rooms", image: "public/Images/Mystery Rooms.avif" },
  { title: "Gobindgarh Fort", image: "public/Images/Gobindgarh Fort.avif" },
];

const Activities = () => {
  return (
    <div style={{ padding: "20px", background: "rgb(9, 9, 9)" }}>
      <h2 style={{ color: "rgb(247, 242, 242)", textAlign: "center" }}>Trending Activities</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {activities.map((activity, index) => (
          <div key={index} style={{ textAlign: "center", padding: "10px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <img src={activity.image} alt={activity.title} width="150px" style={{ borderRadius: "10px" }} />
            <p style={{ color: "#9c0046", fontWeight: "bold", marginTop: "10px" }}>{activity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;


