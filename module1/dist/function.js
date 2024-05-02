"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
// arrow function
const arrow = (num1, num2) => num1 + num2;
// function in object, its call method
const poorUser = {
    fistName: 'Abdullah',
    balance: 614,
    addRoll(balance) {
        return `this is my bank Balance ${this.balance + balance}`;
    }
};
// map function
const arr = [12, 43, 44, 78];
const newArray = arr.map((elem) => elem * elem);
