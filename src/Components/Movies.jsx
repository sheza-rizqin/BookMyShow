import React from "react";

const movies = [
  { title: "Dune", img: "public/Images/dune.jpeg" },
  { title: "Dune Part Two", img: "pubic/Images/dune2.jpeg" },
  { title: "American Psycho", img: "public/Images/americnpsy.jpeg" },
  { title: "Empuraan", img: "public/Images/empuraan.jpeg" },
  { title: "Inception", img: "public/Images/inception.jpeg" },
  { title: "Chaava", img: "public/Images/chaava.jpeg" },
  { title: "Interstellar", img: "public/Images/inter.jpeg" },
  { title: "Oblivion", img: "public/Images/oblivion.jpeg" },
  { title: "Robin Hood", img: "public/Images/rh.jpeg" },
  { title: "Sikandar", img: "public/Images/sikandar.jpeg" },
];

const Movies = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", background: "rgb(16, 13, 13)" }}>
      <h2 style={{ color: "rgb(247, 242, 242)"}}>Recommended Movies</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ 
            background: "rgb(246, 246, 246)", padding: "10px", borderRadius: "15px", 
            boxShadow: "rgb(247, 242, 242)",
          }}>
            <img src={movie.image} alt={movie.title} width="150px" style={{ borderRadius: "10px" }} />
            <p style={{ color: "rgb(13, 13, 13)", fontWeight: "bold" }}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

