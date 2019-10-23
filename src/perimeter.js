const readlineSync = require ("readline-sync")
let Width_inches= readlineSync.question("\nWidth:\n")
const Width_cm=Width_inches * 2.54
let Length_inches= readlineSync.question("\nLength:\n")
const Length_cm= Length_inches * 2.54
let Perimeter= Length_cm+Length_cm+Width_cm+Width_cm
Perimeter = Perimeter.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) 8.5-by-11-inch sheet of paper has a perimeter of " + Perimeter + " centimeter(s).\n" );
