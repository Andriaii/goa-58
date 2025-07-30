import { useState, useMemo } from "react";

function findPrimesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

const PrimeCalculator = () => {
  const [number, setNumber] = useState(10);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const primes = useMemo(() => findPrimesUpTo(Number(number)), [number]);

  const themeStyles = {
    backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "1rem",
    minHeight: "100vh",
    transition: "all 0.3s",
  };

  return (
    <div style={themeStyles}>
      <h1>Prime Numbers Finder</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
        className="border p-2 rounded mr-4"
      />

      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Primes up to {number}:</h2>
        <p>{primes.join(", ")}</p>
      </div>
    </div>
  );
};

export default PrimeCalculator;
