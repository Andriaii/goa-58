import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Users Fetch
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users", err);
        setLoading(false);
      });
  }, []);

  // Movies Functions
  const addMovie = () => {
    if (movieInput.trim() === "") return;
    setMovies([...movies, movieInput]);
    setMovieInput("");
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>🎬 Favorite Movies List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter movie..."
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
        />
        <button onClick={addMovie}>Add</button>
      </div>

      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            {movie}
            <button onClick={() => deleteMovie(i)}>❌</button>
          </li>
        ))}
      </ul>

      <hr />
      <h2>👤 Users from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name.firstname} {user.name.lastname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
