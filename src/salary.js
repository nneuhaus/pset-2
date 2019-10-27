const readlineSync= require ("readline-sync")
const Pre_tax=.07
const Federal=.157
const State=.0447
const Social=.062
const Medicare=.0145
const Annual_salary=readlineSync.question("\n Annual Salary: \n")
const Inital_salary=Annual_salary/24
const Pre_tax_contribution=Inital_salary * Pre_tax
const Initial_minus=Inital_salary - Pre_tax_contribution
const Federal_contribution=Initial_minus * Federal
const State_contribution=Initial_minus * State
const Social_contribution=Initial_minus * Social
const Medicare_contribution=Initial_minus * Medicare
let Take_home= Initial_minus - (Federal_contribution+Social_contribution+State_contribution+Medicare_contribution)
Take_home = Take_home.toLocaleString("en", { minimmumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYour take-home pay each check will be $" + Take_home + ". \n" );
