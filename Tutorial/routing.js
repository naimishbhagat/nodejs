const { request } = require("http");

const http = require("http");
const index = (req, res) => {
  res.writeHead(200);
  res.end("Node Routing");
};
const aboutUs = (req, res) => {
  res.writeHead(200);
  res.end("About Us");
};
http
  .createServer((req, res) => {
    if (req.url == "/") {
      return index(req, res);
    }
    if (req.url === "/about-us") {
      return aboutUs(req, res);
    }
  })
  .listen(process.env.PORT || 8000);
