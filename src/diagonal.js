const readlineSync = require ("readline-sync")
let Width_inches= readlineSync.question("\nWidth:\n")
let Length_inches= readlineSync.question("\nLength:\n")

const D= Length_inches + Width_inches
let Diagonal= Math.hypot(Length_inches,Width_inches)
Diagonal = Diagonal.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 })
console.log("\nA(n)"+ Width_inches + "-by-" + Length_inches + "-inch sheet of paper has a diagonal of " + Diagonal + " inch(es).\n" );
