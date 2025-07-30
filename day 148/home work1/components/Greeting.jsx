
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Greeting = () => {
  const language = useContext(LanguageContext);

  let greeting = "";
  switch (language) {
    case "English":
      greeting = "Hello!";
      break;
    case "Spanish":
      greeting = "¡Hola!";
      break;
    case "French":
      greeting = "Bonjour!";
      break;
    default:
      greeting = "Hello!";
  }

  return (
    <h2 className="text-2xl font-semibold text-center mt-4">
      {greeting}
    </h2>
  );
};

export default Greeting;
