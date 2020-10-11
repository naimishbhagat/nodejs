const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg)=> {
    console.log('Listener called', arg.id);
});

//Signalling that a event has happen
emitter.emit('messageLogged', {id:1,url:'https://www.google.com'});

/*
//Register a listener
emitter.on('logging', (msg)=> {
    console.log('data: '+ msg.msg);
});

//Signalling that a event has happen
emitter.emit('logging', {msg:'This is my message'});
*/