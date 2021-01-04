const path = require("path");

file = path.basename("test.json");
console.log(file);
file = path.isAbsolute("/Users/naimish/Sites/Node-Projects");
let dir = "Tutorial";
file = path.join("/Users/naimish/Sites/Node-Projects", dir, "test.json");
console.log(file);
file = path.parse("Tutorial/test.json");
console.log(file);
file = path.resolve("Tutorial/test.json");
console.log(file);
