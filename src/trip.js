const readlineSync = require ("readline-sync")
const Students= readlineSync.question("\nStudents:\n")
const Teachers= readlineSync.question("\nTeachers: \n")
const Capacity= readlineSync.question("\nBus Capacity: \n")

const People=Students+Teachers
const Number_of_full= People % Capacity
const People_on_full= Number_of_full*Capacity
const Remaining_people=People-People_on_full
const Last_bus= Remaining_people

console.log(Number_of_full+ "\nbus(es) is (are) needed, with " + Last_bus + " passenger(s) on the last bus. \n")
