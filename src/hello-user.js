const readlineSync = require ("readline-sync")

const Name= readlineSync.question("\nHi!What is your name?\n")
console.log("\nHello," + Name + "!\n");
