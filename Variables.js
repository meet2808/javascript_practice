const studentId = 101;
let name = "Meet";
var city = "ahmedabad";

// console.table([studentId, name, city]);

// Here we can't able to update variables who declare as a constant in the code, there value remain same in entire code
// studentId = 100;
// name = "meet panchal";
// city = "ahmedabad, gujrat";
// console.table([studentId, name, city]);


/*
    Scope of the variables
    var have the global scope
    let and const have block scope means if any variable defined with let and const inside any curly braces or the file or module, then that variable can't access outside that curly braces or the file or module.
*/

var college;

if (studentId) {
    college = "KSSBM";
    let year = "Fourth";
    const sem = "seven"
    console.table([college, year, sem]);
}

console.table([college, year, sem]);