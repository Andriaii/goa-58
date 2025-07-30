import React from "react";

// ფუნქციური კომპონენტი, რომელიც props-ის მიხედვით ცვლის ფერს და ტექსტს
function ColoredBox({ bgColor, text }) {
  const boxStyle = {
    backgroundColor: bgColor,
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "10px"
  };

  return <div style={boxStyle}>{text}</div>;
}

export default ColoredBox;
