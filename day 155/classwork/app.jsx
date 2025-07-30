import React, { useState, useMemo } from 'react';

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

  console.log(' re-calculations', primes);
  return primes;
}

function PrimeCalculator() {
  const [number, setNumber] = useState(50);
  const [count, setCount] = useState(0);

 
  const primeNumbers = useMemo(() => findPrimesUpTo(number), [number]);

  return (
    <div className="p-4">
      <h1> Prime Numbers up to {number}</h1>
      <ul>
        {primeNumbers.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        className="border px-2 py-1"
      />

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="ml-4 px-3 py-1 bg-blue-500 text-white"
      >
        Re-render Counter: {count}
      </button>
    </div>
  );
}

export default PrimeCalculator;
