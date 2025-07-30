// 1) დაბადების თარიღის ობიექტი
const myBirthday = new Date(1990, 4, 15, 10, 30, 25, 500); 
// აქ: წელი 1990, მაისი (0-იანით ითვლება თვე, 4 = მაისი), რიცხვი 15,
// 10 საათი, 30 წუთი, 25 წამი, 500 მილიწამი

console.log("My birthday:", myBirthday);

// 2) წამოღება და დაბეჭდვა

const year = myBirthday.getFullYear();
const month = myBirthday.getMonth();          // 0-იანით ითვლება თვე (0 = იანვარი)
const date = myBirthday.getDate();
const dayOfWeek = myBirthday.getDay();        // კვირის დღე (0 = კვირა, 1 = ორშაბათი ... 6 = შაბათი)
const hours = myBirthday.getHours();
const minutes = myBirthday.getMinutes();
const seconds = myBirthday.getSeconds();
const milliseconds = myBirthday.getMilliseconds();

console.log("Year:", year);
console.log("Month (0-based):", month);
console.log("Date:", date);
console.log("Day of week (0=Sunday):", dayOfWeek);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
