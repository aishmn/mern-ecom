const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Product = require("./../models/productModel");
const Order = require("./../models/orderModel");
const factory = require("../controllers/handlerFactory");

exports.makePayment = catchAsync(async (req, res, next) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).json({
        status: "success",
        stripeRes,
      });
    }
  });
});

exports.bookOrder = factory.createOne(Order);
exports.getAllOrders = factory.getAll(Order);

exports.getMyOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json({ status: "success", orders });
});
