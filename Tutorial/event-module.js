const events = require("events");
let ev = new events.EventEmitter();
ev.on("my_event", function (data) {
  console.log("event", data);
});

ev.emit("my_event", "call emil() method to fire my_event");
var c1 = (code, msg) => {
  console.log(`EventOne ${code} and ${msg} fired `);
};
ev.once("eventOnce", c1);
ev.emit("eventOnce", 200, "ok");

//unregister event
ev.off("eventOnce", c1);
