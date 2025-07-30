import React, { useState, useMemo } from 'react';

// ძვირიანი გამოთვლა — ნელი ფუნქცია (მაგ. დიდი ფაქტორიალი)
function slowFactorial(n) {
  console.log('🧠 Expensive calculation running...');
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // ვალამაზებთ დროს, ვითომ რთული გამოთვლაა
    for (let j = 0; j < 1e7; j++) {} // ხელოვნურად ვანელებთ
    result *= i;
  }
  return result;
}

function ExpensiveCalculator() {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState('');

  // useMemo ითვლის მხოლოდ მაშინ როცა number იცვლება
  const factorial = useMemo(() => {
    return slowFactorial(number);
  }, [number]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🧮 Expensive Calculator</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">შეიყვანეთ რიცხვი:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          className="border px-3 py-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">ტექსტი (არ აჩენს გამოთვლას):</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-3 py-2 w-full"
        />
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded">
        <strong>ფაქტორიალი:</strong> {factorial}
      </div>
    </div>
  );
}

export default ExpensiveCalculator;
