/*
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require ('morgan');
const cookieParser = require ('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

const auth = require('../routes/auth');


const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/auth', auth);
// app.use(cors());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view


// Set up promises with mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-secure', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.listen(PORT, function () {
    console.log('🌎 ==> Fundraiser Server listening on PORT ${PORT}!');
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/