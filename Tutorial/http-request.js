const http = require("https");

// http.get("https://api.open-notify.org/astros.json", (resp) => {
//   let data = "";
//   resp.on("data", (chunk) => {
//     data += chunk;
//   });
//   resp.on("end", () => {
//     let jsonData = JSON.parse(data);
//     console.log(jsonData);
//   });
// });

const data1 = JSON.stringify({
  name: "John doe",
  Job: "Content Writer",
});
const options = {
  hostname: "reqres.in",
  path: "/api/users",
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
};
//request
const req = http.request(options, (res) => {
  let body = "";
  console.log("Status code", res.statusCode);

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    console.log("body:", JSON.parse(body));
  });
});

req.write(data1);
req.end();
