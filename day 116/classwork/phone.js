class Phone {
  constructor(name, color, storage) {
    this.name = name;
    this.color = color;
    this.storage = storage;
  }
}

// 📱 სამი ტელეფონის ობიექტის შექმნა:
const phone1 = new Phone("iPhone 14", "Black", "128GB");
const phone2 = new Phone("Samsung Galaxy S22", "White", "256GB");
const phone3 = new Phone("Google Pixel 7", "Blue", "512GB");

console.log(phone1);
console.log(phone2);
console.log(phone3);


class User {
  constructor(email, password, username) {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  introduce() {
    console.log(`Hello, my email is ${this.email} and my username is ${this.username}.`);
  }
}

// ❗ განმარტებები:
// 👉 კლასი (class): არის შაბლონი, რომლის მიხედვითაც იქმნება ობიექტები
// 👉 კონსტრუქტორი (constructor): სპეციალური მეთოდი, რომელიც ავტომატურად გამოიძახება ობიექტის შექმნისას new-ით
// 👉 პროტოტიპი (prototype): არის საერთო სივრცე სადაც ინახება ყველა ობიექტის საერთო მეთოდები (არ იმეორდება თითო ობიექტში)

const user1 = new User("nika@mail.com", "pass1234", "nika123");
const user2 = new User("ana@gmail.com", "hello456", "ana_ana");
const user3 = new User("giorgi@yahoo.com", "giorgi789", "gigi88");

// 📣 გამოძახება
user1.introduce();
user2.introduce();
user3.introduce();

// 🔍 ობიექტის შემოწმება
console.log(user1);




class User {
  constructor(email, password, username) {
    this._email = email;       
    this._password = password;
    this.username = username;
  }

  introduce() {
    console.log(`Hello, my email is ${this._email} and my username is ${this.username}.`);
  }


  get email() {
    return this._email;
  }


  set password(newPassword) {
    const isLongEnough = newPassword.length > 6 && newPassword.length < 20;
    const containsDot = newPassword.includes(".");

    if (isLongEnough && containsDot) {
      console.log("✅ Password changed successfully.");
      this._password = newPassword;
    } else {
      console.log("❌ Password must be 6-20 chars and contain a dot.");
    }
  }
}


const user = new User("test@example.com", "old.pass", "tester");


console.log("User email:", user.email);


user.password = "newpassword"; 
user.password = "valid.pass123";  


console.log(user);



