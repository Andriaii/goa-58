import React from "react";

function Card({ children }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    margin: "10px"
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;
