import React from "react";
import MovieForm from "./components/MovieForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* ჩანაცვლე ლოგოთი → public folder ში ჩადე ლოგოს ფაილი */}
      <img src="/logo.png" alt="Logo" className="logo" />

      <h1>🎬 Movie Finder</h1>
      <MovieForm />
    </div>
  );
}

export default App;
