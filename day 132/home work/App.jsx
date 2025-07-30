import React from "react";
import ColoredBox from "./components/ColoredBox";

function App() {
  return (
    <div>
      <h1>Props Demo</h1>

      {/* ერთი და იგივე კომპონენტი სხვადასხვა props-ით */}
      <ColoredBox bgColor="teal" text="This is a teal box" />
      <ColoredBox bgColor="tomato" text="This is a tomato box" />
      <ColoredBox bgColor="slateblue" text="This is a slateblue box" />
    </div>
  );
}

export default App;


import Card from "./components/Card";

<Card>
  <h2>Hello From Child</h2>
  <p>This content is passed as children</p>
</Card>
