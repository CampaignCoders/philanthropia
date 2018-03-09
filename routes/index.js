module.exports = (app) => {
  return {
    Auth: require("./auth")(app),
    Campaign: require("./campaign")(app)
  }
};