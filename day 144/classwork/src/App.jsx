import React, { useState } from "react";
import TextSettings from "./components/TextSettings";
import DisplayText from "./components/DisplayText";

const App = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState("16px");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customize Your Text</h1>
      <TextSettings
        setTextColor={setTextColor}
        setBackgroundColor={setBackgroundColor}
        setFontSize={setFontSize}
      />
      <DisplayText
        textColor={textColor}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
      />
    </div>
  );
};

export default App;
