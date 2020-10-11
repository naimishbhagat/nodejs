const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function(){

    winston.exceptions.handle(new winston.transports.File({ filename: 'uncaughtExceptions.log'}));

    /*process.on('uncaughtException', (ex) => {
       //console.log('We got an uncaught exception');
       winston.error(ex.message, ex);
       process.exit(1);
    });*/

    /*throw new Error('ssdfsdf');
    const p =  Promise.reject(new Error('Something failed '));
    p.then(()=>console.log('Done'));*/

    process.on('unhandledRejection', (ex) => {
        //console.log('We got an unhandled rejection');
        throw ex;
    });

    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.add(new winston.transports.MongoDB({
        db: 'mongodb://localhost/vidly',
        options:{useUnifiedTopology: true},
        level: 'error'
    }));
};