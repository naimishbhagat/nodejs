 //Asynchronous
console.log('Before');
getUser(1,getRepos);
console.log('After');

//Synchronous
/*
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
console.log('After');
*/

function getRepos(user){
    console.log(user);
    getRepositories(user.gitHubUsername,getComms);
}

function getComms(repos){
    console.log(repos);
    getCommits(repos,displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a database.');
        callback({id: id, gitHubUsername: 'naimishbhagat-wcg' });
    },2000);
}

function getRepositories(username,callback) {
    setTimeout(() => {
        callback(['repo1','repo2','repo3']);
    },2000);
}


function getCommits(repo,callback) {
 setTimeout(() => {
     callback(['commit1','commit2','commit3']);
 },2000);
}
// Callbacks
// Promises
// Async/await

