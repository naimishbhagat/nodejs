const axios = require("axios");
const data = JSON.stringify({
  name: "John Doe",
  Job: "Content writer",
});
axios
  .post("https://reqres.in/api/users", data)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
