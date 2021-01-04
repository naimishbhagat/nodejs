const buf = Buffer.from("Hey");
console.log(buf.toString());
console.log(buf[0]);

console.log(buf[1]);
console.log(buf[2]);

const buf1 = Buffer.alloc(4);
buf1.write("Hey!");
console.log(buf1[0]);

console.log(buf1[1]);
console.log(buf1[2]);
