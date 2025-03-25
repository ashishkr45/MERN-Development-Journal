"use strict";
class Manager {
    constructor(name, age, uID) {
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
