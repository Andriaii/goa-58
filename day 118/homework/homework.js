// const isorderSuccessful = true;

// const coffeeOrder = new Promise((resolve, reject) => {
//   if (isorderSuccessful) {
//     resolve('Your Coffee is Ready');
//   } else {
//     reject('Your order had been declined');
//   }
// });

// coffeeOrder
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });




// const hasInternet = true;

// const fileDownload = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (hasInternet) {
//       resolve('File Downloaded successfully');
//     } else {
//       reject('Check Your Internet Connection');
//     }
//   }, 2000);
// });

// fileDownload
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });




// const correctPass = "mySecret123";
// const enteredPass = "mySecret123";

// const checkPassword = new Promise((resolve, reject) => {
//   if (enteredPass === correctPass) {
//     resolve("Access granted");
//   } else {
//     reject("Access Denied Try again later");
//   }
// });

// checkPassword
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });





// const cartItems = ["milk", "bread", "eggs", "butter"];
// const requestedItem = "bread";

// const shoppingCart = new Promise((resolve, reject) => {
//   if (cartItems.includes(requestedItem)) {
//     resolve(`${requestedItem} is available at the moment`);
//   } else {
//     reject(`sorry we don't have the ${requestedItem}`);
//   }
// });

// shoppingCart
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });






// const currentTime = new Date().getHours(); // 0-დან 23-მდე
// const wakeUpTime = 8;

// const alarm = new Promise((resolve, reject) => {
//   if (currentTime === wakeUpTime) {
//     resolve("Wake up it is time to start the day");
//   } else {
//     reject("You can sleep a bit longer");
//   }
// });

// alarm
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
