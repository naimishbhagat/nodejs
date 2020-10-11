const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/',home);
app.use('/api/courses/',courses);

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}
app.use(logger);




//api/customers/?orderBy=asc
//req.params will give {year:2018,month:06} parameters
//req.query will give orderBy: "asc" as query string parameters
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}`));