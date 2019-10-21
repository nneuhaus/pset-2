const readlineSync = require ("readline-sync")
let Length_inches= readlineSync.question("\nWhat is the length in inches?\n")
const Length_cm= Length_inches * 2.54
let Width_inches= readlineSync.question("\nWhat is the width in inches?\n")
const Width_cm=Width_inches * 2.54
let Perimeter= Length_cm+Length_cm+Width_cm+Width_cm
console.log("\nA(n) 8.5-by-11-inch sheet of paper has a perimeter of " + Perimeter + " centimeter(s).\n" );
