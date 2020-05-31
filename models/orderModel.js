const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
  delivery_address: {
    street: { type: String, required: "Street is required" },
    city: { type: String, required: "City is required" },
    state: { type: String },
    zipcode: { type: String, required: "Zip Code is required" },
    country: { type: String, required: "Country is required" },
  },
  payment_id: {},
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  status: {
    type: String,
    default: "Processing",
    enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
  },
});
OrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "products",
  }).populate({ path: "user" });
  next();
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
