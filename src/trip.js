const readlineSync = require ("readline-sync")

let Students= readlineSync.question("\nStudents: ")
let Teachers= readlineSync.question("\nTeachers: ")
let Capacity= readlineSync.question("\nBus Capacity: ")

const People= parseInt(Students) + parseInt(Teachers)
const Number_of_buses=Math.ceil(People/Capacity)
const Remaining_people= People % Capacity

console.log((Number_of_buses) + " bus(es) is (are) needed, with " + Remaining_people + " passenger(s) on the last bus. \n")
