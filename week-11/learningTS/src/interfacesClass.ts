interface People {
	name: string, 
	age: number,
	isLegal:() => boolean;
}

class Manager implements People { // we'll have to implement all the feilds of the interfce people
	name: string;
	age: number;
	uID: number | string; // we can add extra feeds but bare min should fullfiled
	constructor(name: string, age: number, uID: number | string) {
		this.name = name;
		this.age = age;
		this.uID = uID;
	}

	isLegal() {
		return this.age >= 18;
	}
}

const m = new Manager("AshLucifer", 21, "MAG-34");
console.log(m);
console.log(m.isLegal());