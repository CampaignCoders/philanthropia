const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  campaignName: { type: String, required: true },
  campaignPurpose: { type: String, required: true },
  campaignGoal: { type: String, required: true },
  campaignExpiration: { type: Date, default: Date.now },
  campaignImage: {type: String}
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
