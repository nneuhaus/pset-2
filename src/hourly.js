const readlineSync = require ("readline-sync")
const Hourly_wage= readlineSync.question("\nHourly  wage:\n")
let Monday= readlineSync.question("\nMonday:\n")
let Tuesday= readlineSync.question("\Tuesday:\n")
let Wednesday= readlineSync.question("\Wednesday:\n")
let Thursday= readlineSync.question("\Thursday:\n")
let Friday= readlineSync.question("\Friday:\n")
let Saturday= readlineSync.question("\Saturday:\n")
let Sunday= readlineSync.question("\Sunday:\n")
const Monday_money= Monday*Hourly_wage
const Tuesday_money=Tuesday*Hourly_wage
const Wednesday_money=Wednesday*Hourly_wage
const Thursday_money=Thursday*Hourly_wage
const Friday_money=Friday*Hourly_wage
const Saturday_money=Saturday*Hourly_wage
const Sunday_money=Sunday*Hourly_wage

const Money_made= Monday_money+Tuesday_money+Wednesday_money+Thursday_money+Friday_money+Saturday_money+Sunday_money

console.log("\nYou'll make $" + Money_made + "0 this week.\n" );
