const readlineSync= require ("readline-sync")
const Length= 48
const Width= 24
const Diameter= 6
const Area= Length * Width
const CircleRSq=Math.pow((Diameter / 2), 2)
const Circle = CircleRSq * Math.PI
let Surface_Area= Area - Circle
Surface_Area = Surface_Area.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 })
console.log("\nThe surface area of a standard Cornhole board is " + Surface_Area + " square inch(es). \n")
