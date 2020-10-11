const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        //send an HTTP request
        console.log(message);

        this.emit('messageLogged', {id:1,url:'https://www.google.com'});
    }
}

module.exports = Logger;
module.exports.endPoint = url;

