interface interUser {
	name: string,
	age: number
}

type typUser = {
	name: string,
	age: number
}

// diff btw'em 
/*
	* you cannot define class form the type
	* in type we can do unions and intersection 
*/

// intersection
type employee = {
	name: string,
	startDate: string
}

type manager = {
	name: string,
	department: string
}

type teamLead = employee & manager; 

const e: employee = {
	name: "Lucifer",
	startDate: "04-04-04"
}

const m1: manager = {
	name: "AshLucifer",
	department: "AI and Automations"
}

const tl: teamLead = {
	name: "matureLadykiller",
	startDate: "04-07-19",
	department: "SolanaDev"
}

// Create two types called User and Admin,
// Create a function that takes etther a user or an admin as an tnput, and returns a strtng saying •welcome, [name)

type user1 = {
	name: string,
}

type admin = {
	name: string
}

type userOAdmin = user1 | admin;
function shallowGreet(u1: userOAdmin) {
	console.log(u1.name);
}

type twoPoints = {
	x: number,
	y: number
}

type randoName = {
	name: string
}
type randos = twoPoints & randoName;
type randosI = twoPoints | randoName;

const p1: randos = {
	x: 0,
	y: 1,
	name: "ash"
}

const p2: randosI = {
	y: 1,
	name: "Ash"
}

const p3: randosI = {
	name: "ash"
}

const p4: randosI = {
	x: 43,
	y: 34
}

const p5: randos = {
	x: 12,
	y: 4,
	name: "as",
}