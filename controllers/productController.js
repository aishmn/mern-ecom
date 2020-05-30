const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Product = require("./../models/productModel");
const Category = require("../models/categoryModel");
const factory = require("../controllers/handlerFactory");

exports.getProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.createProduct = factory.createOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
exports.updateProduct = factory.updateOne(Product);

exports.getCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);
exports.createCategory = factory.createOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
exports.updateCategory = factory.updateOne(Category);
