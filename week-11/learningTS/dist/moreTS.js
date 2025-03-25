"use strict";
let nums = [45, 34, 2, 6, 12, 69];
function maxNumber(nums) {
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }
    return maxNum;
}
console.log(maxNumber(nums));
const users = [
    { firstName: "Alice", lastName: "Johnson", age: 25, address: { city: "New York", state: "NY", pincode: 10001 } },
    { firstName: "Bob", lastName: "Smith", age: 30 }, // No address
    { firstName: "Charlie", lastName: "Brown", age: 22, address: { city: "Los Angeles", state: "CA", pincode: 90001 } },
    { firstName: "David", lastName: "Williams", age: 28 }, // No address
    { firstName: "Emily", lastName: "Davis", age: 35, address: { city: "Chicago", state: "IL", pincode: 60601 } },
    { firstName: "Ash", lastName: "Lucifer", age: 20, address: { city: "Bhagalpur", state: "Bihar", pincode: 813203 } },
];
console.log(users);
const ofLegalAge = users.filter(user => user.age >= 18);
console.log(ofLegalAge);
