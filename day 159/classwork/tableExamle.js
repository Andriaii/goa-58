// ვქმნით ჩვეულებრივ მასივს და ობიექტს
const fruits = ['apple', 'banana', 'mango'];
const person = {
  name: 'Andria',
  age: 23,
  country: 'Georgia'
};

// console.table() — მეთოდია რომელიც ცხრილის (ტაბულარული) სახით გამოიტანს მონაცემებს ტერმინალში
console.table(fruits);
console.table(person);

/* ==============================
   თეორია მოდულების შესახებ
   ==============================

 რა არის მოდული?
მoდული არის ცალკე ფაილი ან კოდი, რომელიც ასრულებს კონკრეტულ ფუნქციონალს და შეიძლება ხელახლა გამოვიყენოთ სხვაგან.

 რა არის მოდულარობა?
მოდულარობა ნიშნავს კოდის დაყოფას პატარა, ხელმისაწვდომ და დამოუკიდებელ ნაწილებად. ეს ზრდის კოდის ორგანიზაციას, გამარტივებს ტესტირებას და ხელახლა გამოყენებას.

 ჩაშენებული (built-in) მოდულები:
Node.js-ს მოყვება ჩაშენებული მოდულები როგორიცაა:
  - fs (ფაილების სისტემისთვის)
  - path (ფაილის ბილიკებისთვის)
  - http (სერვერის შესაქმნელად)
  - events, os, crypto და ა.შ.

 გარე (external / third-party) მოდულები:
ეს მოდულებია, რომლებსაც თავად ვამატებთ `npm`-ის საშუალებით.
მაგ: `express`, `axios`, `lodash` და ა.შ.

 გლობალური მოდულები:
ესენია მოდულები ან ობიექტები რომლებიც ყოველთვის ხელმისაწვდომია, import-ის გარეშე.
მაგალითად:
  - `console`
  - `process`
  - `__dirname`, `__filename`
  - `setTimeout`, `clearInterval`

 გამშვები გარემო (runtime environment):
Node.js არის JavaScript-ის გამშვები გარემო, რომელიც გვაძლევს საშუალებას ბრაუზერის გარეთაც შევასრულოთ JS კოდი — სერვერზე, ტერმინალში და ა.შ.
*/





// process — გლობალური ობიექტია, რომელიც გვაძლევს ინფორმაციას Node.js პროცესზე
// process.argv — array არის, რომელიც შეიცავს ტერმინალიდან შემოტანილ არგუმენტებს
// მაგალითად: node sumArgs.js 10 20

const args = process.argv; // ეს მასივია

// პირველი ორი ელემენტი ყოველთვის:
// args[0] = node-ის ბილიკი
// args[1] = ჩვენი ფაილის ბილიკი
// args[2] და args[3] = ჩვენი შემოტანილი რიცხვები

const num1 = parseFloat(args[2]);
const num2 = parseFloat(args[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log('გთხოვთ შეიყვანოთ ორი რიცხვი! მაგ: node sumArgs.js 5 10');
  process.exit();
}

const sum = num1 + num2;
console.log(`რიცხვების ჯამი: ${sum}`);

// მეხსიერების გამოყენების გაგება
const memory = process.memoryUsage();

// ბაიტიდან მეგაბაიტში გადაყვანა (1 MB = 1024 * 1024 Bytes)
const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

console.log(' მეხსიერების გამოყენება (MB):');
console.log(`Heap Used: ${toMB(memory.heapUsed)} MB`);
console.log(`Heap Total: ${toMB(memory.heapTotal)} MB`);
