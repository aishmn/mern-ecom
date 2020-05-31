const express = require("express");
const authController = require("./../controllers/authController");
const orderController = require("./../controllers/orderController");
const router = express.Router();
const bodyParser = require("body-parser");
const endpointSecret = "whsec_0C4ieW2aV8UfoXRKZitg2S6QAT6WTvBs";
router.post("/payment", authController.protect, orderController.makePayment);

// Match the raw body to content type application/json
router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  orderController.webhook
);

module.exports = router;
