import React from "react";

const TextSettings = ({ setTextColor, setBackgroundColor, setFontSize }) => {
  return (
    <div>
      <h2>Text Customization</h2>
      <div>
        <label>
          Text Color: 
          <input
            type="color"
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Background Color: 
          <input
            type="color"
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Font Size: 
          <input
            type="number"
            min="10"
            max="50"
            onChange={(e) => setFontSize(e.target.value + "px")}
          />
        </label>
      </div>
    </div>
  );
};

export default TextSettings;
