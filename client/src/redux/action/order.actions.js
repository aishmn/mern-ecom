import { loadStripe } from "@stripe/stripe-js";
import api from "../../utils/api";
import { PAYMENT_SUCCESS, PAYMENT_SUCCESS_ERROR } from "./types";
import { setAlert } from "./alert.actions";
const stripePromise = loadStripe("pk_test_weW7y8bU4MIxwpLC4AWUgoM600BQHZ547K");

export const makePayment = (amount, quantity, items) => async (dispatch) => {
  const body = {
    amount,
    quantity,
    products: items,
  };
  try {
    const session = await api.post("/orders/payment", body);
    const sessionId = session.data.session.id;
    const stripe = await stripePromise;
    const { error, response } = await stripe.redirectToCheckout({
      sessionId,
    });
    console.log(response);
    if (!error) {
      console.log("no error");
    }
    localStorage.removeItem("cartItems");
    dispatch({ type: PAYMENT_SUCCESS, payload: session });
    dispatch(setAlert("Payement succesfull, your order was placed"));
  } catch (error) {
    console.log(error);
    dispatch({ type: PAYMENT_SUCCESS_ERROR, payload: error.response });
    dispatch(setAlert("Payement unsuccesfull, use valid crenditials"));
  }
};
