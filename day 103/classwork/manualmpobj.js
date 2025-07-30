function manualMapObj(obj, callback) {
  const newObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // გადაეცემა მნიშვნელობა callback-ს და შემდგომ ინახება იგივე key-ს ქვეშ
      newObj[key] = callback(obj[key], key, obj);
    }
  }

  return newObj;
}

const userScores = {
  anna: 10,
  lasha: 15,
  elene: 20
};

const doubledScores = manualMapObj(userScores, function (value) {
  return value * 2;
});

console.log(doubledScores);
// ➤ { anna: 20, lasha: 30, elene: 40 }


const obj1 = { name: "andria" };
const obj2 = obj1;

obj2.name = "gio";

console.log(obj1.name); // "gio" — ორივე ცვლადი ერთსა და იმავე ობიექტზე მიუთითებს
