var Campaign = require("../models").Campaign;

module.exports = function (app) {
  app.post('/api/NewCampaign', function (req, res) {
    var newCampaign = new Campaign({
      campaignName: req.body.campaignName,
      campaignPurpose: req.body.campaignPurpose,
      campaignOwner: req.body.campaignOwner,
      campaignGoal: req.body.campaignGoal,
      campaignExpirationDate: req.body.campaignExpirationDate
    });
    newCampaign.save().then(function (err, garbage) {
      if (err) {
        return res.json({
          success: false,
          msg: 'Campaign already exists.'
        });
      }
      res.json({
        success: true,
        msg: 'Successful created new user.'
      });
    });
  });

  app.get("/api/campaigns", function (req, res) {
    Campaign.find().then(data => {
      res.send(data);
    }).catch(err => {
      res.send(err)
    })
  });
};
