const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  campaignName: {
    type: String,
    required: true
  },
  campaignPurpose: {
    type: String,
    required: true
  },
  campaignOwner: {
    type: String,
    required: true
  },
  campaignGoal: {
    type: String,
    required: true
  },
  campaignExpirationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Campaign", campaignSchema);