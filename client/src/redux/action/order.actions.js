import api from "./../../utils/api";
import { ORDER_BOOKED, GET_MY_ORDERS } from "./types";
import { emptyCart } from "./cart.actions";

export const bookOrder = (
  price,
  products,
  user,
  paymentData,
  history
) => async (dispatch) => {
  const body = {
    products: products.map((product) => product._id),
    user,
    price,
    delivery_address: {
      street: paymentData.billing_details.address.line1,
      city: paymentData.billing_details.address.city,
      state: paymentData.billing_details.address.city,
      zipcode: paymentData.billing_details.address.postal_code,
      country: paymentData.billing_details.address.city,
    },
  };

  try {
    await api.post("/orders", body);
    dispatch({ type: ORDER_BOOKED });
    dispatch(emptyCart());
    localStorage.removeItem("cartItems");
    history.push("/dashboard");
  } catch (error) {
    console.log(error.response);
  }
};

export const getMyOrders = () => async (dispatch) => {
  try {
    const orders = await api.get("/orders/my-orders");

    dispatch({ type: GET_MY_ORDERS, payload: orders.data.orders });
  } catch (err) {
    console.log(err.response);
  }
};
