var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes')

const ROOT_DIR = path.resolve(__dirname, '../')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`${ROOT_DIR}/public`))

app.use(routes);

app.use((req, res) => {
  res.status(404).render('common/not_found')
})

app.use((err, req, res, next) => {
  res.status(404).render('common/error', {error: err})
})

module.exports = app;
