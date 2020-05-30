const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router
  .route("/")
  .get(productController.getCategories)
  .post(productController.createCategory);

router
  .route("/:id")
  .get(productController.getCategory)
  .post(productController.createCategory)
  .patch(productController.updateCategory);

module.exports = router;
