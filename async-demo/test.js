let begin = Date.now();
function secondsSinceStart() {
  return Math.floor((Date.now() - begin) / 1000);
}

// Convert code below to async/await

async function resolveAfter2Seconds() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(secondsSinceStart()), 2000);
  });
  return promise;
}

async function doStuff() {
  let n = 0;
  await resolveAfter2Seconds();
  await resolveAfter2Seconds();
  await resolveAfter2Seconds();
  n = await resolveAfter2Seconds();

  // n += await resolveAfter2Seconds();
  return n;
}

//doStuff(x => console.log(`The answer is ${x}`));
(async () => console.log(`The answer is ${await doStuff()}`))();

/*
function doStuff(resultFn) {
  let n = 0;
  resolveAfter2Seconds(x => { 
    n += x;
    resolveAfter2Seconds(x => {
      n += x;
      resultFn(n);
    });
  });
  resolveAfter2Seconds(x => n += x);
}
*/
