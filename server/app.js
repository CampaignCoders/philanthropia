const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require ('morgan');
const cookieParser = require ('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

// const cors = require('cors');
// const uuidv1 = require('uuid/v1');
// const moment = require('moment');
// const ServerConstants = require("./constants");

//const index = require('./src/routes/Home');

const app = express();

// connect Mongoose to the local Mongodb called philanthropa
//mongoose.connect('mongodb://localhost/philanthropa');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(cors());

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/philanthropa",
  {
    useMongoClient: true
  }
);


app.listen(PORT, function () {
    console.log('🌎 ==> Fundraiser Server listening on PORT ${PORT}!');
});
