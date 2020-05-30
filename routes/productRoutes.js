const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const categoryRoutes = require("./categoryRoutes");

const router = express.Router();

router.use("/category", categoryRoutes);

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .post(productController.createProduct)
  .patch(productController.updateProduct);

module.exports = router;
