const fs = require("fs");
//Async way
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Sync way
const data = fs.readFileSync("test.txt", { encoding: "utf-8", flag: "r" });
console.log(data);

fs.stat("test.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.size);
});

const content = [
  {
    type: "Node Application",
  },
];
fs.writeFileSync("test.json", JSON.stringify(content));

const content1 = "Node Application";
fs.writeFile("test1.txt", content1, { flag: "a+" }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("successfully done");
});

fs.unlink("test1.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Removed");
});
