const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = "whsec_...";
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Product = require("./../models/productModel");
const factory = require("../controllers/handlerFactory");

exports.makePayment = catchAsync(async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: req.user.name,
        quantity: req.body.quantity,
        currency: "usd",
        amount: req.body.amount,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/",
  });
  res.status(200).json({
    status: "success",
    session,
  });
});

exports.webhook = catchAsync(async (request, response, next) => {
  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Fulfill the purchase...
    handleCheckoutSession(session);
  }

  // Return a response to acknowledge receipt of the event
  response.json({ received: true });
});
