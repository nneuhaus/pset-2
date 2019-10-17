const readlineSync = require ("readline-sync")
const length= readlineSync.question("What is the length?")
const width= readlineSync.question("What is the width?")
const convert=readlineSync.conversion(1 inch= 5 millimeters)
console.log("A(n) 8.5-by-11-inch sheet of paper has an area of " + length * width + "square millimeter(s)." );
