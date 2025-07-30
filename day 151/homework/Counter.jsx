// components/Counter.jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    if (newCount === 5) {
      throw new Error("Count reached 5!");
    }
    setCount(newCount);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Count: {count}</h2>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
