const readlineSync = require ("readline-sync")
let Width_inches= readlineSync.question("\nWidth: ")
const Width_mm= Width_inches * 25.4
let Length_inches= readlineSync.question("\Length: ")
const Length_mm= Length_inches * 25.4
let Area= Length_mm*Width_mm
Area = Area.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n)"+ Width_inches + "-by-" + Length_inches + "-inch sheet of paper has an area of " + Area + " square millimeter(s). \n" );
