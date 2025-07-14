import React from "react";

function AdvancedJSXExample() {

  const pi = 3.14159265358979323846;
  const digitsOfPi = pi.toFixed(20);
  const classNameValue = "highlighted-text";
  const imageURL = "https://via.placeholder.com/150";
  const userName = "Andria";


  const greet = (name) => `Hello, ${name}! Welcome to React JSX`;

  return (
    <div>
      {/* className vs class */}
      <h1 className={classNameValue}>This is a heading with className</h1>

      {/* Self-Closing Tag */}
      <img src={imageURL} alt="Placeholder" />

      {/* JavaScript In JSX */}
      <p>The sum of 2 + 2 is: {2 + 2}</p>

      {/* Curly Braces in JSX */}
      <p>{greet(userName)}</p>

      {/* 20 digits of Pi */}
      <p>Pi to 20 digits: {digitsOfPi}</p>

      {/* Variables in JSX */}
      <p>User's name is: {userName}</p>

      {/* Variable Attributes in JSX */}
      <img src={imageURL} alt={`${userName}'s avatar`} />
    </div>
  );
}

export default AdvancedJSXExample;
