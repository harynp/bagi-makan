require('dotenv').config()
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var index = require('./routes/index');
var users = require('./routes/users');
var userrts = require('./routes/userRoute')
var foodrts = require('./routes/foodRoute')
var facebook = require('./routes/facebook');
var zomato = require('./routes/zomato')
var app = express();
var mongoose = require('mongoose')
mongoose.connect('mongodb://harynp:harynp@pratice-shard-00-00-vajls.mongodb.net:27017,pratice-shard-00-01-vajls.mongodb.net:27017,pratice-shard-00-02-vajls.mongodb.net:27017/bagimakan?ssl=true&replicaSet=Pratice-shard-0&authSource=admin')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/users', userrts)
app.use('/api/foods', foodrts)
app.use('/facebook', facebook)
app.use('/zomato', zomato)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
