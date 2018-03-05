const router = require("express").Router();
const campaignRoutes = require("./campaigns");

// Campaign routes
router.use("/campaigns", campaignRoutes);

module.exports = router;
