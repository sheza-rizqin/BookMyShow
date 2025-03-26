import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 20px",
      background: "rgba(171, 12, 12, 0.8)", 
      fontFamily: "'Poppins', sans-serif"
    }}>
      
      <h2 style={{
        color: "rgb(255, 254, 254)", 
        fontWeight: "bold",
        fontSize: "24px"
      }}>
        bookmyshow
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/movies" style={linkStyle}>Movies</Link>
        <Link to="/events" style={linkStyle}>Events</Link>
        <Link to="/activities" style={linkStyle}>Activities</Link>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search for Movies, Events..."
          style={{
            padding: "10px",
            borderRadius: "20px",
            border: "1px solidrgb(243, 240, 240)",
            outline: "none",
            width: "200px",
            fontSize: "14px"
          }}
        />
        <button style={buttonStyle}>Search</button>
        <button style={signInButtonStyle}>Sign In</button>
      </div>

    </nav>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "rgb(247, 242, 242)", 
  fontWeight: "bold",
  fontSize: "16px",
  transition: "0.3s"
};

const buttonStyle = {
  background: "rgb(3, 3, 3)",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "0.3s",
  fontWeight: "bold"
};

const signInButtonStyle = {
  background:"rgb(13, 12, 12)", 
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s"
};

export default Navbar;










