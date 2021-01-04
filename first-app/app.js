/*function sayHello(name){
    console.log('Hello '+ name);
}

setTimeout(function(){
    sayHello('Naimish');
},2000);
*/


const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg)=> {
    console.log('Listener called', arg.id);
});

logger.log('message');
