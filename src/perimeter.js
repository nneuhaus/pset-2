const readlineSync = require ("readline-sync")
let Width_inches= readlineSync.question("\nWidth: ")
const Width_cm=Width_inches * 2.54
let Length_inches= readlineSync.question("\nLength: ")
const Length_cm= Length_inches * 2.54
let Perimeter= Length_cm+Length_cm+Width_cm+Width_cm
Perimeter = Perimeter.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) "+ Width_inches + "-by-" + Length_inches + "-inch sheet of paper has a perimeter of " + Perimeter + " centimeter(s).\n" );
