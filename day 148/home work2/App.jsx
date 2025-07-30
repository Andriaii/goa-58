
import { useState } from "react";
import { GenreContext } from "./GenreContext";
import GenreDisplay from "./components/GenreDisplay";

const App = () => {
  const [genre, setGenre] = useState("Jazz");

  return (
    <GenreContext.Provider value={genre}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold">Choose your favorite genre</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setGenre("Jazz")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Jazz
          </button>
          <button
            onClick={() => setGenre("Rock")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Rock
          </button>
          <button
            onClick={() => setGenre("Pop")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Pop
          </button>
        </div>

        <GenreDisplay />
      </div>
    </GenreContext.Provider>
  );
};

export default App;

