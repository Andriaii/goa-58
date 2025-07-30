import React, { useState } from "react";
import "./styles.css"; 

function FavoriteMovies() {
  
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  
  const addMovie = () => {
    if (movieInput.trim() === "") return;
    setMovies([...movies, movieInput]);
    setMovieInput("");
  };


  const deleteMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  return (
    <div className="container">
      <h1>🎬 Favorite Movies List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter movie name..."
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie}{" "}
            <button className="delete" onClick={() => deleteMovie(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteMovies;
