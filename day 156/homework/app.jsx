// App.jsx
import React, { useState, useCallback } from "react";

// Counter კომპონენტი
const Counter = ({ increment, count }) => {
  console.log("Counter Rendered");
  return (
    <div className="p-4 border m-2 rounded">
      <h2>Count: {count}</h2>
      <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">
        გაზრდა
      </button>
    </div>
  );
};

// Greet კომპონენტი
const Greet = React.memo(({ text }) => {
  console.log("Greet Rendered");
  return (
    <div className="p-4 border m-2 rounded">
      <h2>{text}</h2>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("გამარჯობა, მომხმარებელო!");

  // useCallback გამოიყენება იმისთვის, რომ increment ფუნქცია არ შეიქმნას ხელახლა
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">useCallback მაგალითი</h1>
      <Counter increment={increment} count={count} />
      <Greet text={text} />
      <button
        onClick={() => setText("გადმოცემული ტექსტი შეიცვალა!")}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        ტექსტის შეცვლა
      </button>
    </div>
  );
}
