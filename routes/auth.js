var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var User = require("../models").User;

module.exports = function (app) {

  app.post('/api/register', function (req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({
        success: false,
        msg: 'Please pass username and password.'
      });
    } else {
      var newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        organization: req.body.organization,
        username: req.body.username,
        password: req.body.password
      });
      console.log("hi", newUser.save);
      // save the user
      newUser.save().then(function (err, garbage) {
        if (err) {
          return res.json({
            success: false,
            msg: 'Username already exists.'
          });
        }
        console.log("garbage");
        res.json({
          success: true,
          msg: 'Successful created new user.'
        });
      });
    }
  });

  app.post('/api/login', function (req, res) {
    User.findOne({
      username: req.body.username
    }, function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({
              success: true,
              token: 'JWT ' + token
            });
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    });
  });

};