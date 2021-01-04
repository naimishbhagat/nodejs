let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Run before"), 1000);
  setTimeout(() => reject("Error before"), 1000);
});

promise.then(
  (result) => {
    console.log(result);
    GetAfter();
  },
  (error) => {
    console.log("error " + error);
  }
);

const GetAfter = () => {
  console.log("Print After");
};
