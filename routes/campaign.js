var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

module.exports = function (mongoose) {

  var Campaign = require("../models/campaign")(mongoose);
  
  router.post('/NewCampaign', function(req, res) {
     
  
      var newCampaign = new Campaign({
        campaignName: req.body.campaignName,
        campaignPurpose: req.body.campaignPurpose,
        campaignOwner: req.body.campaignOwner,
        campaignGoal: req.body.campaignGoal,
        campaignExpirationDate: req.body.campaignExpirationDate
      });
      newCampaign.save().then(function(err,garbage) {
        if (err) {
          return res.json({success: false, msg: 'Campaign already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    });

    router.get("/NewCampaign", function(req,res){
        Campaign.findAll().then((err, data)=> {
          res.json(data);
        }
        )


    })

  return router;

};