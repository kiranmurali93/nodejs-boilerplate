const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
//const passport = require('passport');
//const bodyParser = require('body-parser');
//const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

const tempRouts = require('./src/routes/temprouts')

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)}`);
  });

app.get('/',(req, res) =>{
    res.render('index')
})

app.use('/temp',tempRouts);

// sample test 
/*
  app.get('/',(req, res)=> {
     res.send('hello')
 })
*/
