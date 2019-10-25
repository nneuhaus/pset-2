const readlineSync = require ("readline-sync")
let Homework1= readlineSync.question("\nEnter three homework grades.\n")
let Homework2=readlineSync.question("")
let Homework3=readlineSync.question("")

let Quiz1= readlineSync.question("\nEnter three quiz grades.\n")
let Quiz2=readlineSync.question("")
let Quiz3=readlineSync.question("")
let Test1= readlineSync.question("\nEnter three test grades.\n")
let Test2=readlineSync.question("")
let Test3=readlineSync.question("")
const Homework_weight=0.15
const Test_weight=0.5
const Quiz_weight=0.35


const Homework_average= (Homework1+Homework2+Homework3)/3
const Quiz_average= (Quiz1+Quiz2+Quiz3)/3
const Test_average= (Test1+Test2+Test3)/3

const Homework_scaled_grade= Homework_average*Homework_weight
const Quiz_scaled_grade= Quiz_average*Quiz_weight
const Test_scaled_grade= Test_average*Test_weight


const Final_grade= Homework_scaled_grade +Quiz_scaled_grade + Test_scaled_grade
console.log("\nYour marking period grade is " + Final_grade + "%.\n" );
