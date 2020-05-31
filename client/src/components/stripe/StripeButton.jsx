import React from "react";
import StripeCheckout from "react-stripe-checkout";
import api from "../../utils/api";
import { bookOrder } from "../../redux/action/order.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const StripeButton = ({ price, bookOrder, user, products, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_weW7y8bU4MIxwpLC4AWUgoM600BQHZ547K";
  const onToken = async (token) => {
    const data = {
      amount: priceForStripe,
      token,
    };
    try {
      const payment = await api.post("/orders/payment", data);
      const paymentData = payment.data.stripeRes;
      bookOrder(price, products, user, paymentData, history);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="MK-ECOM"
      billingAddress
      shippingAddress
      image=""
      description={`Total amount to be paid ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
StripeButton.propTypes = {
  bookOrder: PropTypes.func,
};
export default connect(null, { bookOrder })(withRouter(StripeButton));
