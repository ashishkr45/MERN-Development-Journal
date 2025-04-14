// types and interfaces are almos similer 
// but in types we can also define unions

type stringOnum = string | number;

function add(a: stringOnum, b: stringOnum) {
    if (typeof a === "number" && typeof b === "number") {
        console.log("Sum: ", a + b);
    } else {
        console.log("Concatenation: ", String(a) + String(b));
    }
}

add(5, 10);          // Sum: 15
add("Hello", "World"); // Concatenation: HelloWorld
add(5, "10");        // Concatenation: 510


// example 2
type Employee = {
	name: String,
	startDate: Date
}

type Manager = {
	name: String,
	department: String
}

type teamLead = Employee & Manager;

const Dev: teamLead = {
	name: "Lucifer",
	startDate: new Date(),
	department: "Developers",
}