
import { useContext } from "react";
import { GenreContext } from "../GenreContext";

const GenreDisplay = () => {
  const genre = useContext(GenreContext);

  let color = "";
  switch (genre) {
    case "Jazz":
      color = "text-blue-600";
      break;
    case "Rock":
      color = "text-red-600";
      break;
    case "Pop":
      color = "text-green-600";
      break;
    default:
      color = "text-black";
  }

  return (
    <h2 className={`text-2xl font-semibold mt-4 ${color}`}>
      Your favorite music genre is: {genre}
    </h2>
  );
};

export default GenreDisplay;

