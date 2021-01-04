const { resolve } = require("path");

const Clown = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("thanks");
    }, 1000);
  });
};

async function msg(callback) {
  const msg = await Clown();

  console.log("message", msg);
  callback();
}

msg(getResult);

function getResult() {
  console.log("Execute After");
}
