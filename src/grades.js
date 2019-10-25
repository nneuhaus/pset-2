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

const Homework1_weighted=Homework1*Homework_weight
const Homework2_weighted=Homework2*Homework_weight
const Homework3_weighted=Homework3*Homework_weight
const Quiz1_weighted=Quiz1*Quiz_weight
const Quiz2_weighted=Quiz2*Quiz_weight
const Quiz3_weighted=Quiz3*Quiz_weight
const Test1_weighted=Test1*Test_weight
const Test2_weighted=Test2*Test_weight
const Test3_weighted=Test3*Test_weight
const Homework_together= (Homework3_weighted+Homework2_weighted+Homework1_weighted) /3
const Quiz_together=(Quiz1_weighted+Quiz2_weighted+Quiz3_weighted) /3
const Test_together=(Test1_weighted+Test2_weighted+Test3_weighted) /3
let Final_grade= (Homework_together+Quiz_together+Test_together)
Final_grade = Final_grade.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 });


console.log("\nYour marking period grade is " + Final_grade + "%.\n" );
