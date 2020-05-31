const mongoose = require("mongoose");
const slugify = require("slugify");
const ProductSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.ObjectId, ref: "Category" },
  name: { type: String },
  images: [String],
  coverImage: String,
  description: { type: String },
  price: { type: Number },
  available: { type: Boolean, default: true },
  slug: { type: String },
});
ProductSchema.index({ slug: 1 });

ProductSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

ProductSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "title",
  });
  next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
