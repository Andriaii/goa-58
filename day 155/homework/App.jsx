import React from "react";
import MyText from "./MyText";
import NameFilter from "./NameFilter";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-6 space-y-6">
      <MyText />
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Count
      </button>

      <hr />

      <NameFilter />
    </div>
  );
}

export default App;






/*
 memo:
React.memo არის Higher Order Component (HOC), რომელიც ახორციელებს კომპონენტის "memorization"–ს.
თუ პროპსები არ შეცვლილა, memo თავიდან არ გადარენდერებს კომპონენტს — ეს ზრდის წარმადობას.

 useMemo:
useMemo კაუჭი ინახავს ფუნქციის გამოთვლილ მნიშვნელობას ქეშში.
იგი თავიდან არ გამოთვლის მნიშვნელობას თუ დამოკიდებულებები (dependencies) არ შეიცვალა.

 Expensive Calculation:
ძვირადღირებული ოპერაცია (მაგ. დიდი მასივის ფილტრაცია, პრაიმ რიცხვების გამოთვლა).
useMemo ხშირად გამოიყენება სწორედ ასეთი ოპერაციების თავიდან ასარიდებლად.

 Cache:
ქეში ნიშნავს მეხსიერებაში დროებით შენახვას, რათა ერთი და იგივე ოპერაცია არ გამეორდეს ხელახლა.
useMemo ქმნის ქეშს ფუნქციის მიერ დაბრუნებული მნიშვნელობისთვის.

 useMemo როგორ მუშაობს?
const memoizedValue = useMemo(() => calculateSomething(input), [input]);
=> მხოლოდ მაშინ იძახებენ calculateSomething–ს, როცა input შეიცვლება.
*/
