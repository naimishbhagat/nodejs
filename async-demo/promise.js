/*
const p = new Promise((resolve,reject) => {
    // Kick off some async work
    // ...
    setTimeout(() => {
        resolve(1); // pending => resolved, fulfilled

        reject(new Error('message')); // pending => rejected
    },2000);

});

p.then(result => console.log('Result', result))
 .catch(err => console.log('Error',err.message));
*/
//Asynchronous
console.log('Before');
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err=>console.log('Errpr',err.message));
console.log('After');


function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database.');
            resolve({id: id, gitHubUsername: 'naimishbhagat-wcg' });
        },2000);
    });
}


function getRepositories(username) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling Github Api....');
            resolve(['repo1','repo2','repo3']);
        },2000);
    });
}


function getCommits(repo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling Github Api....');
            resolve(['commit1','commit2','commit3']);
        },2000);
    });
}