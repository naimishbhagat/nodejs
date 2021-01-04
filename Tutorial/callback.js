const getMessage = (message, callback) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 1000);
};

const DisplayMessage = () => {
  console.log("display message");
};

getMessage("get message", DisplayMessage);
//DisplayMessage();
