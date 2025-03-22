"use strict";
// how to assign types to a object which we are passing to a fn
function InfoPrint(user) {
    // problem with this approach is that it's type is a object 
    console.log("Name: ", user.name);
    console.log("Age: ", user.age);
}
const Info = {
    name: "Lucifer",
    age: Number.MAX_SAFE_INTEGER // similer to INT_MAX
};
InfoPrint(Info);
function greet(user) {
    console.log("Name: ", user.firstName + " " + user.lastName);
    console.log("Age: ", user.age);
}
const user1 = {
    firstName: "Lucifer",
    lastName: "demon",
    age: Number.MAX_SAFE_INTEGER
};
greet(user1);
