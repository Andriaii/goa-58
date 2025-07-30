
import { useState } from "react";
import { LanguageContext } from "../LanguageContext";
import Greeting from "./components/Greeting";

const App = () => {
  const [language, setLanguage] = useState("French");

  return (
    <LanguageContext.Provider value={language}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold">Choose a Language</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setLanguage("English")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            English
          </button>
          <button
            onClick={() => setLanguage("Spanish")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Spanish
          </button>
          <button
            onClick={() => setLanguage("French")}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            French
          </button>
        </div>

        <Greeting />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
