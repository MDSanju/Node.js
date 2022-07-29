const fileSystem = require("fs");
const os = require("os");
const path = require("path");

// HOW TO WRITE/CREATE FILE

// fileSystem.writeFile("demo1.txt", "Getting Started NODE.JS!", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful!");
//     }
// })


// HOW TO APPEND FILE

// fileSystem.appendFile("demo1.txt", "Getting Started NODE.JS! It's for DSL!", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful!");
//     }
// })


// HOW TO READ FILE

// fileSystem.readFile("demo1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })


// HOW TO RENAME FILE

// fileSystem.rename("demo1.txt", "demo2.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful!");
//     }
// })


// HOW TO DELETE FILE

// fileSystem.unlink("demo2.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("DELETED!");
//     }
// })


// FILE EXISTS OR NOT

// fileSystem.exists("demo1.txt", (result) => {
//     if (result) {
//         console.log("Found!");
//     } else {
//         console.log("Not Found!");
//     }
// })


// Sync Module

// fileSystem.existsSync("demo1.txt");


// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());


// DIRECTORY NAME

// console.log(__dirname);
// console.log(__filename);


// EXTENSION NAME

// const extensionName = path.extname("index.py");
// console.log(extensionName);
// const joinName = path.join(__dirname + "/../views");

