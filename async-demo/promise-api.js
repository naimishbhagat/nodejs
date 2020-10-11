const p = Promise.resolve({id: 1});
p.then(result => console.log(result));

const pr = Promise.reject(new Error('reason for rejection ....'));
pr.catch(err => console.log('Error', err.message));


//Parallel Promises
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    },2000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    },2000);
});

Promise.all([p1,p2])
    .then(result =>console.log(result));