const readlineSync = require ("readline-sync")
let Length_inches= readlineSync.question("\nWhat is the length in inches?\n")
let Width_inches= readlineSync.question("\nWhat is the width in inches?\n")

const D= Length_inches + Width_inches
let Diagonal= Math.hypot(Length_inches,Width_inches)
Diagonal = Diagonal.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 })
console.log("\nA(n) 8.5-by-11-inch sheet of paper has a diagonal of " + Diagonal + " inch(es).\n" );
