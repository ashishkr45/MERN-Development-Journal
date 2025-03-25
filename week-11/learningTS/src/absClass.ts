abstract class User {
	name: string;
	constructor( name: string ) {
		this.name = name;
	}

	abstract greet() : void;
	hello() { // this is a default implementation
		console.log("Default function from the abs class");
	}
}

class Employee extends User {
	constructor(public name: string) {
		super(name);
		this.name = name;
	}

	greet(): void {
		console.log("Hello "+ this.name);
	}
}
 /*
 what's the differenc btw interface and abs classes
	* an abs class can have deafault implementations as we while interface can't
 */