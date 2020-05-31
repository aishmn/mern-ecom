const express = require("express");
const authController = require("./../controllers/authController");
const orderController = require("./../controllers/orderController");
const router = express.Router();
router.post("/payment", authController.protect, orderController.makePayment);

// Match the raw body to content type application/json
router
  .route("/")
  .get(orderController.getAllOrders)
  .post(authController.protect, orderController.bookOrder);

router
  .route("/my-orders")
  .get(authController.protect, orderController.getMyOrders);

module.exports = router;
