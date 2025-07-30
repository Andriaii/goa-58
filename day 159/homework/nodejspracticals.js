// file: osInfo.js
const os = require("os");

// ამოაქვს ოპერაციული სისტემის ტიპი (მაგ. Linux, Windows_NT)
console.log("OS Type:", os.type()); // Example: 'Linux'

// აბრუნებს CPU არქიტექტურას (მაგ. x64, arm)
console.log("CPU Architecture:", os.arch()); // Example: 'x64'

// აბრუნებს ქსელური ინტერფეისების შესახებ ინფორმაციას (IP, MAC და სხვა)
console.log("Network Interfaces:", os.networkInterfaces()); // Object with network info

// აბრუნებს მომხმარებლის საწყის დირექტორიას (მაგ. /home/user ან C:\Users\Name)
console.log("Home Directory:", os.homedir());

// აბრუნებს კომპიუტერის სახელს
console.log("Hostname:", os.hostname());

// აბრუნებს სისტემის გაშვების დროის ხანგრძლივობას წამებში
console.log("System Uptime (seconds):", os.uptime());
