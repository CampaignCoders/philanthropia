import axios from "axios";

export default {
  // Gets all Campaigns
  getCampaigns: function() {
    return axios.get("/api/campaigns");
  },
  // Gets the Campaign with the given id
  getCampaigns: function(id) {
    return axios.get("/api/campaigns/" + id);
  },
  // Deletes the Campaign with the given id
  deleteCampaigns: function(id) {
    return axios.delete("/api/campaigns/" + id);
  },
  // Saves a Campaign to the database
  saveCampaigns: function(CampaignData) {
    return axios.post("/api/campaigns", CampaignData);
  }
};
