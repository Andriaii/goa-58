import React from "react";

const DisplayText = ({ textColor, backgroundColor, fontSize }) => {
  return (
    <div
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h3>Customizable Text</h3>
      <p>
        This text can have its color, background color, and size adjusted
        using the options above!
      </p>
    </div>
  );
};

export default DisplayText;
