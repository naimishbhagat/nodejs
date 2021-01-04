// Reading and writing file
//I/O operations
//Memory efficency
//Time efficiency

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // fs.readFile("test.json", (err, data) => {
  //   res.end(data);
  // });
  const stream = fs.createReadStream("test.json");
  stream.pipe(res);
});

server.listen(3000, () => {
  console.log("Application listening on port 3000");
});
