console.log("node App");
const a = 5;
const b = 10;

console.log(`a is ${a} and b is equal to ${b}`);

const os = require("os");
console.log(os.type());
console.log(os.platform());

const car = require("./cart");
const _ = require("lodash");
console.log(car);
console.log(car.car);
