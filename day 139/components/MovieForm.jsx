import React, { useState } from "react";
import MovieDetails from "./MovieDetails";

const API_KEY = "fe36b1f4"; // ჩასვი შენიც თუ გაქვს

function MovieForm() {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");

  const fetchMovie = async (e) => {
    e.preventDefault();

    if (!movieName) return;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      setError("Movie not found.");
      setMovieData(null);
    } else {
      setMovieData(data);
      setError("");
    }

    setMovieName(""); // სუფთავდება input
  };

  return (
    <div className="form-container">
      <form onSubmit={fetchMovie}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {movieData && <MovieDetails movie={movieData} />}
    </div>
  );
}

export default MovieForm;
